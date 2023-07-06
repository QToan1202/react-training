import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import CustomButton from './custom-button'

describe('CustomButton', () => {
  beforeEach(() => {
    render(<CustomButton title="Button" />)
  })

  it('should render successfully', () => {
    expect(screen.getByText(/button/gi)).toBeInTheDocument()
  })

  it('should have title as props', () => {
    render(<CustomButton title="Login" />)
    expect(screen.getByText(/login/gi)).toBeTruthy()
    expect(screen.getByText(/button/gi)).toBeTruthy()
  })

  it('should not show the content at the start', () => {
    expect(screen.queryByText(/register/gi)).not.toBeInTheDocument()
  })
})
