import { ThemeProvider } from 'styled-components';
import GLobalStyle from '../../Globalstyles';
import Layout from '../components/Layout';
import Theme from '../Theme';

export default function Home() {
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
      />
    </ThemeProvider>
  );
}
