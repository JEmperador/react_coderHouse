import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer', () => {
 it('renders appropriately', () => {
   render(<Footer />)
   expect(screen.getByText("ATLAS TECH | 2022")).toBeInTheDocument()
 })
})