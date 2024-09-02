/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
  

export function up(knex) {
  return knex.schema.createTable('books', (table) => {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.integer('genre_id').unsigned().references('id').inTable('genres')
    table.integer('publication_year')
    table.text('description')
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('books')
}
