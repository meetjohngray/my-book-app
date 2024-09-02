export interface Book {
  id: number
  title: string
  publication_year: number
  description: string
  genre: string
  authors: string
}
import express from 'express'
import { getAllBooks } from '../db/booksDB'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const books = await getAllBooks()
    res.json(books)
  } catch (error) {
    console.error('Error in GET /api/v1/books:', error)
    res.status(500).json({ message: 'Unable to retrieve books', error: error.message })
  }
})

export default router
