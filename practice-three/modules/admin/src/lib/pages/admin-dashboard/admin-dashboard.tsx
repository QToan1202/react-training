import { useCallback, useEffect, useMemo } from 'react'
import { shallow } from 'zustand/shallow'
import { Center, Grid, Text } from '@chakra-ui/layout'
import { Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs'
import { useToast } from '@chakra-ui/toast'

import { useBookStore } from '@practice-three/modules/shared/store'
import { Card } from '@practice-three/modules/shared/ui'
import { COLORS } from '@practice-three/modules/shared/utils'
import { IBook } from '@practice-three/modules/shared/types'
import { get } from '@practice-three/modules/shared/services'
import { Box } from '@chakra-ui/react'

/* eslint-disable-next-line */
export interface AdminDashboardProps {}

export function AdminDashboard(props: AdminDashboardProps) {
  const { books, getBooks, clearAllBooks } = useBookStore(
    (state) => ({ books: state.books, getBooks: state.get, clearAllBooks: state.reset }),
    shallow
  )
  const toast = useToast()

  const renderData: React.ReactNode = useMemo(() => {
    if (!books.length) return <Text textAlign="center">Oops! There's no books.</Text>

    return books.map((book) => (
      <Card key={book.id} imageUrl={book.cover} name={book.name} author={book.author} alt="book cover" />
    ))
  }, [books])

  const getBookList = useCallback(async () => {
    try {
      getBooks('/books')
      // const bookList: IBook[] = await get('/books')
      // useBookStore.setState({ books: bookList })
    } catch (error) {
      if (error instanceof Error)
        toast({
          title: error.message,
          description: "Oops! Can't make request to get latest data.",
          status: 'error',
        })
    }
  }, [toast, getBooks])

  useEffect(() => {
    getBookList()

    return () => {
      clearAllBooks()
    }
  }, [getBookList, clearAllBooks])

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
    </Tabs>
  )
}

export default AdminDashboard
