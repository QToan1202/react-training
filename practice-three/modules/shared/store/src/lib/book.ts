import { create } from 'zustand'

import { IBook } from '@practice-three/modules/shared/types'

interface BookState {
  books?: IBook[]
  add: (book: IBook) => void
  update: (book: IBook) => void
  remove: (id: number) => void
  reset: () => void
}

export const useBookStore = create<BookState>()((set) => ({
  books: undefined,

  add: (book) => set((state) => {
      if (!state.books) return state
      return { books: [...state.books, book] }
    }),

  update: (book) => set((state) => {
      if (!state.books) return state

      const data = state.books.map((item) => {
        if (item.id === book.id) return { ...item, ...book }

        return item
      })

      return { books: data }
    }),

  remove: (id: number) => set((state) => {
      if (!state.books) return state

      const afterDelete = state.books.filter((item) => item.id !== id)

      return { books: afterDelete }
    }),

  reset: () => set({ books: undefined })
}))
