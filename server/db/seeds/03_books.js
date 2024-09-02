/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('books').del()
  await knex('books').insert([
    { id: 1, title: 'Pride and Prejudice', genre_id: 2, publication_year: 1813, description: 'A classic romance novel about the Bennet sisters and their suitors.' },
    { id: 2, title: 'The Great Gatsby', genre_id: 1, publication_year: 1925, description: 'A tale of the American Dream set in the Roaring Twenties.' },
    { id: 3, title: '1984', genre_id: 4, publication_year: 1949, description: 'A dystopian novel about a totalitarian future society.' },
    { id: 4, title: 'To Kill a Mockingbird', genre_id: 5, publication_year: 1960, description: 'A coming-of-age story set in the American South during the Great Depression.' },
    { id: 5, title: 'The Catcher in the Rye', genre_id: 5, publication_year: 1951, description: 'A controversial novel about teenage angst and alienation.' },
    { id: 6, title: 'Lord of the Flies', genre_id: 6, publication_year: 1954, description: 'A novel about a group of British boys stuck on an uninhabited island.' },
    { id: 7, title: 'The Hobbit', genre_id: 6, publication_year: 1937, description: 'A fantasy novel about the adventures of Bilbo Baggins.' },
    { id: 8, title: 'Brave New World', genre_id: 4, publication_year: 1932, description: 'A dystopian novel envisioning a technologically advanced future world.' },
    { id: 9, title: 'Jane Eyre', genre_id: 7, publication_year: 1847, description: 'A Gothic romance novel following the emotions and experiences of its eponymous heroine.' },
    { id: 10, title: 'Frankenstein', genre_id: 7, publication_year: 1818, description: 'A Gothic novel about a young scientist who creates a sapient creature.' },
    { id: 11, title: 'The Adventures of Huckleberry Finn', genre_id: 6, publication_year: 1884, description: 'A novel about a boy\'s adventures along the Mississippi River.' },
    { id: 12, title: 'Wuthering Heights', genre_id: 7, publication_year: 1847, description: 'A passionate and dark tale of love and revenge set in the Yorkshire moors.' },
    { id: 13, title: 'War and Peace', genre_id: 8, publication_year: 1869, description: 'An epic novel following five aristocratic families during the Napoleonic Era.' },
    { id: 14, title: 'Great Expectations', genre_id: 5, publication_year: 1861, description: 'A coming-of-age novel about an orphan named Pip.' },
    { id: 15, title: 'Mrs Dalloway', genre_id: 9, publication_year: 1925, description: 'A modernist novel that details a day in the life of Clarissa Dalloway.' },
    { id: 16, title: 'Sense and Sensibility', genre_id: 2, publication_year: 1811, description: 'A novel about the Dashwood sisters and their romantic entanglements.' },
    { id: 17, title: 'Animal Farm', genre_id: 4, publication_year: 1945, description: 'An allegorical novella reflecting events leading up to the Russian Revolution.' },
    { id: 18, title: 'The Lord of the Rings', genre_id: 6, publication_year: 1954, description: 'An epic high-fantasy novel set in the world of Middle-earth.' },
    { id: 19, title: 'A Tale of Two Cities', genre_id: 8, publication_year: 1859, description: 'A historical novel set in London and Paris before and during the French Revolution.' },
    { id: 20, title: 'To the Lighthouse', genre_id: 9, publication_year: 1927, description: 'A modernist novel that centers on the Ramsay family and their visits to the Isle of Skye in Scotland.' }
  ])
}
