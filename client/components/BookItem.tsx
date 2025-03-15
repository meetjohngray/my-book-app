import { Book } from '../../models/books'

interface Props {
  book: Book
}

function BookItem({ book }: Props) {
  return (
    <div className="book-item">
      {book.image_url && (
        <div className="book-cover">
          <img src={book.image_url} alt={`Cover of ${book.title}`} />
        </div>
      )}
      <div className="book-details">
        <h3>{book.title}</h3>
        <p><strong>Authors:</strong> {book.authors}</p>
        <p><strong>Genre:</strong> {book.genre}</p>
        <p><strong>Year:</strong> {book.publication_year}</p>
        <p className="description">{book.description}</p>
      </div>
    </div>
  )
}

export default BookItem
