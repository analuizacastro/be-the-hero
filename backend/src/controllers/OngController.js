const connection = require('../database/connection')
const crypto = require('crypto');

// Irá exportar um objeto com os métodos
module.exports = {
    async create (request, response){ // 'async NomeDoMetodo'
        const { name, email, whatsapp, city, uf} = request.body; 
        const id = crypto.randomBytes(4).toString('HEX'); 
        await connection('ongs').insert({ 
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id })
    },
        async index (request, response){ // 'async NomeDoMetodo'. O nome 'index' normalmente é usado para listagem de todos os dados
            const ongs = await connection('ongs').select('*');
            return response.json(ongs);
        }
}