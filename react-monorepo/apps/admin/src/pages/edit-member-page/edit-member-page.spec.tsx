import { render } from '@testing-library/react'

import EditMemberPage from './edit-member-page'

describe('EditMemberPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditMemberPage />)
    expect(baseElement).toBeTruthy()
  })
})
