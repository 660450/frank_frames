import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import Navbar from './Navbar'

vi.mock('next/navigation', () => ({
  usePathname: () => '/en',
}))

describe('Navbar', () => {
  it('shows the language switch and marks english as current', () => {
    render(<Navbar />)

    expect(screen.getByRole('link', { name: 'NL' })).toHaveAttribute('href', '/')
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('href', '/en')
    expect(screen.getByRole('link', { name: 'EN' })).toHaveAttribute('aria-current', 'page')
  })
})
