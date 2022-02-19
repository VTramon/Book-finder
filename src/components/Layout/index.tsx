import { useCallback, useEffect, useState } from 'react'
import api from '../../services/api'
import BookCard from '../BookCard'
import Footer from '../Footer/Footer'
import Header from '../Header'
import { Content, BookContainer } from './styles'
import { LayoutProps } from './types'

const Layout: React.FC<LayoutProps> = (props) => {
  const [search, setSearch] = useState('')
  const [books, setBooks] = useState<LayoutProps[]>([])

  const handleGetBooks = useCallback(async () => {
    await api.get(`${search}`).then((response) => {
      if (response.status === 200) {
        // eslint-disable-next-line dot-notation
        setBooks(response.data['items'])
      }
    })
  }, [search])

  useEffect(() => {
    if (search.length === 0) return
    handleGetBooks()
  }, [search, handleGetBooks])

  return (
    <Content>
      <Header callbackSearch={setSearch} />
      <BookContainer>
        {!!books &&
          books.map((book) => {
            return <BookCard book={book} key={props.id} id={props.id} />
          })}
      </BookContainer>
      <Footer />
    </Content>
  )
}

export default Layout
