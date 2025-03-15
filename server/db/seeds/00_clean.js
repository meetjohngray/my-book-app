/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
export async function seed(knex) {
  // Disable foreign key constraints temporarily
  await knex.raw('PRAGMA foreign_keys = OFF;');
  
  console.log('Cleaning up database tables...');
  
  // Delete in the correct order to respect foreign key constraints
  // First, delete from junction tables
  console.log('Deleting from author_books...');
  await knex('author_books').del();
  
  // Check if user_books table exists
  const hasUserBooks = await knex.schema.hasTable('user_books');
  if (hasUserBooks) {
    console.log('Deleting from user_books...');
    await knex('user_books').del();
  }
  
  // Then delete from books
  console.log('Deleting from books...');
  await knex('books').del();
  
  // Then from other tables
  console.log('Deleting from genres...');
  await knex('genres').del();
  
  console.log('Deleting from authors...');
  await knex('authors').del();
  
  // Check if users table exists
  const hasUsers = await knex.schema.hasTable('users');
  if (hasUsers) {
    console.log('Deleting from users...');
    await knex('users').del();
  }
  
  // Re-enable foreign key constraints
  await knex.raw('PRAGMA foreign_keys = ON;');
  
  console.log('Database cleanup complete');
}