import {
  render,
  screen,
  getByTestId,
  fireEvent,
  getByRole
} from '../test-utils'
import '@testing-library/jest-dom'
import Home from '../../src/pages'
import Header from '../../src/components/Header/Header'
import Layout from '../../src/components/Layout'

describe('rendering the home page', () => {
  test('rendering the Header', () => {
    render(<Home />)

    const Header = screen.getByRole('banner')

    expect(Header).toBeVisible()
  })

  test('the input is available', () => {
    render(<Home />)

    const Input = screen.getByRole('textbox')

    expect(Input).toBeVisible()
  })
})

describe('testing header components', () => {
  test('when set the on submit', () => {
    render(<Header />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'trem' } })

    expect(input).toHaveAttribute('value', 'trem')
  })

  test('if the bookcards are returning', async () => {
    render(<Layout handleSubmit={'trem'} />)

    const input = screen.getByRole('textbox')

    fireEvent.change(input, { target: { value: 'trem' } })
    fireEvent.submit(input, { event: { value: 'trem' } })

    const card = await screen.findAllByRole('bookcard')

    expect(card).toBeDefined()
  })
})
