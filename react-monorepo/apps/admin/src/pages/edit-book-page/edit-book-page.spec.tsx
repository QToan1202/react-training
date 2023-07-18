import { render } from '@testing-library/react'

import { EditBookPage } from './edit-book-page'

describe('EditBookPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<EditBookPage />)
    expect(baseElement).toBeTruthy()
  })
})
