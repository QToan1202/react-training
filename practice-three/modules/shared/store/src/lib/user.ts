import { create } from 'zustand'

import { IUser } from '@practice-three/modules/shared/types'

interface UserState {
  user?: IUser
  add: (user: IUser) => void
  remove: () => void
}

export const useUserStore = create<UserState>()((set) => ({
  user: undefined,
  add: (user) => set(() => ({ user })),
  remove: () => set(() => ({ user: undefined })),
}))
