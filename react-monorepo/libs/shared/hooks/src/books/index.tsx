import { AxiosResponse } from 'axios'
import { shallow } from 'zustand/shallow'
import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { add, edit, find, get, remove } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'
import { useBookStore } from '@react-monorepo/shared/stores'

export const useGetBooks = (): UseQueryResult<IBook[], unknown> => {
  const bookQuery = useQuery({
    queryKey: ['books'],
    queryFn: (): Promise<IBook[]> => get<IBook>('/books'),
  })

  return bookQuery
}

export const useGetBookDetail = (bookId: number | string | undefined) => {
  const bookQuery = useQuery({
    queryKey: ['books', Number(bookId)],
    enabled: !!bookId,
    queryFn: (): Promise<IBook> => find<IBook>(`/books/${bookId}`),
  })

  return bookQuery
}

export const useMutateDeleteBook = () => {
  const { removeBook } = useBookStore((state) => ({ removeBook: state.remove }), shallow)
  const queryClient = useQueryClient()

  const mutateBook = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['books'], { exact: true })
      removeBook(variables.id)
    },
  })

  return mutateBook
}

export const useMutateAddBook = () => {
  const queryClient = useQueryClient()
  const addMutation = useMutation({
    mutationFn: (variables: { path: string; option: Partial<Omit<IBook, 'id'>> }) =>
      add<IBook>(variables.path, variables.option),

    onSuccess: () => queryClient.invalidateQueries(['books']),
  })

  return addMutation
}

export const useMutateEditBook = () => {
  const queryClient = useQueryClient()
  const editMutation = useMutation({
    mutationFn: (variables: { path: string; id: number; options: Partial<IBook> }) =>
      edit(variables.path, variables.id, variables.options),

    onSuccess: (data) => queryClient.invalidateQueries(['books', data.id]),
  })

  return editMutation
}
