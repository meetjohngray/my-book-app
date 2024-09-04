import { Book } from '../../models/books'

interface Props {
  book: Book
}

function BookItem({ book }: Props) {
  return (
    <div className="book-item">
      <h3>{book.title}</h3>
      <p>Authors: {book.authors}</p>
      <p>Genre: {book.genre}</p>
      <p>Year: {book.publication_year}</p>
      <p>{book.description}</p>
    </div>
  )
}

export default BookItem
