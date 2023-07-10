type TUserRole = 'admin' | 'member'

export interface IBook {
  id: number
  name: string
  author: string
  publish_date: string
  description: string
  quantity: number
  cover: string
}

export interface IUser {
  id: number
  firstName: string
  lastName: string
  email: string
  password: string
  phone: string
  role: TUserRole
}

export type FormValues = Omit<IUser, 'id' | 'role'>
