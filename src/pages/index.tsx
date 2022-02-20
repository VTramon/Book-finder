import { ThemeProvider } from 'styled-components'
import GLobalStyle from '../../Globalstyles'
import Layout from '../components/Layout'
import Theme from '../Theme'

const Home: React.FC = () => {
  return (
    <ThemeProvider theme={Theme}>
      <GLobalStyle />
      <Layout />
    </ThemeProvider>
  )
}

export default Home
