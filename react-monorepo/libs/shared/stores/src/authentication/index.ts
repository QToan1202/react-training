import { create } from 'zustand'
import { persist } from 'zustand/middleware'

import { IUser } from '@react-monorepo/shared/types'

interface AuthState {
  user: IUser | undefined
  login: (user: IUser) => void
  logout: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: undefined,

      login: (user: IUser) => set(() => ({ user: user })),

      logout: () => set(() => ({ user: undefined })),
    }),
    {
      name: 'authentic-store',
    }
  )
)
