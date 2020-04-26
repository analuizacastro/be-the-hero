const knex = require('knex');
const configuration = require('../../knexfile');
const connection = knex(configuration.development); // Passa para o knex o parâmetro da configuração de desenvolvimento presente no arquivo 'knexfile.js'

// Exportar a conexão com o banco de dados
module.exports = connection;