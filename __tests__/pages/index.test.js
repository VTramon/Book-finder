import { render, screen, getByTestId, getByRole } from '../test-utils'
import '@testing-library/jest-dom'
import userEvent from '@testing-library/user-event'
import Home from '../../src/pages'
import Header from '../../src/components/Header'
import Layout from '../../src/components/Layout'
import { serialize } from 'v8'

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
  test('when set the on submit', async () => {
    const callbackSearch = jest.fn()
    render(<Header callbackSearch={callbackSearch} />)

    const input = screen.getByPlaceholderText('qual livro deseja buscar?')

    userEvent.type(input, 'livros')

    userEvent.type(input, '{enter}')

    expect(input).toHaveAttribute('value', 'livros')
    expect(callbackSearch).toBeCalled()
  })

  test('if the bookcards are returning', async () => {
    render(<Layout />)
    const input = screen.getByPlaceholderText('qual livro deseja buscar?')

    userEvent.type(input, 'trem')
    userEvent.type(input, '{enter}')

    const cardArr = await screen.findAllByTestId('cardBook')
    const card = cardArr[1]
    expect(card).toBeInTheDocument()
  })
})
