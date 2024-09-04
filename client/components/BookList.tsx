import { useQuery } from '@tanstack/react-query'
import { getBooks } from '../apis/booksApi'
import BookItem from './BookItem'

function BookList() {
  const {
    data: books,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
  })

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (isError) {
    return <div>Error loading books</div>
  }

  return (
    <div className="book-list">
      {books?.map((book) => (
        <BookItem key={book.id} book={book} />
      )) || 'No books available'}
    </div>
  )
}

export default BookList
