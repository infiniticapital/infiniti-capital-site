import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renderiza el brand Infiniti Kapital', () => {
  render(<App />)
  expect(screen.getByText(/Infiniti Kapital/i)).toBeInTheDocument()
})

test('permite cambiar a Journal', async () => {
  render(<App />)
  const btn = screen.getByRole('button', { name: /Journal \(iOS\/Android\)/i })
  btn.click()
  expect(await screen.findByText(/Journal de Trading/i)).toBeInTheDocument()
})
