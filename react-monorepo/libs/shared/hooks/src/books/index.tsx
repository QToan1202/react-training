import { get } from '@react-monorepo/shared/services'
import { IBook } from '@react-monorepo/shared/types'
import { useQuery } from '@tanstack/react-query'

export const useGetBooks = () => {
  const bookQuery = useQuery({
    queryKey: ['books'],
    queryFn: (): Promise<IBook[]> => get<IBook>('/books'),
  })

  return bookQuery
}
