import { lazy, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Center, useToast } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

import { IBook } from '@react-monorepo/types'
import { useBookStore } from '@react-monorepo/stores'
import { useGetBookDetail, useMutateEditBook } from '@react-monorepo/hooks'
import { MESSAGES_ERRORS, MESSAGES_SUCCESS } from '@react-monorepo/utils'

const BookForm = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.BookForm })))
const Loading = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.Loading })))

const BOOKS_ENDPOINT = import.meta.env.VITE_BOOKS_ENDPOINT

const EditBook = () => {
  const { bookId } = useParams()
  const toast = useToast()
  const navigate = useNavigate()
  const { editBook } = useBookStore((state) => ({ editBook: state.update }), shallow)
  const { data: bookData, isLoading } = useGetBookDetail(bookId)
  const { mutate, isSuccess, data, error } = useMutateEditBook()

  useEffect(() => {
    if (isSuccess) {
      editBook(data)
      toast({
        title: MESSAGES_SUCCESS.EDIT.TITLE,
        description: `Book ${data.name} have been modify successfully.`,
        status: 'success',
      })
      navigate('/')
    }

    if (error instanceof Error)
      toast({
        title: error.message,
        description: MESSAGES_ERRORS.ACTION_FAIL,
        status: 'error',
      })
  }, [data, editBook, error, isSuccess, navigate, toast])

  const handleOnSubmit = useCallback(
    (values: IBook) => {
      if (!bookId) return
      mutate({
        path: BOOKS_ENDPOINT,
        id: +bookId,
        values,
      })
    },
    [mutate, bookId]
  )

  if (isLoading) return <Loading />

  return (
    <Center mt={10} px={5}>
      <BookForm onSubmit={handleOnSubmit} bookValues={bookData} />
    </Center>
  )
}

export default EditBook
