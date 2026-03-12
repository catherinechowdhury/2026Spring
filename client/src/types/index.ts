export type ProductReview = {
  rating: number
  comment: string

  date: string
  reviewerName: string
  reviewerEmail: string
}

export type Product = {
  id: number
  title: string
  description: string
  category: string
  price: number
  tags: string[]
  rating: number
  reviews: ProductReview[]
  stock: number
  images: string[]
  thumbnail: string
  brand?: string
}
