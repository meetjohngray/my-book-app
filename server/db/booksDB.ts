import connection from './connection'
import { Book } from '../../models/books'

export async function getAllBooks(): Promise<Book[]> {
  try {
    return await connection('books')
      .select(
        'books.id',
        'books.title',
        'books.publication_year',
        'books.description',
        'genres.name as genre',
        connection.raw('group_concat(authors.name, ", ") as authors')
      )
      .leftJoin('genres', 'books.genre_id', 'genres.id')
      .leftJoin('author_books', 'books.id', 'author_books.book_id')
      .leftJoin('authors', 'author_books.author_id', 'authors.id')
      .groupBy('books.id')
      .orderBy('books.title')
  } catch (error) {
    console.error('Error in getAllBooks:', error)
    throw error
  }
}
