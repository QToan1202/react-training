import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IBook } from '@react-monorepo/shared/types'

interface BookState {
  books: IBook[]
  add: (book: IBook) => void
  update: (book: IBook) => void
  remove: (id: number) => void
  reset: () => void
}

export const useBookStore = create<BookState>()(
  persist(
    (set) => ({
      books: [],

      add: (book: IBook) => {
        set((state) => {
          return { books: [...state.books, book] }
        })
      },

      update: (book: IBook) => {
        set((state) => {
          const afterUpdate: IBook[] = state.books.map((item) => {
            if (item.id === book.id) return { ...item, ...book }

            return item
          })

          return { books: afterUpdate }
        })
      },

      remove: (id: number) => {
        set((state) => {
          const afterDelete: IBook[] = state.books.filter((item) => item.id !== id)

          return { books: afterDelete }
        })
      },

      reset: () => set({ books: [] }),
    }),
    {
      name: 'book-store',
    }
  )
)
