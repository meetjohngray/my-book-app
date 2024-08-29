exports.up = function (knex) {
  return knex.schema.createTable('author_books', function (table) {
    table.increments('id').primary()
    table.integer('author_id').unsigned().notNullable()
    table.integer('book_id').unsigned().notNullable()
    table.foreign('author_id').references('authors.id').onDelete('CASCADE')
    table.foreign('book_id').references('books.id').onDelete('CASCADE')
    table.unique(['author_id', 'book_id'])
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('author_books')
}
