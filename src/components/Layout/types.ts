import { BookCardProps } from '../BookCard/interface'

export interface LayoutProps extends BookCardProps {
  id: string
  volumeInfo: {
    title: string
    authors: string[]
    description: string
    imageLinks: {
      thumbnail: string
    }
  }
  saleInfo: {
    buyLink: string
  }
}
