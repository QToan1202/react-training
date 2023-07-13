import { render } from '@testing-library/react'

import ModulesAdmin from './modules-admin'

describe('ModulesAdmin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ModulesAdmin />)
    expect(baseElement).toBeTruthy()
  })
})
