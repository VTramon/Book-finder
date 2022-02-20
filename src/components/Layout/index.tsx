import { useCallback, useEffect, useState } from 'react'
import api from '../../services/api'
import BookCard from '../BookCard'
import Footer from '../Footer/Footer'
import Header from '../Header'
import { Content, BookContainer } from './styles'
import { LayoutProps } from './types'

const Layout = () => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<LayoutProps[]>([])

  const handleGetBooks = useCallback(async () => {
    await api.get(`${search}`).then((response) => {
      if (response.status === 200) {
        setBooks(response.data['items'])
      }
    })
  }, [search])

  useEffect(() => {
    if (search.length === 0) return
    handleGetBooks()
  }, [search, handleGetBooks])

  return (
    <>
      <Header callbackSearch={setSearch} />
      <Content>
        <BookContainer>
          {!!books &&
            books.map((book, index) => {
              return <BookCard book={book} key={index} id={book.id} />
            })}
        </BookContainer>
      </Content>
      <Footer />
    </>
  )
}

export default Layout
