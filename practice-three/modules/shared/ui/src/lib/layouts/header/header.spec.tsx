import { render } from '@testing-library/react'

import Header from './header'

describe('Header', () => {
  it('should render successfully', () => {
    const mockOnOpen = vi.fn()
    const { baseElement } = render(<Header onOpen={mockOnOpen} />)

    expect(baseElement).toBeTruthy()
  })
})
