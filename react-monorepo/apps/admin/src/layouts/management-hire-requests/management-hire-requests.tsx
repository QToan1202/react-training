import React, { useCallback, useEffect, useId, useMemo, useState } from 'react'
import { FiCheck, FiTrash2 } from 'react-icons/fi'
import { Column, createColumnHelper } from '@tanstack/react-table'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { shallow } from 'zustand/shallow'
import { HStack, IconButton, useDisclosure, useToast } from '@chakra-ui/react'
import qs from 'qs'

import { useBookStore, useHiredStore, useUserStore } from '@react-monorepo/shared/stores'
import { IBook, IHireRequest, IUser } from '@react-monorepo/shared/types'
import { ConfirmDialog, ManagementTable } from '@react-monorepo/shared/ui'
import { COLORS } from '@react-monorepo/shared/utils'
import { get, remove, edit } from '@react-monorepo/shared/services'
import { AxiosResponse } from 'axios'

export const ManagementHireRequests = () => {
  const { hireRequests, deleteRequest } = useHiredStore(
    (state) => ({ hireRequests: state.hireRequests, deleteRequest: state.remove }),
    shallow
  )
  const { updateBookQuantity } = useBookStore((state) => ({
    books: state.books,
    updateBookQuantity: state.update,
  }))
  const { updateUserHireRequest } = useUserStore((state) => ({ updateUserHireRequest: state.update }))
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedRequestId, setRequestMemberId] = useState<number>()

  const handleClickDeleteBtn = useCallback(
    (event: React.MouseEvent) => {
      onOpen()
      const memberId = event.currentTarget.getAttribute('data-id')

      if (!memberId) return
      setRequestMemberId(+memberId)
    },
    [onOpen]
  )
  const columnTemplate = useMemo(() => {
    const columnHelper = createColumnHelper<IHireRequest>()
    return [
      columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
        header: 'Id',
      }),
      columnHelper.accessor('book.name', {
        cell: (info) => info.getValue(),
        header: 'Book',
      }),
      columnHelper.accessor('user.firstName', {
        cell: (info) => info.getValue(),
        header: 'First name',
      }),
      columnHelper.accessor('user.lastName', {
        cell: (info) => info.getValue(),
        header: 'Last Name',
      }),
      columnHelper.accessor('borrow_date', {
        cell: (info) => info.getValue(),
        header: 'Borrow At',
      }),
      columnHelper.display({
        id: 'actions',
        cell: (info) => (
          <HStack>
            <IconButton
              icon={<FiCheck />}
              aria-label="confirm button"
              variant="ghost"
              _hover={{
                bgColor: COLORS.GREEN_100,
                color: COLORS.GREEN,
              }}
            />
            <IconButton
              data-id={info.row.getValue('id')}
              onClick={handleClickDeleteBtn}
              icon={<FiTrash2 />}
              aria-label="delete button"
              variant="ghost"
              _hover={{
                bgColor: COLORS.RED_100,
                color: COLORS.RED,
              }}
            />
          </HStack>
        ),
      }),
    ] as Column<IUser>[]
  }, [handleClickDeleteBtn])
  const { data } = useQuery({
    queryKey: ['hire-requests'],
    queryFn: () =>
      get<IHireRequest>('/hire-requests', {
        params: { _expand: ['book', 'user'] },
        paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      }),
  })

  useEffect(() => {
    if (!data) return
    useHiredStore.setState({ hireRequests: data })
  }, [data])

  const toast = useToast()
  const toastID = useId()
  const queryClient = useQueryClient()
  const { mutateAsync: mutateUpdate } = useMutation({
    mutationFn: (variables: {
      path: string
      id: number
      options: Readonly<Partial<IBook | IUser>>
    }): Promise<IBook | IUser> => edit<IBook | IUser>(variables.path, variables.id, variables.options),

    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          id: toastID,
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: () => queryClient.invalidateQueries(['books', 'users']),
  })

  const updateBooks = useCallback(() => {
    const item = hireRequests.find((item) => item.id === selectedRequestId)

    if (!item) return
    if (!item.book) return

    mutateUpdate(
      {
        path: '/books',
        id: item.bookId,
        options: { ...item.book, ...{ quantity: item.book?.quantity + 1 } },
      },
      {
        onSuccess: (data) => {
          if ('author' in data) return updateBookQuantity(data)
        },
      }
    )
  }, [mutateUpdate, hireRequests, selectedRequestId, updateBookQuantity])

  const updateRequest = useCallback(() => {
    const item = hireRequests.find((item) => item.id === selectedRequestId)

    if (!item) return
    if (!item.user) return

    mutateUpdate(
      {
        path: '/users',
        id: item.userId,
        options: { ...item.user, ...{ hireRequests: item.user?.hireRequests + 1 } },
      },
      {
        onSuccess: (data) => {
          if ('email' in data) return updateUserHireRequest(data)
        },
      }
    )
  }, [mutateUpdate, hireRequests, selectedRequestId, updateUserHireRequest])

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (variables: { path: string; id: number }): Promise<AxiosResponse['status']> =>
      remove(variables.path, variables.id),
    onError: (error: unknown) => {
      if (error instanceof Error)
        toast({
          id: toastID,
          title: error.message,
          description: "Action can't be performed.",
          status: 'error',
        })
    },

    onSuccess: (_, variables) => {
      queryClient.invalidateQueries(['hire-requests'])
      deleteRequest(variables.id)
      Promise.all([updateBooks(), updateRequest()])
      toast({
        id: toastID,
        title: 'Delete request success',
        description: `Request have been deleted successfully.`,
        status: 'success',
      })
    },

    onMutate: () => onClose(),
  })

  const handleDeleteMember = useCallback(() => {
    if (!selectedRequestId) return
    mutateDelete({
      path: '/hire-requests',
      id: selectedRequestId,
    })
  }, [mutateDelete, selectedRequestId])

  return (
    <>
      <ManagementTable data={hireRequests} columns={columnTemplate} />
      {
        <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleDeleteMember}
          header={`Delete request`}
          body={`Are you sure? You can't undo this action afterwards.`}
        />
      }
    </>
  )
}
