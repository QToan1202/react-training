import { add, get } from './common'
import { IUser } from '@practice-three/modules/shared/types'
import { ERROR_MESSAGES } from '@practice-three/modules/shared/utils'

const getUsers = async (path: string, email: string): Promise<IUser[]> => {
  return get<IUser>(path, { params: { email } })
}

export const isLoginSuccess = async (path: string, email: string, password: string): Promise<boolean> => {
  const userList: IUser[] = await getUsers(path, email)

  if (!userList.length) return false
  return userList.some((user) => user.password === password)
}

export const register = async (path: string, userInfo: Omit<IUser, 'id' | 'role'>): Promise<IUser> => {
  const { email } = userInfo
  const userList: IUser[] = await getUsers(path,email)
  const isEmailExisted = userList.some(user => user.email === email)

  if (isEmailExisted) throw Error(ERROR_MESSAGES.EMAIL_EXISTED) 
  return add<IUser>(path, { ...userInfo, ...{ role: 'member' } })
}
