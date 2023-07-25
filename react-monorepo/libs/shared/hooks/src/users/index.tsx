import { useMutation } from '@tanstack/react-query'

import { login, register } from '@react-monorepo/shared/services'
import { IUser, TUserForm } from '@react-monorepo/shared/types'

export const useLoginUser = () => {
  const loginMutate = useMutation({
    mutationFn: (variables: { path: string; email: string; password: string }): Promise<IUser> =>
      login(variables.path, variables.email, variables.password),
  })

  return loginMutate
}

export const useRegisterUser = () => {
  const registerMutate = useMutation({
    mutationFn: (variables: { path: string; user: TUserForm }): Promise<IUser> =>
      register(variables.path, variables.user),
  })

  return registerMutate
}
