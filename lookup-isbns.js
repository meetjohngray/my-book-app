import superagent from 'superagent';

// List of book titles from our seed file with authors to improve search accuracy
const books = [
  { title: 'Pride and Prejudice', author: 'Jane Austen' },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: '1984', author: 'George Orwell' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'Lord of the Flies', author: 'William Golding' },
  { title: 'The Hobbit', author: 'J.R.R. Tolkien' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
  { title: 'Jane Eyre', author: 'Charlotte Brontë' },
  { title: 'Frankenstein', author: 'Mary Shelley' },
  { title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain' },
  { title: 'Wuthering Heights', author: 'Emily Brontë' },
  { title: 'War and Peace', author: 'Leo Tolstoy' },
  { title: 'Great Expectations', author: 'Charles Dickens' },
  { title: 'Mrs Dalloway', author: 'Virginia Woolf' },
  { title: 'Sense and Sensibility', author: 'Jane Austen' },
  { title: 'Animal Farm', author: 'George Orwell' },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien' },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens' },
  { title: 'To the Lighthouse', author: 'Virginia Woolf' }
];

// Manually-researched ISBNs for classic books
// These are common editions that should have cover images
const knownISBNs = {
  'Pride and Prejudice': '9780141439518',
  'The Great Gatsby': '9780743273565',
  '1984': '9780451524935',
  'To Kill a Mockingbird': '9780060935467',
  'The Catcher in the Rye': '9780316769488',
  'Lord of the Flies': '9780571191475',
  'The Hobbit': '9780618260300',
  'Brave New World': '9780060850524',
  'Jane Eyre': '9780141441146',
  'Frankenstein': '9780141439471',
  'The Adventures of Huckleberry Finn': '9780486280615',
  'Wuthering Heights': '9780141439556',
  'War and Peace': '9780140447934',
  'Great Expectations': '9780141439563',
  'Mrs Dalloway': '9780156628709',
  'Sense and Sensibility': '9780141439662',
  'Animal Farm': '9780451526342',
  'The Lord of the Rings': '9780618640157',
  'A Tale of Two Cities': '9780141439600',
  'To the Lighthouse': '9780156907392'
};

async function lookupBookInfo(book) {
  const { title } = book;
  
  // If we have a known ISBN, use it directly
  if (knownISBNs[title]) {
    const isbn = knownISBNs[title];
    const coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
    console.log(`${title}: ${isbn} → ${coverUrl}`);
    return { isbn, coverUrl };
  }
  
  // Otherwise, try to search for it
  const encodedTitle = encodeURIComponent(title);
  const encodedAuthor = encodeURIComponent(book.author);
  const url = `https://openlibrary.org/search.json?title=${encodedTitle}&author=${encodedAuthor}&limit=1`;
  
  try {
    const response = await superagent.get(url);
    const data = response.body;
    
    if (data.docs && data.docs.length > 0) {
      const result = data.docs[0];
      
      // Try to get ISBN
      let isbn = null;
      if (result.isbn) {
        isbn = result.isbn[0];
      }
      
      // Try to get cover ID
      let coverId = null;
      if (result.cover_i) {
        coverId = result.cover_i;
      }
      
      // Construct the cover URL
      let coverUrl = null;
      if (isbn) {
        coverUrl = `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
      } else if (coverId) {
        coverUrl = `https://covers.openlibrary.org/b/id/${coverId}-M.jpg`;
      }
      
      console.log(`${title}: ${isbn || 'No ISBN'} → ${coverUrl || 'No cover URL'}`);
      return { isbn, coverUrl };
    } else {
      console.log(`No information found for ${title}`);
      return { isbn: null, coverUrl: null };
    }
  } catch (error) {
    console.error(`Error looking up ${title}: ${error.message}`);
    return { isbn: null, coverUrl: null };
  }
}

async function lookupAllBooks() {
  console.log("Looking up book information...");
  
  const results = [];
  
  for (const book of books) {
    const info = await lookupBookInfo(book);
    results.push({
      title: book.title,
      author: book.author,
      isbn: info.isbn,
      coverUrl: info.coverUrl || `https://covers.openlibrary.org/b/isbn/${knownISBNs[book.title]}-M.jpg`
    });
    
    // Small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  // Generate seed file content
  console.log("\nUpdated seed file entries:");
  for (let i = 0; i < results.length; i++) {
    const result = results[i];
    console.log(`    { id: ${i+1}, title: '${result.title}', genre_id: ${(i % 9) + 1}, publication_year: ${1800 + (i * 10)}, description: 'Description for ${result.title}', image_url: '${result.coverUrl}' },`);
  }
}

lookupAllBooks();