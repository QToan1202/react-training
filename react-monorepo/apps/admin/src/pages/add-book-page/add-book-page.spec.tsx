import { render } from '@testing-library/react'

import { AddBookPage } from './add-book-page'

describe('AddBookPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AddBookPage />)
    expect(baseElement).toBeTruthy()
  })
})
