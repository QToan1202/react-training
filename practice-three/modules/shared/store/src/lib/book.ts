import { create } from 'zustand'

import { IBook } from '@practice-three/modules/shared/types'
import { get } from '@practice-three/modules/shared/services'

interface BookState {
  books: IBook[]
  get: (path: string) => void
  add: (book: IBook) => void
  update: (book: IBook) => void
  remove: (id: number) => void
  reset: () => void
}

export const useBookStore = create<BookState>()((set) => ({
  books: [],

  get: async (path: string) => {
    const bookList: IBook[] = await get(path)

    return set((state) => ({ books: [...state.books, ...bookList] }))
  },

  add: (book: IBook) => set((state) => {
      return { books: [...state.books, book] }
    }),

  update: (book: IBook) => set((state) => {
      const data = state.books.map((item) => {
        if (item.id === book.id) return { ...item, ...book }

        return item
      })

      return { books: data }
    }),

  remove: (id: number) => set((state) => {
      const afterDelete = state.books.filter((item) => item.id !== id)

      return { books: afterDelete }
    }),

  reset: () => set({ books: undefined }),
}))
