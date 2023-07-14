import { add, get } from './common'

import { IUser, TUserForm } from '@react-monorepo/shared/types'
import { MESSAGES } from '@react-monorepo/shared/utils'

const getUsers = async (path: string, email: string): Promise<IUser[]> => {
  return get<IUser>(path, { params: { email } })
}

export const login = async (path: string, email: string, password: string): Promise<IUser> => {
  const userList: IUser[] = await getUsers(path, email)

  if (!userList.length) throw Error(MESSAGES.RE_CHECK_INFO)
  if (userList.some((user) => user.password !== password)) throw Error(MESSAGES.RE_CHECK_INFO)

  return userList[0]
}

export const register = async (path: string, userInfo: TUserForm): Promise<IUser> => {
  const { email } = userInfo
  const userList: IUser[] = await getUsers(path, email)
  const isEmailExisted = userList.some((user) => user.email === email)

  if (isEmailExisted) throw Error(MESSAGES.EMAIL_EXISTED)
  return add<IUser>(path, { ...userInfo, role: 'member' })
}
