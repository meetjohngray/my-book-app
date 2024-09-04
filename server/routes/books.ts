import express from 'express'
import { getAllBooks } from '../db/booksDB'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const books = await getAllBooks()
    res.json(books)
  } catch (error) {
    console.error('Error in GET /api/v1/books:', error)
    if (error instanceof Error) {
      res.status(500).json({ message: 'Unable to retrieve books', error: error.message })
    } else {
      res.status(500).json({ message: 'Unable to retrieve books', error: 'An unknown error occurred' })
    }
  }
})

export default router
