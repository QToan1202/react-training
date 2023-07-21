import { useCallback, useId } from 'react'
import { useNavigate } from 'react-router-dom'
import { Center, useToast } from '@chakra-ui/react'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'

import { add } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'
import { BookForm } from '@react-monorepo/shared/ui'
import { useBookStore } from '@react-monorepo/shared/stores'

export const AddBookPage = () => {
  const toast = useToast()
  const toastID = useId()
  const navigate = useNavigate()
  const { addBook } = useBookStore((state) => ({ addBook: state.add }), shallow)
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (variables: { path: string; option: Readonly<Omit<IBook, 'id'>> }) =>
      add<IBook>(variables.path, variables.option),
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
      addBook(data)
      toast({
        id: toastID,
        title: 'Add book success',
        description: `Book ${data.name} have been add successfully.`,
        status: 'success',
      })
      navigate('/admin/dashboard')
    },
  })

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
