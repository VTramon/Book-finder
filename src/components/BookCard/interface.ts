export interface BookCardProps {
  id?: string
  book: {
    volumeInfo: {
      title?: string
      authors?: string[]
      imageLinks: {
        thumbnail?: string
      }
    }
  }
}
