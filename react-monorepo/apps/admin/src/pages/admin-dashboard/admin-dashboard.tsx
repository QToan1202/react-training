import { useCallback, useEffect, useId, useMemo } from 'react'
import { shallow } from 'zustand/shallow'
import { Grid, Text } from '@chakra-ui/layout'
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { useToast } from '@chakra-ui/toast'
import { useQuery } from '@tanstack/react-query'

import { useBookStore } from '@react-monorepo/shared/stores'
import { Card } from '@react-monorepo/shared/ui'
import { COLORS, MESSAGES } from '@react-monorepo/shared/utils'
import { get } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'

export const AdminDashboard = () => {
  const { books } = useBookStore((state) => ({ books: state.books, clearAllBooks: state.reset }), shallow)
  const toast = useToast()
  const toastID = useId()

  const { data, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: (): Promise<IBook[]> => get('/books'),
    staleTime: 1000 * 60 * 10,
  })

  const renderData: React.ReactNode = useMemo(() => {
    if (!books.length) return <Text textAlign="center">Oops! There's no books.</Text>

    return books.map((book) => (
      <Card
        href={`/books/${book.id}`}
        key={book.id}
        imageUrl={book.cover}
        name={book.name}
        author={book.author}
        alt="book cover"
      />
    ))
  }, [books])

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
    data && useBookStore.setState({ books: data })
  }, [data])

  return (
    <Tabs isFitted variant="unstyled">
      <TabList>
        <Tab textTransform="capitalize">books</Tab>
        <Tab textTransform="capitalize">members</Tab>
        <Tab textTransform="capitalize">hire requests</Tab>
      </TabList>
      <TabIndicator h="2px" bg={COLORS.PRIMARY} />

      <TabPanels>
        <TabPanel>
          <Grid
            templateColumns={{
              base: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
              xl: 'repeat(5, 1fr)',
              '2xl': 'repeat(7, 1fr)',
            }}
          >
            {renderData}
          </Grid>
        </TabPanel>

        <TabPanel>
          <p>members</p>
        </TabPanel>

        <TabPanel>
          <p>hire</p>
        </TabPanel>
      </TabPanels>
      {isError && renderError()}
    </Tabs>
  )
}