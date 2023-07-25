

import { useId, useMemo, useCallback, useEffect, lazy } from 'react'
import { shallow } from 'zustand/shallow'
import { useToast, Grid, Text } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'

import { useBookStore } from '@react-monorepo/shared/stores'
import { IBook } from '@react-monorepo/shared/types'
import { Card } from '@react-monorepo/shared/ui'
import { MESSAGES } from '@react-monorepo/shared/utils'
import { get } from '@react-monorepo/shared/services'

const Card = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.Card })))

export const Home = () => {
  const { books } = useBookStore((state) => ({ books: state.books }), shallow)
  const toast = useToast()
  const toastID = useId()

  const { data, isError, error } = useQuery({
    queryKey: ['books'],
    queryFn: (): Promise<IBook[]> => get('/books'),
    refetchInterval: 1000 * 60 * 10,
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
    useBookStore.setState({ books: data })
  }, [data])

  return (
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
      {isError && renderError()}
    </Grid>
  )
}
