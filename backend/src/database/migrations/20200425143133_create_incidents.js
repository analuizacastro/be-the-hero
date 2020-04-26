
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments(); // Cria uma chave primária auto incremental

        table.string('title').notNullable();
        table.string('description').notNullable();
        table.decimal('value').notNullable();

        table.string('ong_id').notNullable(); // Coluna para criar um relacionamento e armazenar qual foi a ong que criou o incident

        table.foreign('ong_id').references('id').inTable('ongs'); // Chave estrangeira para relacioinar 'ong_id' com o campo 'id' na tabela 'ongs'
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
