import { useCallback, useId, useMemo } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import shallow from 'zustand/shallow'
import { useMutation, useQueryClient } from '@tanstack/react-query'

import { edit } from '@react-monorepo/shared/services'
import { useUserStore } from '@react-monorepo/shared/stores'
import { IUser, TUserForm } from '@react-monorepo/shared/types'
import { RegisterForm } from '@react-monorepo/shared/ui'

export const EditMemberPage = () => {
  const { userId } = useParams()
  const toast = useToast()
  const toastID = useId()
  const navigate = useNavigate()
  const { users, editUser } = useUserStore((state) => ({ users: state.users, editUser: state.update }), shallow)
  const userData: IUser | undefined = useMemo(() => {
    if (!userId) return
    const selectedUser: IUser | undefined = users.find((item) => item.id === +userId)

    if (!selectedUser) return
    return selectedUser
  }, [userId, users])
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: (variables: { path: string; id: number; options: Readonly<Partial<IUser>> }) =>
      edit(variables.path, variables.id, variables.options),
    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          id: toastID,
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (data) => {
      queryClient.invalidateQueries(['users'])
      editUser(data)
      toast({
        id: toastID,
        title: 'Edit user success',
        description: `User ${data.firstName} ${data.lastName} have been modify successfully.`,
        status: 'success',
      })
      navigate(-1)
    },
  })

  const handleOnSubmit = useCallback(
    (values: TUserForm) => {
      if (!userId) return
      mutate({
        path: '/users',
        id: +userId,
        options: values,
      })
    },
    [mutate, userId]
  )

  return <RegisterForm onSubmit={handleOnSubmit} userInfo={userData} />
}
