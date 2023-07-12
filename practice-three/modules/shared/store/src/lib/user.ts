import { AxiosRequestConfig } from 'axios'
import { create } from 'zustand'

import { IUser } from '@practice-three/modules/shared/types'
import { get } from '@practice-three/modules/shared/services'

interface UserState {
  loginUser?: IUser
  users: IUser[]
  get: (path: string, options?: AxiosRequestConfig) => void
  add: (user: IUser) => void
  update: (user: IUser) => void
  remove: (id: number) => void
  reset: () => void
  login: (user: IUser) => void
  logout: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  loginUser: undefined,
  users: [],

  get: async (path: string, options: AxiosRequestConfig = {}) => {
    const userList: IUser[] = await get(path, options)

    return set((state) => ({ users: [...state.users, ...userList] }))
  },

  add: (user: IUser) => set((state) => {
      return { users: [...state.users, user] }
    }),

  update: (user: IUser) => set((state) => {
      const data = state.users.map((item) => {
        if (item.id === user.id) return { ...item, ...user }

        return item
      })

      return { users: data }
    }),

  remove: (id: number) => set((state) => {
      const afterDelete = state.users.filter((item) => item.id !== id)

      return { users: afterDelete }
    }),

  reset: () => set({ users: [] }),

  login: (user: IUser) => set(() => ({ loginUser: user })),

  logout: () => set(() => ({ loginUser: undefined })),
}))
