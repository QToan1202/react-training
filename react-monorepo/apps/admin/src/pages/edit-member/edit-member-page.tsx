import { lazy, useCallback, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useToast } from '@chakra-ui/react'
import { shallow } from 'zustand/shallow'

import { useUserStore } from '@react-monorepo/stores'
import { TUserForm } from '@react-monorepo/types'
import { useFindUser, useMutateEditUser } from '@react-monorepo/hooks'

const RegisterForm = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.RegisterForm })))
const Loading = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.Loading })))

const EditMember = () => {
  const { userId } = useParams()
  const toast = useToast()
  const navigate = useNavigate()
  const { editUser } = useUserStore((state) => ({ editUser: state.update }), shallow)
  const { data: userData, isLoading } = useFindUser(userId)
  const { mutate, isSuccess, data, error } = useMutateEditUser()

  useEffect(() => {
    if (isSuccess) {
      editUser(data)
      toast({
        title: 'Edit user success',
        description: `User ${data.firstName} ${data.lastName} have been modify successfully.`,
        status: 'success',
      })
      navigate('/')
    }

    if (error instanceof Error)
      toast({
        title: error.message,
        description: "Action can't be performed.",
        status: 'error',
      })
  }, [data, editUser, error, isSuccess, navigate, toast])

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

  if (isLoading) return <Loading />

  return <RegisterForm onSubmit={handleOnSubmit} userInfo={userData} />
}

export default EditMember
