import React, { lazy, memo, useCallback, useEffect, useMemo, useState } from 'react'
import { FiEdit2, FiTrash2 } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { Column, createColumnHelper } from '@tanstack/react-table'
import { shallow } from 'zustand/shallow'
import { Badge, HStack, IconButton, useDisclosure, useToast } from '@chakra-ui/react'

import { useUserStore } from '@react-monorepo/shared/stores'
import { IUser } from '@react-monorepo/shared/types'
import { COLORS } from '@react-monorepo/shared/utils'
import { useDeleteMember, useGetUsers } from '@react-monorepo/shared/hooks'

const ConfirmDialog = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.ConfirmDialog })))
const ManagementTable = lazy(() => import('@react-monorepo/shared/ui').then((module) => ({ default: module.ManagementTable })))

export const ManageMember = memo(() => {
  const { users } = useUserStore((state) => ({ users: state.users }), shallow)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const navigate = useNavigate()
  const [selectedMemberId, setSelectedMemberId] = useState<number>()
  const memberList: IUser[] = useMemo(() => users.filter((item) => item.role !== 'admin'), [users])
  const { data } = useGetUsers()

  useEffect(() => {
    if (!data) return
    useUserStore.setState({ users: data })
  }, [data])

  const handleClickDeleteBtn = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onOpen()
      const memberId: string | null = event.currentTarget.getAttribute('data-id')

      if (!memberId) return
      setSelectedMemberId(+memberId)
    },
    [onOpen]
  )

  const handleClickEditBtn = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      onOpen()
      const memberId: string | null = event.currentTarget.getAttribute('data-id')

      navigate(`/admin/edit-member/${memberId}`)
    },
    [onOpen, navigate]
  )

  const columnTemplate = useMemo(() => {
    const columnHelper = createColumnHelper<IUser>()
    return [
      columnHelper.accessor('id', {
        cell: (info) => info.getValue(),
        header: 'Id',
      }),
      columnHelper.accessor('firstName', {
        cell: (info) => info.getValue(),
        header: 'First name',
      }),
      columnHelper.accessor('lastName', {
        cell: (info) => info.getValue(),
        header: 'Last name',
      }),
      columnHelper.accessor('email', {
        cell: (info) => info.getValue(),
        header: 'Email',
      }),
      columnHelper.accessor('phone', {
        cell: (info) => info.getValue(),
        header: 'Phone',
      }),
      columnHelper.accessor('role', {
        cell: (info) => (
          <Badge
            px={4}
            py={1}
            borderRadius="2xl"
            bgColor={COLORS.GREEN_100}
            color={COLORS.GREEN}
            textTransform="capitalize"
          >
            {info.getValue()}
          </Badge>
        ),
        header: 'Role',
      }),
      columnHelper.display({
        id: 'actions',
        cell: (info) => (
          <HStack>
            <IconButton
              data-id={info.row.getValue('id')}
              onClick={handleClickEditBtn}
              icon={<FiEdit2 />}
              aria-label="edit button"
              variant="ghost"
              _hover={{
                bgColor: COLORS.BLUE_100,
                color: COLORS.BLUE,
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
  }, [handleClickEditBtn, handleClickDeleteBtn])

  const toast = useToast()
  const { mutate, error, isSuccess, variables } = useDeleteMember()

  useEffect(() => {
    onClose()
    if (isSuccess && variables) {
      toast({
        title: 'Delete member success.',
        description: 'Member have been deleted successfully.',
        status: 'success',
      })
    }

    if (error instanceof Error)
      toast({
        title: error.message,
        description: 'Please check your entered information.',
        status: 'error',
      })
  }, [error, isSuccess, onClose, toast, variables])

  const handleDeleteMember = useCallback(() => {
    if (!selectedMemberId) return
    mutate({
      path: '/users',
      id: selectedMemberId,
    })
  }, [mutate, selectedMemberId])

  return (
    <>
      <ManagementTable data={memberList} columns={columnTemplate} />
      {
        <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleDeleteMember}
          header={`Delete row`}
          body={`Are you sure? You can't undo this action afterwards.`}
        />
      }
    </>
  )
})
