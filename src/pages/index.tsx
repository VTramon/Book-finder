import { ThemeProvider } from 'styled-components'
import GLobalStyle from '../../Globalstyles'
import Layout from '../components/Layout'
import Theme from '../Theme'

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GLobalStyle />
      <Layout
        id={''}
        volumeInfo={{
          title: '',
          authors: [],
          description: '',
          imageLinks: {
            thumbnail: ''
          }
        }}
        saleInfo={{
          buyLink: ''
        }}
        book={{
          volumeInfo: {
            title: '',
            authors: [''],
            imageLinks: {
              thumbnail: ''
            }
          }
        }}
      />
    </ThemeProvider>
  )
}

export default Home
