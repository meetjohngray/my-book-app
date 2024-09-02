import connection from './connection'
import { Book } from '../../models/book'

export async function getAllBooks(): Promise<Book[]> {
  return connection('books')
    .select(
      'books.id',
      'books.title',
      'books.publication_year',
      'books.description',
      'genres.name as genre',
      connection.raw('GROUP_CONCAT(authors.name SEPARATOR ", ") as authors')
    )
    .leftJoin('genres', 'books.genre_id', 'genres.id')
    .leftJoin('author_books', 'books.id', 'author_books.book_id')
    .leftJoin('authors', 'author_books.author_id', 'authors.id')
    .groupBy('books.id')
    .orderBy('books.title')
}
