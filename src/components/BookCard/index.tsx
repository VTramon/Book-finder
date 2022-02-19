import { BookCardProps } from './interface'
import { Authors, Card, Img, Title, Text } from './styles'

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <>
      {props.book.volumeInfo.imageLinks && props.book.volumeInfo.authors ? (
        <Card key={`${props.id}+card`} role="bookcard">
          <Title key={`${props.id}+title`}>
            <Text key={`${props.id}+titleText`}>
              {props.book.volumeInfo.title}
            </Text>
          </Title>
          <Authors key={`${props.id}+author`}>
            <Text key={`${props.id}+authorText`}>
              {props.book.volumeInfo.authors}
            </Text>
          </Authors>
          <Img
            key={`${props.id}+img`}
            src={props.book.volumeInfo.imageLinks.thumbnail}
            alt={props.book.volumeInfo.title}
          />
        </Card>
      ) : null}
    </>
  )
}

export default BookCard
