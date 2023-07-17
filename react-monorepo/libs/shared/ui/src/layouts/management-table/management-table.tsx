import { memo, useState } from 'react'
import { Flex, Table, TableCaption, TableContainer, Tbody, Td, Th, Thead, Tr, chakra } from '@chakra-ui/react'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  ColumnDef,
} from '@tanstack/react-table'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import { IUser } from '@react-monorepo/shared/types'

export interface ManagementTableProps {
  data: IUser[]
  columns: ColumnDef<IUser, unknown>[]
  caption?: string
}

export const ManagementTable = memo(({ data, caption, columns }: ManagementTableProps) => {
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
      <Table variant="striped">
        {caption && <TableCaption>{caption}</TableCaption>}
        <Thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <Tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <Th cursor="pointer" key={header.id} onClick={header.column.getToggleSortingHandler()}>
                    <Flex align="center" pos="relative">
                      {flexRender(header.column.columnDef.header, header.getContext())}
                      <chakra.span pos="absolute" right={0}>
                        {header.column.getIsSorted() &&
                          (header.column.getIsSorted() === 'asc' ? (
                            <FiChevronUp size={20} />
                          ) : (
                            <FiChevronDown size={20} />
                          ))}
                      </chakra.span>
                    </Flex>
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
})
