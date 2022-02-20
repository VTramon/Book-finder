import { BookCardProps } from './types'
import { Card, Img } from './styles'

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <>
      {props.book.volumeInfo.imageLinks ? (
        <Card data-testid="cardBook" key={`${props.id}+card`} role="bookcard">
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
