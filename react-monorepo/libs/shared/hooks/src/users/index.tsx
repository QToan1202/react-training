import { useMutation, useQuery } from '@tanstack/react-query'

import { get, login, register, remove } from '@react-monorepo/shared/services'
import { IUser, TUserForm } from '@react-monorepo/shared/types'
import { AxiosResponse } from 'axios'
import { useUserStore } from '@react-monorepo/shared/stores'
import { shallow } from 'zustand/shallow'

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

export const useDeleteMember = () => {
  const { deleteMember } = useUserStore((state) => ({ deleteMember: state.remove }), shallow)
  const deleteMutation = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),

    onSuccess: (_, variables) => deleteMember(variables.id),
  })

  return deleteMutation
}

export const useGetUsers = () => {
  const getQuery = useQuery({
    queryKey: ['users'],
    queryFn: () => get<IUser>('/users'),
  })

  return getQuery
}
