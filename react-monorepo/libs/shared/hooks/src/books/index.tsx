import { AxiosResponse } from 'axios'
import { shallow } from 'zustand/shallow'
import { UseQueryResult, useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { find, get, remove } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'
import { useBookStore } from '@react-monorepo/shared/stores'

export const useGetBooks = (): UseQueryResult<IBook[], unknown> => {
  const bookQuery = useQuery({
    queryKey: ['books'],
    queryFn: (): Promise<IBook[]> => get<IBook>('/books'),
  })

  return bookQuery
}

export const useGetBookDetail = (bookId: number | string | undefined): UseQueryResult<IBook, unknown> => {
  const bookQuery = useQuery({
    queryKey: ['books', bookId],
    queryFn: (): Promise<IBook> => find<IBook>(`/books/${bookId}`),
  })

  return bookQuery
}

export const useMutateDeleteBook = (onClose: () => void) => {
  const { removeBook } = useBookStore((state) => ({ removeBook: state.remove }), shallow)
  const queryClient = useQueryClient()

  const mutateBook = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['books'])
      removeBook(variables.id)
    },

    onMutate: () => onClose(),
  })

  return mutateBook
}
