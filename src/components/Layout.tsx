import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import api from '../services/api';
import BookCard from './BookCard';
import Header from './Header';

const Content = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100vw;
  max-height: 100vh;
  width: 100vw;
  height: 100vh;
`;

const BookContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: auto;
  width: 100vw;
  flex-wrap: wrap;
`;

interface LayoutProps {
  id: string;
  volumeInfo: {
    title: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
  };
  saleInfo: {
    buyLink: string;
  };
}

const Layout: React.FC<LayoutProps> = (props) => {
  const [search, setSearch] = useState('');
  const [books, setBooks] = useState<LayoutProps[]>([]);

  const handleGetBooks = useCallback(async () => {
    await api.get(`${search}`).then((response) => {
      if (response.status === 200) {
        setBooks(response.data['items']);
        return;
      }
    });
  }, [search]);

  useEffect(() => {
    if (search.length === 0) return;
    handleGetBooks();
  }, [search, handleGetBooks]);

  return (
    <Content>
      <Header callbackSearch={setSearch} />
      <BookContainer>
        {!!books &&
          books.map((book) => {
            return <BookCard book={book} id={props.id} />;
          })}
      </BookContainer>
    </Content>
  );
};

export default Layout;
