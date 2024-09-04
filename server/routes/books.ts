import express from 'express'
import { getAllBooks } from '../db/booksDB'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const { sortBy, genre, minRating, publicationYear } = req.query
    let books = await getAllBooks()

    // Apply filters
    if (genre) {
      books = books.filter(book => book.genre.toLowerCase() === (genre as string).toLowerCase())
    }
    if (minRating) {
      books = books.filter(book => book.rating >= Number(minRating))
    }
    if (publicationYear) {
      books = books.filter(book => book.publication_year === Number(publicationYear))
    }

    // Apply sorting
    if (sortBy) {
      books.sort((a, b) => {
        if (a[sortBy as keyof typeof a] < b[sortBy as keyof typeof b]) return -1
        if (a[sortBy as keyof typeof a] > b[sortBy as keyof typeof b]) return 1
        return 0
      })
    }

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
