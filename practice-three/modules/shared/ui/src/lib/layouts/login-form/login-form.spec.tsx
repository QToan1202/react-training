import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'

import LoginForm from './login-form'

describe('LoginForm', () => {
  const mockOnSubmit = vi.fn()

  beforeEach(() => {
    render(<LoginForm onSubmit={mockOnSubmit} />)
  })

  it('should render successfully', () => {
    expect(screen.getByRole('textbox', { name: /email/i })).toBeInTheDocument()
  })

  it('should be submit successfully', () => {
    const email = screen.getByRole('textbox', {
      name: /email/i,
    })
    user.type(email, 'example@gmail.com')

    const password = screen.getByLabelText(/password/i)
    user.type(password, '123123123')

    const checkBox = screen.getByText(/remember me/i) 
    user.click(checkBox)

    user.click(screen.getByRole('button', { name: /sign in/i }))

    waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
