exports.up = function (knex) {
  return knex.schema.createTable('books', function (table) {
    table.increments('id').primary()
    table.string('title').notNullable()
    table.integer('publication_year')
    table.string('isbn').unique()
    table.integer('genre_id').unsigned()
    table.foreign('genre_id').references('genres.id').onDelete('SET NULL')
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('books')
}
