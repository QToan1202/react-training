import { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import {
  AspectRatio,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Heading,
  Image,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
  chakra,
  useDisclosure,
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
import { FiBook, FiEdit2, FiTrash2 } from 'react-icons/fi'

import { useBookStore, useHiredStore, useUserStore } from '@react-monorepo/shared/stores'
import { IBook, IHireRequest, IUser } from '@react-monorepo/shared/types'
import { COLORS, MESSAGES } from '@react-monorepo/shared/utils'
import { add, edit, find, remove } from '@react-monorepo/shared/services'
import { ConfirmDialog } from '../../components'

export const BookDetail = () => {
  const { bookId } = useParams()
  const { currentUser, updateUser } = useUserStore(
    (state) => ({ currentUser: state.loginUser, updateUser: state.login }),
    shallow
  )
  const { books, addBook, removeBook, updateBook } = useBookStore(
    (state) => ({ books: state.books, addBook: state.add, removeBook: state.remove, updateBook: state.update }),
    shallow
  )
  const { addHireRequest } = useHiredStore((state) => ({ addHireRequest: state.add }), shallow)
  const initState = useCallback(() => {
    if (!bookId) return
    const selectedBook: IBook | undefined = books.find((item) => item.id === +bookId)

    if (!selectedBook) return
    return selectedBook
  }, [bookId, books])
  const [bookData, setBookData] = useState<IBook | undefined>(initState)
  const { data, isError, error } = useQuery({
    queryKey: ['books', bookId],
    enabled: !(bookId && bookData),
    queryFn: (): Promise<IBook> => find<IBook>(`/books/${bookId}`),
  })

  useEffect(() => {
    if (!data) return
    addBook(data)
    setBookData((prevState) => ({ ...prevState, ...data }))
  }, [data, addBook])

  const toast = useToast()
  const renderError = useCallback(() => {
    if (error instanceof Error)
      return toast({
        title: error.message,
        description: MESSAGES.ERROR_REQUEST,
        status: 'error',
      })
  }, [toast, error])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()

  const queryClient = useQueryClient()
  const { mutate: mutateDeleteBook } = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),
    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['books'])
      removeBook(variables.id)
      toast({
        title: 'Delete book success',
        description: `Book ${bookData?.name} have been deleted successfully.`,
        status: 'success',
      })
      navigate('/admin/dashboard')
    },

    onMutate: () => onClose(),
  })

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (variables: {
      path: string
      id: number
      options: Readonly<Partial<IBook | IUser>>
    }): Promise<IBook | IUser> => edit<IBook | IUser>(variables.path, variables.id, variables.options),

    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries(['books', 'users'])
      if ('author' in data) {
        updateBook(data)
        setBookData((prevState) => ({ ...prevState, ...data }))
      }
      if ('email' in data) updateUser({ ...currentUser, ...data })
    },
  })

  const updateBooksQuantity = useCallback(() => {
    if (!bookData) return
    mutateUpdate({
      path: '/books',
      id: +bookData.id,
      options: { ...bookData, ...{ quantity: bookData.quantity - 1 } },
    })
  }, [mutateUpdate, bookData])

  const updateUserHireRequest = useCallback(() => {
    if (!currentUser) return
    mutateUpdate({
      path: '/users',
      id: currentUser.id,
      options: { ...currentUser, ...{ hireRequests: currentUser.hireRequests - 1 } },
    })
  }, [mutateUpdate, currentUser])

  const handleDeleteBook = useCallback(() => {
    if (!bookId) return
    mutateDeleteBook({
      path: '/books',
      id: +bookId,
    })
  }, [bookId, mutateDeleteBook])

  const { mutate: mutateHireBook } = useMutation({
    mutationFn: (variables: { path: string; options: Partial<IHireRequest> }): Promise<IHireRequest> =>
      add<IHireRequest>(variables.path, variables.options),
    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries(['hire-requests'])
      addHireRequest(data)
      updateBooksQuantity()
      updateUserHireRequest()
      toast({
        title: 'Hire book success',
        description: `Book ${bookData?.name} have been hired successfully.`,
        status: 'success',
      })
    },
  })

  const handleEditBook = useCallback(() => navigate(`/admin/edit-book/${bookId}`), [navigate, bookId])

  const handleHireBook = useCallback(() => {
    if (!bookData) return
    if (!currentUser) return

    if (bookData.quantity <= 0) {
      return toast({
        title: 'Hire book fail',
        description: `Book ${bookData.name} have been out of stock.`,
        status: 'error',
      })
    }

    if (currentUser?.hireRequests <= 0) {
      return toast({
        title: 'Hire book fail',
        description: `User ${currentUser.firstName} ${currentUser.lastName} have been out of hire request.`,
        status: 'error',
      })
    }

    mutateHireBook({
      path: '/hire-requests',
      options: {
        bookId: bookData.id,
        userId: currentUser?.id,
        borrow_date: new Date().toJSON().slice(0, 10),
      },
    })
  }, [mutateHireBook, bookData, currentUser, toast])

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: '2fr 7fr 3fr' }}
      gap={10}
      px={{ base: 5, md: 10 }}
      pt={5}
    >
      <GridItem>
        <AspectRatio ratio={2 / 3}>
          <Image objectFit="cover" src={bookData?.cover} borderRadius="lg" alt="cover of book" />
        </AspectRatio>
        <ButtonGroup mt={5}>
          <Button
            onClick={handleEditBook}
            isDisabled={currentUser?.role !== 'admin'}
            leftIcon={<FiEdit2 />}
            variant="outline"
            _hover={{
              bgColor: COLORS.BLUE_100,
              color: COLORS.BLUE,
            }}
          >
            Edit
          </Button>
          <Button
            onClick={onOpen}
            isDisabled={currentUser?.role !== 'admin'}
            leftIcon={<FiTrash2 />}
            variant="outline"
            _hover={{
              bgColor: COLORS.RED_100,
              color: COLORS.RED,
            }}
          >
            Delete
          </Button>
          <Button
            onClick={handleHireBook}
            leftIcon={<FiBook />}
            variant="outline"
            _hover={{
              bgColor: COLORS.GREEN_100,
              color: COLORS.GREEN,
            }}
          >
            Hire
          </Button>
        </ButtonGroup>
      </GridItem>

      <GridItem>
        <Heading>{bookData?.name}</Heading>
        <VStack alignItems="flex-start">
          <Text textColor={COLORS.GRAY_200} fontSize="2xl">
            {bookData?.author}
          </Text>
          <Text textTransform="capitalize">
            <chakra.b>publish</chakra.b>: {bookData?.publish_date}
          </Text>
          <Text textTransform="capitalize">
            <chakra.b>copies</chakra.b>: {bookData?.quantity}
          </Text>
        </VStack>

        <Tabs mt={4}>
          <TabList>
            <Tab px={0} color={COLORS.PRIMARY}>
              <Text as="b" textTransform="capitalize" fontSize="xl">
                descriptions
              </Text>
            </Tab>
          </TabList>
          <TabPanels>
            <TabPanel px={0}>
              <Text as={motion.p} layout>
                {bookData?.description}
              </Text>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </GridItem>
      {
        <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleDeleteBook}
          header={`Delete ${bookData?.name} book`}
          body={`Are you sure? You can't undo this action afterwards.`}
        />
      }
      {isError && renderError()}
    </Grid>
  )
}
