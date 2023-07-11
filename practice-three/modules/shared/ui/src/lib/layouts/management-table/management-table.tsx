import { useState } from 'react'
import { Button, HStack, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  createColumnHelper,
} from '@tanstack/react-table'

import { IUser } from '@practice-three/modules/shared/types'

export interface ManagementTableProps {
  data: (IUser & Record<'action', string>)[]
  caption?: string
}

const columnHelper = createColumnHelper<IUser & Record<'action', string>>()
const columns = [
  columnHelper.accessor('id', {
    cell: (info) => info.getValue(),
    header: 'Id',
  }),
  columnHelper.accessor('firstName', {
    cell: (info) => info.getValue(),
    header: 'First Name',
  }),
  columnHelper.accessor('lastName', {
    cell: (info) => info.getValue(),
    header: 'Last Name',
  }),
  columnHelper.accessor('email', {
    cell: (info) => info.getValue(),
    header: 'Email',
  }),
  columnHelper.accessor('phone', {
    cell: (info) => info.getValue(),
    header: 'Phone',
  }),
  columnHelper.accessor('action', {
    cell: () => (
      <HStack>
        <Button colorScheme="whatsapp">Confirm</Button>
        <Button colorScheme="blue">Edit</Button>
        <Button colorScheme="red">Delete</Button>
      </HStack>
    ),
    header: 'Action',
  }),
]

export function ManagementTable({ data, caption }: ManagementTableProps) {
  const [sorting, setSorting] = useState<SortingState>([])
  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
  })

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="cyan">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th cursor="pointer" key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </Th>
                )
              })}
            </Tr>
          ))}
        </Thead>
        <Tbody>
          {table.getRowModel().rows.map((row) => (
            <Tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  )
}

export default ManagementTable
