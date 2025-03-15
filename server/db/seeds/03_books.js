/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // We don't delete entries here to avoid foreign key constraints
  // The deletion happens in the master seed file (00_clean.js)
  
  await knex('books').insert([
    { id: 1, title: 'Pride and Prejudice', genre_id: 2, publication_year: 1813, description: 'A classic romance novel about the Bennet sisters and their suitors.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439518-M.jpg' },
    { id: 2, title: 'The Great Gatsby', genre_id: 1, publication_year: 1925, description: 'A tale of the American Dream set in the Roaring Twenties.', image_url: 'https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg' },
    { id: 3, title: '1984', genre_id: 4, publication_year: 1949, description: 'A dystopian novel about a totalitarian future society.', image_url: 'https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg' },
    { id: 4, title: 'To Kill a Mockingbird', genre_id: 5, publication_year: 1960, description: 'A coming-of-age story set in the American South during the Great Depression.', image_url: 'https://covers.openlibrary.org/b/isbn/9780060935467-M.jpg' },
    { id: 5, title: 'The Catcher in the Rye', genre_id: 5, publication_year: 1951, description: 'A controversial novel about teenage angst and alienation.', image_url: 'https://covers.openlibrary.org/b/isbn/9780316769488-M.jpg' },
    { id: 6, title: 'Lord of the Flies', genre_id: 6, publication_year: 1954, description: 'A novel about a group of British boys stuck on an uninhabited island.', image_url: 'https://covers.openlibrary.org/b/isbn/9780571191475-M.jpg' },
    { id: 7, title: 'The Hobbit', genre_id: 6, publication_year: 1937, description: 'A fantasy novel about the adventures of Bilbo Baggins.', image_url: 'https://covers.openlibrary.org/b/isbn/9780618260300-M.jpg' },
    { id: 8, title: 'Brave New World', genre_id: 4, publication_year: 1932, description: 'A dystopian novel envisioning a technologically advanced future world.', image_url: 'https://covers.openlibrary.org/b/isbn/9780060850524-M.jpg' },
    { id: 9, title: 'Jane Eyre', genre_id: 7, publication_year: 1847, description: 'A Gothic romance novel following the emotions and experiences of its eponymous heroine.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141441146-M.jpg' },
    { id: 10, title: 'Frankenstein', genre_id: 7, publication_year: 1818, description: 'A Gothic novel about a young scientist who creates a sapient creature.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439471-M.jpg' },
    { id: 11, title: 'The Adventures of Huckleberry Finn', genre_id: 6, publication_year: 1884, description: 'A novel about a boy\'s adventures along the Mississippi River.', image_url: 'https://covers.openlibrary.org/b/isbn/9780486280615-M.jpg' },
    { id: 12, title: 'Wuthering Heights', genre_id: 7, publication_year: 1847, description: 'A passionate and dark tale of love and revenge set in the Yorkshire moors.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439556-M.jpg' },
    { id: 13, title: 'War and Peace', genre_id: 8, publication_year: 1869, description: 'An epic novel following five aristocratic families during the Napoleonic Era.', image_url: 'https://covers.openlibrary.org/b/isbn/9780140447934-M.jpg' },
    { id: 14, title: 'Great Expectations', genre_id: 5, publication_year: 1861, description: 'A coming-of-age novel about an orphan named Pip.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439563-M.jpg' },
    { id: 15, title: 'Mrs Dalloway', genre_id: 9, publication_year: 1925, description: 'A modernist novel that details a day in the life of Clarissa Dalloway.', image_url: 'https://covers.openlibrary.org/b/isbn/9780156628709-M.jpg' },
    { id: 16, title: 'Sense and Sensibility', genre_id: 2, publication_year: 1811, description: 'A novel about the Dashwood sisters and their romantic entanglements.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439662-M.jpg' },
    { id: 17, title: 'Animal Farm', genre_id: 4, publication_year: 1945, description: 'An allegorical novella reflecting events leading up to the Russian Revolution.', image_url: 'https://covers.openlibrary.org/b/isbn/9780451526342-M.jpg' },
    { id: 18, title: 'The Lord of the Rings', genre_id: 6, publication_year: 1954, description: 'An epic high-fantasy novel set in the world of Middle-earth.', image_url: 'https://covers.openlibrary.org/b/isbn/9780618640157-M.jpg' },
    { id: 19, title: 'A Tale of Two Cities', genre_id: 8, publication_year: 1859, description: 'A historical novel set in London and Paris before and during the French Revolution.', image_url: 'https://covers.openlibrary.org/b/isbn/9780141439600-M.jpg' },
    { id: 20, title: 'To the Lighthouse', genre_id: 9, publication_year: 1927, description: 'A modernist novel that centers on the Ramsay family and their visits to the Isle of Skye in Scotland.', image_url: 'https://covers.openlibrary.org/b/isbn/9780156907392-M.jpg' }
  ])
}
