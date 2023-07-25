import { lazy, useCallback, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Center, useToast } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

import { IBook } from '@react-monorepo/shared/types'
import { useBookStore } from '@react-monorepo/shared/stores'
import { useMutateAddBook } from '@react-monorepo/shared/hooks'

const BookForm = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.BookForm })))

const AddBookPage = () => {
  const toast = useToast()
  const navigate = useNavigate()
  const { addBook } = useBookStore((state) => ({ addBook: state.add }), shallow)
  const { mutate, isSuccess, error, data } = useMutateAddBook()

  useEffect(() => {
    if (isSuccess) {
      addBook(data)
      toast({
        title: 'Add book success',
        description: `Book ${data.name} have been add successfully.`,
        status: 'success',
      })
      navigate('/')
    }

    if (error instanceof Error)
      toast({
        title: error.message,
        description: "Action can't be performed.",
        status: 'error',
      })
  }, [addBook, data, error, isSuccess, navigate, toast])

  const handleOnSubmit = useCallback(
    (values: IBook) => {
      mutate({
        path: '/books',
        option: values,
      })
    },
    [mutate]
  )

  return (
    <Center mt={10} px={5}>
      <BookForm onSubmit={handleOnSubmit} />
    </Center>
  )
}

export default AddBookPage
