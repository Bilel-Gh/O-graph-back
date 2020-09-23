const { Pool } = require('pg');
// const { query } = require('express');

const pool = new Pool();

// Ici pas besoin de se connecter, c'est le pool qui gère tout seul comme un grand
//pool.connect();

module.exports = {

    client: pool,

    // On utilise le rest parmaters pour récupérer tous les arguments potentiellement envoyé à la méthode
    // Ca stocke dans un tableau "params" tous les arguments reçus [arg1, arg2, arg3]
    async query(...params){

        // Permet d'effectuer un comptage
        // Se remettra à 0 à chaque fois que l'on redémarre le serveur
        console.count('Req SQL n°');
        console.log('SQL: ', ...params);
        // Je rappelle la méthode de base de requête de pg en lui repasser en spread tous les arguments récupérés précédemment
        // Ca redistribue l'ensemble des arguments dans l'appel à la méthode [arg1, arg2, arg3] ---> arg1, arg2, arg3
        return await this.client.query(...params);

    }
};