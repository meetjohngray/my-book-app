/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
export function up(knex) {
  return knex.schema.createTable('author_books', (table) => {
    table.increments('id').primary()
    table.integer('author_id').unsigned().notNullable().references('id').inTable('authors')
    table.integer('book_id').unsigned().notNullable().references('id').inTable('books')
    table.unique(['author_id', 'book_id'])
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('author_books')
}
