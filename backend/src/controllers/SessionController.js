const connection = require('../database/connection');

module.exports = {
    async create(request, response){
        // Vai ter a função de verificar se a ONG existe
        const { id } = request.body;
        const ong = await connection('ongs')
            .where('id', id)
            .select('name') // Para retornar ao frontend
            .first();
        
        if (!ong){ // Se ONG não exisitir
            return response.status(400).json({ error: 'No ONG found with this ID.'})
        }
        return response.json(ong);
    }
}