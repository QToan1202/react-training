import { render } from '@testing-library/react'

import RegisterForm from './register-form'

describe('LoginForm', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RegisterForm />)
    expect(baseElement).toBeTruthy()
  })
})
