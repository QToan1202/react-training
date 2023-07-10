import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

import Search from './search'

const searchValue = 'search'
const setSearchValue = vi.fn()

describe('Search', () => {
  beforeEach(() => {

    render(<Search value={searchValue} onChange={setSearchValue} />)
  })

  it('should render successfully', () => {
    const searchInput: HTMLInputElement = screen.getByPlaceholderText('start searching...')

    expect(searchInput).toBeInTheDocument()
  })

  it('should have the init value', () => {
    const searchInput: HTMLInputElement = screen.getByPlaceholderText('start searching...')

    expect(searchInput.value).toBe('search')
  })

  it('action can be call', () => {
    const searchInput: HTMLInputElement = screen.getByPlaceholderText('start searching...')

    fireEvent.change(searchInput, { target: { value: 'test' } })
    expect(setSearchValue).toBeCalled()
  })
})
