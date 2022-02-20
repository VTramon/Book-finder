export interface BookCardProps {
  id?: string
  book: {
    volumeInfo: {
      title?: string
      imageLinks: {
        thumbnail?: string
      }
    }
  }
}
