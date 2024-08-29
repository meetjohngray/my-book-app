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
  return knex.schema.createTable('genres', (table) => {
    table.increments('id').primary()
    table.string('name').notNullable().unique()
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTable('genres')
}
