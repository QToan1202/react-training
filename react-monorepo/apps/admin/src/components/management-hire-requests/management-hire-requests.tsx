import React, { lazy, memo, useCallback, useEffect, useId, useMemo, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { Column, createColumnHelper } from '@tanstack/react-table'
import { shallow } from 'zustand/shallow'
import { IconButton, useDisclosure, useToast } from '@chakra-ui/react'

import { useHiredStore } from '@react-monorepo/stores'
import { IHireRequest, IUser } from '@react-monorepo/types'
import { MESSAGES_ERRORS, MESSAGES_SUCCESS } from '@react-monorepo/utils'
import { useGetHireRequests, useMutateHireRequest } from '@react-monorepo/hooks'

const ConfirmDialog = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.ConfirmDialog })))
const ManagementTable = lazy(() => import('@react-monorepo/ui').then((module) => ({ default: module.ManagementTable })))

const ManagementHireRequests = memo(() => {
  const { hireRequests, deleteHireRequest } = useHiredStore(
    (state) => ({ hireRequests: state.hireRequests, deleteHireRequest: state.remove }),
    shallow
  )
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const toastID = useId()
  const [selectedItem, setSelectedItem] = useState<IHireRequest>()

  const handleClickConfirmBtn = useCallback(
    (event: React.MouseEvent) => {
      onOpen()
      const memberId = event.currentTarget.getAttribute('data-id')
      if (!memberId) return
      const item = hireRequests.find((item) => item.id === +memberId)
      if (!item) return
      setSelectedItem((prevState) => ({ ...prevState, ...item }))
    },
    [hireRequests, onOpen]
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
          <IconButton
            icon={<FiCheck />}
            data-id={info.row.getValue('id')}
            onClick={handleClickConfirmBtn}
            aria-label="confirm button"
            variant="ghost"
            _hover={{
              bgColor: 'green.100',
              color: 'green',
            }}
          />
        ),
      }),
    ] as Column<IUser>[]
  }, [handleClickConfirmBtn])

  const { data } = useGetHireRequests()

  useEffect(() => {
    if (!data) return
    useHiredStore.setState({ hireRequests: data })
  }, [data])

  const renderError = useCallback(
    (error: unknown) => {
      if (error instanceof Error) {
        toast({
          title: error.message,
          description: MESSAGES_ERRORS.ACTION_FAIL,
          status: 'error',
        })
      }
    },
    [toast]
  )

  const {
    confirmMutation: {
      mutate: mutateConfirm,
      isSuccess: isHireSuccess,
      isError: isHireError,
      error: hireError,
      data: returnData,
    },
  } = useMutateHireRequest(selectedItem?.book, selectedItem?.user, 'confirm')

  const handleCompleteRequest = useCallback(() => {
    if (!selectedItem) return
    mutateConfirm({
      path: '/hire-requests',
      id: selectedItem.id,
    })
    onClose()
  }, [mutateConfirm, onClose, selectedItem])

  useEffect(() => {
    if (!isHireSuccess) return
    if (isHireError) {
      renderError(hireError)
      return
    }
    if (!returnData) return
    if (toast.isActive(toastID)) return
    deleteHireRequest(returnData)
    toast({
      id: toastID,
      title: MESSAGES_SUCCESS.RETURN.TITLE,
      description: MESSAGES_SUCCESS.RETURN.DESC,
      status: 'success',
    })
  }, [deleteHireRequest, hireError, isHireError, isHireSuccess, renderError, returnData, toast, toastID])

  return (
    <>
      <ManagementTable data={hireRequests} columns={columnTemplate} />
      {
        <ConfirmDialog
          isOpen={isOpen}
          onClose={onClose}
          onDelete={handleCompleteRequest}
          header={`Confirm to complete hire request`}
          body={`Are you sure? This action mark user have return there book and remove this hire request. You can't undo this action afterwards.`}
        />
      }
    </>
  )
})

export default ManagementHireRequests
