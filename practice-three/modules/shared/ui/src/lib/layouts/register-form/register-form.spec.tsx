import { render, screen, waitFor } from '@testing-library/react'
import user from '@testing-library/user-event'
import '@testing-library/jest-dom'

import RegisterForm from './register-form'

describe('LoginForm', () => {
  const mockOnSubmit = vi.fn()

  beforeEach(() => {
    mockOnSubmit.mockClear()
    render(<RegisterForm onSubmit={mockOnSubmit} />)
  })

  it('should render successfully', async () => {
    const firstNameElement = screen.getByRole('textbox', {
      name: /first name/i,
    })
    expect(firstNameElement).toBeInTheDocument()
  })

  it('should be submit successfully', () => {
    const firstName = screen.getByRole('textbox', {
      name: /first name/i,
    })
    user.type(firstName, 'Toan')

    const lastName = screen.getByRole('textbox', {
      name: /last name/i,
    })
    user.type(lastName, 'Nguyen')

    const email = screen.getByRole('textbox', {
      name: /email/i,
    })
    user.type(email, 'example@gmail.com')

    const password = screen.getByLabelText(/password/i)
    user.type(password, '123123123')

    const phone = screen.getByRole('textbox', {
      name: /phone/i,
    })
    user.type(phone, '0123456789')

    user.click(screen.getByRole('button', { name: /submit/i }))

    waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledTimes(1)
    })
  })
})
