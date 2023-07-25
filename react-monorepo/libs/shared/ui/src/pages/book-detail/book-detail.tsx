import { useCallback, useEffect, useId } from 'react'
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
import { FiBook, FiEdit2, FiTrash2 } from 'react-icons/fi'

import { useAuthStore, useHiredStore } from '@react-monorepo/shared/stores'
import { COLORS, MESSAGES } from '@react-monorepo/shared/utils'
import { useGetBookDetail, useMutateHireRequest, useMutateDeleteBook } from '@react-monorepo/shared/hooks'
import { ConfirmDialog, Loading } from '../../components'

export const BookDetail = () => {
  const { bookId } = useParams()
  const { currentUser } = useAuthStore((state) => ({ currentUser: state.user }), shallow)
  const { addHireRequest } = useHiredStore((state) => ({ addHireRequest: state.add }), shallow)
  const toast = useToast()
  const toastId = useId()
  const navigate = useNavigate()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const renderError = useCallback(
    (error: unknown) => {
      if (error instanceof Error)
        return toast({
          title: error.message,
          description: MESSAGES.ERROR_REQUEST,
          status: 'error',
        })
    },
    [toast]
  )
  const { data: bookData, isLoading, isError, error } = useGetBookDetail(bookId)

  useEffect(() => {
    isError && renderError(error)
  }, [isError, renderError, error])

  const { mutate: mutateDeleteBook, isSuccess: isDeleteBookSuccess, error: deleteError } = useMutateDeleteBook()

  const handleDeleteBook = useCallback(() => {
    if (!bookId) return
    mutateDeleteBook({
      path: '/books',
      id: +bookId,
    })
    onClose()
  }, [bookId, mutateDeleteBook, onClose])

  useEffect(() => {
    if (!isDeleteBookSuccess) {
      renderError(deleteError)
      return
    }
    toast({
      title: 'Delete book success',
      description: `Book have been deleted successfully.`,
      status: 'success',
    })
    navigate('/admin/dashboard')
  }, [isDeleteBookSuccess, deleteError, renderError, toast, navigate])

  const {
    addMutation: {
      mutate: mutateHireBook,
      isSuccess: isHireSuccess,
      isError: isHireError,
      error: hireError,
      data: returnData,
    },
  } = useMutateHireRequest(bookData, currentUser, 'add')

  useEffect(() => {
    onClose()
    if (!bookData) return
    if (!isHireSuccess) return
    if (isHireError) {
      renderError(hireError)
      return
    }
    if (!returnData) return
    if (toast.isActive(toastId)) return
    addHireRequest(returnData)
    toast({
      id: toastId,
      title: 'Hire book success',
      description: `Book ${bookData?.name} have been hired successfully.`,
      status: 'success',
    })
  }, [
    addHireRequest,
    bookData,
    hireError,
    isHireError,
    isHireSuccess,
    onClose,
    renderError,
    returnData,
    toast,
    toastId,
  ])

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

  if (isLoading) return <Loading />

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
        <ButtonGroup float='right' mt={5}>
          {currentUser?.role === 'admin' && (
            <>
              <Button
                onClick={handleEditBook}
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
            </>
          )}
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
    </Grid>
  )
}
