import { useCallback,  useId, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Center, useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'

import { edit } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'
import { BookForm } from '@react-monorepo/shared/ui'
import { useBookStore } from '@react-monorepo/shared/stores'

export const EditBookPage = () => {
  const { bookId } = useParams()
  const toast = useToast()
  const toastID = useId()
  const navigate = useNavigate()
  const { books, editBook } = useBookStore((state) => ({ books: state.books, editBook: state.update }), shallow)
  const bookData: IBook | undefined = useMemo(() => {
    if (!bookId) return
    const selectedBook: IBook | undefined = books.find((item) => item.id === +bookId)

    if (!selectedBook) return
    return selectedBook
  }, [bookId, books])
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (variables: { path: string; id: number; options: Readonly<Partial<IBook>> }) =>
      edit(variables.path, variables.id, variables.options),
    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          id: toastID,
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries(['books'])
      editBook(data)
      toast({
        id: toastID,
        title: 'Edit book success',
        description: `Book ${data.name} have been modify successfully.`,
        status: 'success',
      })
      navigate('/admin/dashboard')
    },
  })

  const handleOnSubmit = useCallback(
    (values: IBook) => {
      if (!bookId) return
      mutate({
        path: '/books',
        id: +bookId,
        options: values,
      })
    },
    [mutate, bookId]
  )

  return (
    <Center mt={10} px={5}>
      <BookForm onSubmit={handleOnSubmit} bookValues={bookData} />
    </Center>
  )
}
