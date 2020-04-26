// ARQUIVO 1

const express = require('express'); // Atribui à const 'express' todas as funcionalidades do modulo express
const routes = require('./routes'); // - Importar as rotas exportadas pelo arquivo 'routes.js'
const cors = require('cors');
const app = express(); // Criar const 'app' que irá armazenar a aplicação

app.use(cors()); // Quando o app estiver em produção é necessário incluir o endereço da url como no exemplo abaixo
/* app.use(cors(){
    origin: 'http://meuapp.com';
}) */
app.use(express.json());
app.use(routes);
// - Utilizar 'node index.js' para iniciar a aplicação enquanto não possuir nodemon instalado

// app.get('/', (request, response) => { // get(rota, função). '/' é chamado de recurso, equanto rota é o caminho completo ('https:/.../')
//     // return response.send('Hello World'); Para retornar texto do backend
//     return response.json({ // Para retornar um objeto em formato json
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Ana Luiza Castro'
//     }) 
// });

/* Métodos HTTP
GET: Buscar/listar uma informação do back-end
POST: Criar .. .. 
PUT: Alterar ..  ..
DELETE: Deletar .. ..
*/

/* Tipos de Parâmetros
QUERY PARAMS: Parâmetros nomeados enviados na rota após "?" (filtros, paginação). INSOMIIA: http://localhost:3333/users?name=AnaLuiza&idade=29
// app.get('/users', (request, response) =>{
//     const params = request.query;
//     console.log(params);
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Ana Luiza Castro'
//     });
// });

ROUTE PARAMS: Parâmetros utilizados para identificar recursos. INSOMIIA: http://localhost:3333/users/1
// app.get('/users/:id', (request, response) =>{
//     const params = request.params
//     console.log(params);
//     return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Ana Luiza Castro'
//     });
// });

REQUEST BODY: Corpo da requisição. Utilizado para criar ou alterar recursos.
É necessário informar que o corpo da requisição estará passsando informações no formato JSON -> "app.use(express.json());" tem que vir antes das rotas
// app.post('/users', (request, response) => {
//     const body = request.body
//     console.log(body)
//         return response.json({
//         evento: 'Semana Omnistack 11.0',
//         aluno: 'Ana Luiza Castro'
//     });
// });
*/

// - Instalar nodemon: "npm install nodemon -D" -D significa para instalar somente no ambiente de desenvolvimento
// - Alterar a parte 'scripts' dentro de 'package.json' para o seguinte item '"start": "nodemon index.js"'
// - Iniciar a aplicação por 'npm start' e 'ctrl + c' para fechar o servidor

/* BANCO DE DADOS
SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
NoSQL: MongoDB, CouchDB etc
 */ 

 /* CONFIGURANDO BANCO DE DADOS: 3 Formas
 1) DRIVER: Utilizando SQL 'SELECT * FROM users'
 2) QUERY BUILDER: Utilizando javascript 'table('users').select('*').where()'. Vamos utilizar o KNEX.JS como Query Builder
 */

 // - Instalar 'KNEX.JS': 'npm install knex' e 'npm install sqlite3'
 // - Fazer conexão com o banco de dados: 'npx knex init' que guardará as configurações de acesso ao banco de dados de acordo com cada ambiente da aplicação (desenvolvimento,
 //   produção, staging)
 // - Criar pasta 'src' na raiz do proojeto e guardar todos os arquivos js. Lembrar de trocar o start no package.json por 'nodemon src/index.js'
 // - Criar arquivo 'routes.js' na raiz do projeto que guardará todas as rotas
 // - Criar pasta 'database' dentro de 'src'
 // - Alterar 'filename' no knexfile.js: './src/database/dev.sqlite3'

 // - Detalhar as ENTIDADES da aplicação. Tudo que será armazenado no banco de dados.
 //    * ONGs
 //    * Casos (incident)
 // - Detalhar as FUNCIONALIDADES da aplicaçao
 //    * Login de ONG
 //    * Logout de ONG
 //    * Cadastro de ONG
 //    * ONG cadastrar de novos casos
 //    * ONG deletar casos
 //    * Listar casos específicos de uma ONG
 //    * Listar todos os casos (mobile)
 //    * Entrar em contato com a ONG (mobile)

 // - Criar as tabelas no banco de dados que irão armazenar as entidades da aplicação
 // - Criar pasta 'migrations' dentro de 'database'
 // - Em 'knexfile.js', em 'development' e após 'filename' colorcar 'migrations: { directory: './src/database/migrations' }'
 //   e 'useNullAsDefault: true' após 'directory' para que o valor padrão das colunas de banco de dados seja sempre null e não dar erro.
 // - Ir no site 'knexjs.org' e depois em 'migrations'. As migrations são uma forma de criar tabelas e ter um histórico
 //   das tabelas que foram criadas, alteradas. Serve como um controle de versão do banco de dados. 
 //    * http://knexjs.org/#Migrations
 //    * Migrations CLI
 //    * Procurar 'creating new migration'
 // - Criar o arquivo de migrations ONGs. 'npx knex migrate:make create_ongs'
 // - Para criar primeira tabela procurar 'createTable' no site do Knex em migrations, após isso inserir o valor no arquivo
 //   que foi criado no passo anterior.
 // - Para executar a criação da tabela: 'npx knex migrate:latest'. A cada nova migration criada deve ser novamente executada para ser adicionada na db
 //    * 'npx knex migrate:rollback' desfaz a última migration colocada no db
 //    * Para ver a lista de todos os comandos possíveis 'npx knex'
 // - Criar a próxima migration 'npx knex migrate:make create_incidents'
 // - Criar um arquivo 'connection.js' dentro da pasta 'database'
 // - Criar pasta 'controllers.js' dentro de src
 //    * Criar arquivo para cada entidade dentro de 'controllers.js': 'OngController.js'
 // - Instalar o módulo de segurança CORS: 'npm install cors'
 //    * Irá determinar quem poderá acessar nossa aplicação
 
app.listen(3333);
























