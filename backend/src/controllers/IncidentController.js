// Dentro de um controller, de acordo com a metodologia MVC só devemos criar 5 métodos em um mesmo arquivo (Listagem, 
// retornar um único item, criação, alteração e delete)

const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        const {title, description, value} = request.body;
        const ong_id = request.headers.authorization; // Cabeçalho guarda dados do contexto da requisição: dados de autenticação, dados de localização, idioma
    
        const result = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        const id = result[0]; // ou const [id] = await connection('incidents').insert({
        return response.json({id}); // Usa-se chaves para poder enviar com o nome da informação que está retornando e o frontend saber que é um id
    },

    async index(request, response){ // http://localhost:3333/incidents?page=2
        const { page = 1 } = request.query; // Query params. Valor default = 1

        // Query para retornar o valor do número total de casos
        const [count] = await connection('incidents').count(); // [count] é para pegar somente a primeira posição do array

        // Query para limitar 5 registros por página
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') // Usaro para relacionar dados de duas tabelas. Aqui vamos utilizar para buscar dados da ong e não somente dos incidents
            .limit(5) // Limitar a busca no banco de dados para 5 registros
            .offset((page - 1) * 5) // Pular 5 registros por página
            .select([
                'incidents.*', 
                'ongs.name', 
                'ongs.email', 
                'ongs.whatsapp', 
                'ongs.city', 
                'ongs.uf']);

        // Normalmente a quantidade total de itens de uma requisição não é enviada pelo corpo, mas sim pelo header
        response.header('X-Total-Count', count['count(*)']);
        
        return response.json(incidents);
    },

    async delete(request, response){
        const { id } = request.params;
        const ong_id = request.headers.authorization;

        const incident = await connection('incidents')
            .where('id', id)
            .select('ong_id')
            .first(); // Irá retornar somente o primeiro resultado
        
        if (incident.ong_id != ong_id){
            return response.status(401).json({ error: 'Operation not permitted.'}) // UNATHOURIZED
        }
        await connection('incidents').where('id', id).delete(); // Irá deletar o registro de dentro da tabela no banco de dados
        return response.status(204).send(); // Resposta que deu sucesso, mas não tem conteúdo nenhum para retornar
    },
};