// ARQUIVO 2

const express = require('express');
/* const crypto = require('crypto'); // Pacote que vem junto com o node e que possui um método que nos permite criar strings aleatórias para
// preenchimento da nossa chave primária das ongs 'id' */

// Importar o arquivo 'connection.js' para nos comunicar com o banco de dados e podermos fazer operações com o banco de dados
//const connection = require('./database/connection')

const routes = express.Router(); //Desclopar o módulo de rotas do express em uma variavel
const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

/* routes.post('/ongs',  async (request, response) => { // Necessário colocar assíncrona pq o insert pode demorar um pouco e precisamos que
// o return só ocorra após a inserção tenha sido finalizada

    // const data = request.body
    const { name, email, whatsapp, city, uf} = request.body; // Desestruturação para pegar cada dado em uma variável separada 
    // garante que o usuário não envie um dado que não queremos que ele preencha.

    const id = crypto.randomBytes(4).toString('HEX'); // Irá criar 4 bytes de caracteres hexadecimais e com isso gerar um id para gente.
    //console.log(data);
    await connection('ongs').insert({ // O await faz o node esperar a execução dessa etapa para então ir para a próxima
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })
    return response.json({ id });
}); */

/* // Listar todas as ongs cadastradas
routes.get('/ongs', async (request, response) => {
    const ongs = await connection('ongs').select('*');
    return response.json(ongs);
}); */

// Criar ong
routes.post('/ongs', OngController.create);
routes.get('/ongs', OngController.index);

// Criar incidents
routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete); // Para deletar precisamos saber qual ong deve ser deletada. Para isso utilizamos o route params ":id"

// Listar casos de uma ong específica
routes.get('/profile', ProfileController.index);

// Fazer login
routes.post('/sessions', SessionController.create);

// - Deixar rotas disponíveis para que o index.js consiga utilizá-las
module.exports = routes;