
// O método 'up' sempre é responsável para criação da tabela
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary(); // Chave primária
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable(); // ('columns name', textlength)
      })
};

// Método 'down' é para se aso ocorra algum problema e seja necessário voltar atrás
exports.down = function(knex) {
  return knex.schema.dropTable('ongs'); // Deletar a tabela
};
