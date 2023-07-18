import { useCallback, useEffect, useId, useState } from 'react'
import { useParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import {
  AspectRatio,
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
  useToast,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useQuery } from '@tanstack/react-query'

import { useBookStore } from '@react-monorepo/shared/stores'
import { IBook } from '@react-monorepo/shared/types'
import { COLORS, MESSAGES } from '@react-monorepo/shared/utils'
import { find } from '@react-monorepo/shared/services'

export const BookDetail = () => {
  const { bookId } = useParams()
  const { books, add } = useBookStore((state) => ({ books: state.books, add: state.add }), shallow)
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

  useEffect(() => {
    if (!data) return
    add(data)
    setBookData((prevState) => ({ ...prevState, ...data }))
  }, [data, add])

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
      {isError && renderError()}
    </Grid>
  )
}
