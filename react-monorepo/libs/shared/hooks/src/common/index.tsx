import { useMutation, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'

import { edit } from '@react-monorepo/shared/services'
import { useBookStore, useUserStore } from '@react-monorepo/shared/stores'
import { IBook, IUser } from '@react-monorepo/shared/types'

export const useMutateUpdate = () => {
  const { updateBook } = useBookStore((state) => ({ updateBook: state.update }), shallow)
  const { currentUser, updateUser } = useUserStore(
    (state) => ({ currentUser: state.loginUser, updateUser: state.login }),
    shallow
  )
  const queryClient = useQueryClient()
  const mutateUpdate = useMutation({
    mutationFn: (variables: {
      path: string
      id: number
      options: Readonly<Partial<IBook | IUser>>
    }): Promise<IBook | IUser> => edit<IBook | IUser>(variables.path, variables.id, variables.options),

    onSuccess: (data) => {
      if ('author' in data) {
        updateBook(data)
        queryClient.invalidateQueries(['books'])
      }
      if ('email' in data) updateUser({ ...currentUser, ...data })
    },
  })

  return mutateUpdate
}
