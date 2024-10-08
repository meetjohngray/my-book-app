/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

export function up(knex) {
  return knex.schema.createTable('authors', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable()
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('authors')
}
