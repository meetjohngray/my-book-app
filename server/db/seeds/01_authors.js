/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('authors').del()
  await knex('authors').insert([
    { id: 1, name: 'Jane Austen' },
    { id: 2, name: 'F. Scott Fitzgerald' },
    { id: 3, name: 'George Orwell' },
    { id: 4, name: 'Harper Lee' },
    { id: 5, name: 'J.D. Salinger' },
    { id: 6, name: 'William Golding' },
    { id: 7, name: 'J.R.R. Tolkien' },
    { id: 8, name: 'Aldous Huxley' },
    { id: 9, name: 'Charlotte Brontë' },
    { id: 10, name: 'Mary Shelley' },
    { id: 11, name: 'Mark Twain' },
    { id: 12, name: 'Emily Brontë' },
    { id: 13, name: 'Leo Tolstoy' },
    { id: 14, name: 'Charles Dickens' },
    { id: 15, name: 'Virginia Woolf' }
  ])
}
