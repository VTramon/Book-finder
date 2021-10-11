import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  background-color: inherit;
  margin: 20px;
  padding: 15px;
  border: 1px solid black;
  overflow: hidden;
`;

const Img = styled.img`
  object-fit: contain;
  width: 190px;
  height: 130px;
  margin: 10px;
`;

const Title = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const Authors = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`;

const Text = styled.p`
  height: inherit;
  width: inherit;
  text-align: center;
  word-wrap: break-word;
  overflow-x: unset;
`;

export interface BookCardProps {
  id: string;
  book: {
    volumeInfo: {
      title: string;
      authors: string[];
      imageLinks: {
        thumbnail?: string;
      };
    };
  };
}

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <Card>
      {props.book.volumeInfo.title !== undefined && (
        <Title>
          <Text>{props.book.volumeInfo.title}</Text>
        </Title>
      )}
      {props.book.volumeInfo.authors !== undefined && (
        <Authors>
          <Text>{props.book.volumeInfo.authors}</Text>
        </Authors>
      )}
      {props.book.volumeInfo.imageLinks !== undefined && (
        <Img
          src={props.book.volumeInfo.imageLinks.thumbnail}
          alt={props.book.volumeInfo.title}
        />
      )}
    </Card>
  );
};

export default BookCard;
