exports.up = function (knex) {
  return knex.schema.createTable('user_books', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned().notNullable()
    table.integer('book_id').unsigned().notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.foreign('book_id').references('books.id').onDelete('CASCADE')
    table.enum('status', ['want to read', 'reading', 'read']).defaultTo('want to read')
    table.integer('rating').unsigned().min(1).max(5)
    table.unique(['user_id', 'book_id'])
    table.timestamps(true, true)
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('user_books')
}
