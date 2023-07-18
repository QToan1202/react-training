import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IUser } from '@react-monorepo/shared/types'

interface UserState {
  loginUser?: IUser
  users: IUser[]
  add: (user: IUser) => void
  update: (user: IUser) => void
  remove: (id: number) => void
  reset: () => void
  login: (user: IUser) => void
  logout: () => void
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      loginUser: undefined,
      users: [],

      add: (user: IUser) => {
        set((state) => {
          return { users: [...state.users, user] }
        })
      },

      update: (user: IUser) => {
        set((state) => {
          const afterUpdate: IUser[] = state.users.map((item) => {
            if (item.id === user.id) return user

            return item
          })

          return { users: afterUpdate }
        })
      },

      remove: (id: number) => {
        set((state) => {
          const afterDelete: IUser[] = state.users.filter((item) => item.id !== id)

          return { users: afterDelete }
        })
      },

      reset: () => set({ users: [] }),

      login: (user: IUser) => set(() => ({ loginUser: user })),

      logout: () => set(() => ({ loginUser: undefined })),
    }),
    {
      name: 'user-store',
    }
  )
)
