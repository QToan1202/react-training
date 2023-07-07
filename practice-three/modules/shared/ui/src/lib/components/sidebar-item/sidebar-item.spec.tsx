import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { FaBeer } from 'react-icons/fa'
import '@testing-library/jest-dom'

import SidebarItem from './sidebar-item'

describe('SidebarItem', () => {
  beforeEach(() => {
    render(
      <BrowserRouter>
        <SidebarItem icon={<FaBeer />} title="item" to="move" />
      </BrowserRouter>
    )
  })

  it('should render successfully', () => {
    const item = screen.getByText('item')

    expect(item).toBeInTheDocument()
  })

  it('should have href', () => {
    const item = screen.getByText('item')

    expect(item).toHaveAttribute('href')
    expect(item.getAttribute('href')).toBeTruthy()
  })

  it("should have redirect to '/move'", () => {
    const item = screen.getByText('item')

    expect(item.getAttribute('href')).toBe('/move')
  })
})
