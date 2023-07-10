import { render } from '@testing-library/react'

import ManagementTable from './management-table'

describe('ManagementTable', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ManagementTable />)
    expect(baseElement).toBeTruthy()
  })
})
