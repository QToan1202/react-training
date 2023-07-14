import { render } from '@testing-library/react'

import { ManagementTable } from './management-table'
import { IUser } from '@react-monorepo/shared/types'

describe('ManagementTable', () => {
  const data: IUser[] = [
    {
      id: 1,
      firstName: 'Hez',
      lastName: 'Ken',
      email: 'admin@gmail.com',
      password: '12345678',
      phone: '0123456789',
      role: 'admin',
    },
  ]

  it('should render successfully', () => {
    const { baseElement } = render(<ManagementTable data={data} />)
    expect(baseElement).toBeTruthy()
  })
})
