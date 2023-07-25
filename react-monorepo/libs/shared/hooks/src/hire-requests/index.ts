import { useMutateUpdate } from './../common/index'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'

import { add } from '@react-monorepo/shared/services'
import { IBook, IHireRequest, IUser } from '@react-monorepo/shared/types'
import { useHiredStore } from '@react-monorepo/shared/stores'

export const useMutateAddHireRequest = (
  bookData: IBook | undefined,
  user: IUser | undefined
) => {
  const queryClient = useQueryClient()
  const { addHireRequest } = useHiredStore((state) => ({ addHireRequest: state.add }), shallow)
  const { mutate: mutateUpdate } = useMutateUpdate()

  const updateBooksQuantity = () => {
    if (!bookData) return
    mutateUpdate(
      {
        path: '/books',
        id: +bookData.id,
        options: { ...bookData, ...{ quantity: bookData.quantity - 1 } },
      }
    )
  }

  const updateUserHireRequest = () => {
    if (!user) return
    mutateUpdate({
      path: '/users',
      id: user.id,
      options: { ...user, ...{ hireRequests: user.hireRequests - 1 } },
    })
  }

  const addMutation = useMutation({
    mutationFn: (variables: { path: string; options: Partial<IHireRequest> }): Promise<IHireRequest> =>
      add<IHireRequest>(variables.path, variables.options),

    onSuccess: (data) => {
      queryClient.invalidateQueries(['hire-requests'])
      addHireRequest(data)
      updateBooksQuantity()
      updateUserHireRequest()
    },
  })

  return addMutation
}
