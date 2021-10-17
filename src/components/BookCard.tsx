import styled from 'styled-components'
// import Image from "next/image";
// import NoImage from "../../public/images/Noimage.jpg";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: inherit;
  margin: 30px;
  padding: 15px;
  border: 1px solid black;
  overflow: hidden;
  border-radius: 5px;
`

const Img = styled.img`
  object-fit: contain;
  width: 190px;
  height: 130px;
  margin: 10px;
`

// const ImgNext = styled.div`
//   display: block;
//   object-fit: cover;
//   width: 190px;
//   height: 130px;
//   margin: 10px;
//   padding: 15px;
// `;

const Title = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

const Authors = styled.div`
  height: auto;
  width: auto;
  object-fit: cover;
  margin-right: 15px;
  margin: 10px;
  align-items: center;
  justify-content: center;
`

const Text = styled.p`
  height: inherit;
  width: inherit;
  text-align: center;
  word-wrap: break-word;
  overflow-x: unset;
`

export interface BookCardProps {
  id?: string
  book: {
    volumeInfo: {
      title: string
      authors: string[]
      imageLinks: {
        thumbnail?: string
      }
    }
  }
}

const BookCard: React.FC<BookCardProps> = (props) => {
  return (
    <>
      {props.book.volumeInfo.imageLinks && props.book.volumeInfo.authors ? (
        <Card key={`${props.id}+card`}>
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
