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
    <div>
      <h2>Book List</h2>
      <div className="book-list">
        {books?.map((book) => (
          <BookItem key={book.id} book={book} />
        )) || 'No books available'}
      </div>
    </div>
  )
}

export default BookList
// import React, { useState } from 'react'
// import { useQuery } from '@tanstack/react-query'
// import { sortAndFilterBooks, SortAndFilterCriteria } from '../apis/booksApi'
// import BookList from './BookList'

// function BookSortAndFilter() {
//   const [criteria, setCriteria] = useState<SortAndFilterCriteria>({
//     sortBy: 'title',
//     genre: '',
//     minRating: 0,
//     publicationYear: 0,
//   })

//   const { data: books, isLoading, isError } = useQuery(
//     ['sortedAndFilteredBooks', criteria],
//     () => sortAndFilterBooks(criteria)
//   )

//   const handleChange = (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
//     const { name, value } = e.target
//     setCriteria(prev => ({
//       ...prev,
//       [name]: name === 'minRating' || name === 'publicationYear' ? Number(value) : value
//     }))
//   }

//   return (
//     <div className="book-sort-and-filter">
//       <div>
//         <label htmlFor="sortBy">Sort by:</label>
//         <select id="sortBy" name="sortBy" value={criteria.sortBy} onChange={handleChange}>
//           <option value="title">Title</option>
//           <option value="author">Author</option>
//           <option value="rating">Rating</option>
//           <option value="publicationYear">Publication Year</option>
//         </select>
//       </div>
//       <div>
//         <label htmlFor="genre">Genre:</label>
//         <input
//           type="text"
//           id="genre"
//           name="genre"
//           value={criteria.genre}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="minRating">Minimum Rating:</label>
//         <input
//           type="number"
//           id="minRating"
//           name="minRating"
//           min="0"
//           max="5"
//           value={criteria.minRating}
//           onChange={handleChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="publicationYear">Publication Year:</label>
//         <input
//           type="number"
//           id="publicationYear"
//           name="publicationYear"
//           value={criteria.publicationYear}
//           onChange={handleChange}
//         />
//       </div>
//       {isLoading ? (
//         <div>Loading books...</div>
//       ) : isError ? (
//         <div>Error loading books</div>
//       ) : books ? (
//         <BookList books={books} />
//       ) : (
//         <div>No books found</div>
//       )}
//     </div>
//   )
// }

// export default BookSortAndFilter
