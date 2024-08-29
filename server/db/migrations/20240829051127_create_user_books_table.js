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
  return knex.schema.createTable('user_books', (table) => {
    table.increments('id').primary()
    table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
    table.integer('book_id').unsigned().notNullable().references('id').inTable('books')
    table.boolean('has_read').defaultTo(false)
    table.boolean('owns').defaultTo(false)
    table.unique(['user_id', 'book_id'])
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('user_books')
}
