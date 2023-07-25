import { AxiosResponse } from 'axios'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import qs from 'qs'
import { useMutateUpdate } from '../common/index'

import { add, get, remove } from '@react-monorepo/services'
import { IBook, IHireRequest, IUser } from '@react-monorepo/types'

export const useGetHireRequests = () => {
  const hireRequestQuery = useQuery({
    queryKey: ['hire-requests'],
    queryFn: () =>
      get<IHireRequest>('/hire-requests', {
        params: { _expand: ['book', 'user'] },
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      }),
  })

  return hireRequestQuery
}

export const useMutateHireRequest = (
  bookData: IBook | undefined,
  user: IUser | undefined,
  action: 'add' | 'confirm'
) => {
  const queryClient = useQueryClient()
  const { mutate: mutateUpdate } = useMutateUpdate()

  const updateBooksQuantity = () => {
    if (!bookData) return
    const bookQuantity = action === 'add' ? { quantity: bookData.quantity - 1 } : { quantity: bookData.quantity + 1 }

    mutateUpdate({
      path: '/books',
      id: +bookData.id,
      options: { ...bookData, ...bookQuantity },
    })
  }

  const updateUserHireRequest = () => {
    if (!user) return
    const userRequest =
      action === 'add' ? { hireRequests: user.hireRequests - 1 } : { hireRequests: user.hireRequests + 1 }

    mutateUpdate({
      path: '/users',
      id: user.id,
      options: { ...user, ...userRequest },
    })
  }

  const addMutation = useMutation({
    mutationFn: (variables: { path: string; options: Partial<IHireRequest> }): Promise<IHireRequest> =>
      add<IHireRequest>(variables.path, variables.options),
    onSuccess: () => {
      queryClient.invalidateQueries(['hire-requests'])
      updateBooksQuantity()
      updateUserHireRequest()
    },
  })

  const confirmMutation = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),
    onSuccess: () => {
      queryClient.invalidateQueries(['hire-requests'])
      updateBooksQuantity()
      updateUserHireRequest()
    },
  })

  return { addMutation, confirmMutation }
}
