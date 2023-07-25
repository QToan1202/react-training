import { useMutation, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'

import { edit } from '@react-monorepo/services'
import { useAuthStore, useBookStore } from '@react-monorepo/stores'
import { IBook, IUser } from '@react-monorepo/types'

export const useMutateUpdate = () => {
  const { updateBook } = useBookStore((state) => ({ updateBook: state.update }), shallow)
  const { currentUser, updateUser } = useAuthStore(
    (state) => ({ currentUser: state.user, updateUser: state.login }),
    shallow
  )
  const queryClient = useQueryClient()
  const mutateUpdate = useMutation({
    mutationFn: (variables: { path: string; id: number; options: Partial<IBook | IUser> }): Promise<IBook | IUser> =>
      edit<IBook | IUser>(variables.path, variables.id, variables.options),

    onSuccess: (data) => {
      if ('author' in data) {
        updateBook(data)
        queryClient.invalidateQueries(['books'])
      }
      if ('email' in data) {
        updateUser({ ...currentUser, ...data })
        queryClient.invalidateQueries(['users'])
      }
    },
  })

  return mutateUpdate
}
