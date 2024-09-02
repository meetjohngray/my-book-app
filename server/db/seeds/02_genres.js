/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('genres').del()
  await knex('genres').insert([
    { id: 1, name: 'Classic' },
    { id: 2, name: 'Romance' },
    { id: 3, name: 'Science Fiction' },
    { id: 4, name: 'Dystopian' },
    { id: 5, name: 'Coming-of-age' },
    { id: 6, name: 'Adventure' },
    { id: 7, name: 'Gothic' },
    { id: 8, name: 'Historical Fiction' },
    { id: 9, name: 'Modernist' }
  ])
}
