import { memo, useState } from 'react'
import {
  ChakraProps,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  chakra,
} from '@chakra-ui/react'
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  SortingState,
  getSortedRowModel,
  ColumnDef,
  Row,
  RowData,
} from '@tanstack/react-table'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'

import { COLORS, SHADOW, isOverDue } from '@react-monorepo/utils'

declare module '@tanstack/react-table' {
  interface TableMeta<TData extends RowData> {
    getRowStyles: (row: Row<TData>) => ChakraProps['sx']
  }
}

export interface ManagementTableProps<T extends object> {
  data: T[]
  columns: ColumnDef<T, unknown>[]
  caption?: string
}

const ManagementTable = memo(<T extends object>({ data, caption, columns }: ManagementTableProps<T>) => {
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
    meta: {
      getRowStyles: (row: Row<T & Partial<Record<'borrow_date', string>>>): ChakraProps['sx'] => {
        if (!row.original.borrow_date) return {}

        return {
          bgColor: isOverDue(row.original.borrow_date) ? COLORS.RED_200 : COLORS.WHITE,
          color: isOverDue(row.original.borrow_date) ? COLORS.WHITE : COLORS.BLACK,
        }
      },
    },
  })

  return (
    <TableContainer shadow={SHADOW.FORM} borderRadius="xl">
      <Table>
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
            <Tr key={row.id} sx={table.options.meta?.getRowStyles(row)}>
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

export default ManagementTable
