import { ThemeProvider } from 'styled-components';
import GLobalStyle from '../../Globalstyles';
import Layout from '../components/Layout';
import Theme from '../components/Theme';

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GLobalStyle />
      <Layout />
    </ThemeProvider>
  );
}
