import { TUserRole } from './common'

export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  role: TUserRole
}

export type TUserForm = Omit<IUser, 'id' | 'role'>
