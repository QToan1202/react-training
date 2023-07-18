import { useCallback, useEffect, useId, useState } from 'react'
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
import { FiEdit2, FiTrash2 } from 'react-icons/fi'

import { useBookStore } from '@react-monorepo/shared/stores'
import { IBook } from '@react-monorepo/shared/types'
import { COLORS, MESSAGES } from '@react-monorepo/shared/utils'
import { find, remove } from '@react-monorepo/shared/services'
import { ConfirmDialog } from '../../components'

export const BookDetail = () => {
  const { bookId } = useParams()
  const { books, add, removeBook } = useBookStore(
    (state) => ({ books: state.books, add: state.add, removeBook: state.remove }),
    shallow
  )
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
    add(data)
    setBookData((prevState) => ({ ...prevState, ...data }))
  }, [data, add])

  const toast = useToast()
  const toastID = useId()
  const renderError = useCallback(() => {
    if (error instanceof Error)
      return toast({
        id: toastID,
        title: error.message,
        description: MESSAGES.ERROR_REQUEST,
        status: 'error',
      })
  }, [toast, error, toastID])
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
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

  const handleDeleteBook = useCallback(() => {
    if (!bookId) return
    mutate({
      path: '/books',
      id: +bookId,
    })
  }, [bookId, mutate])

  return (
    <Grid
      templateColumns={{ base: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)', lg: '2fr 7fr 3fr' }}
      gap={10}
      px={{ base: 5, md: 10 }}
      pt={5}
    >
      <GridItem>
        <AspectRatio ratio={2 / 3}>
          <Image objectFit="cover" src={bookData?.cover} borderRadius="lg" />
        </AspectRatio>
        <ButtonGroup mt={5}>
          <Button
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
            leftIcon={<FiTrash2 />}
            variant="outline"
            _hover={{
              bgColor: COLORS.RED_100,
              color: COLORS.RED,
            }}
          >
            Delete
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
