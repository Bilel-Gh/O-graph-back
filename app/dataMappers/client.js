const { Pool } = require('pg');
// const { query } = require('express');

const pool = new Pool();

// Ici pas besoin de se connecter, c'est le pool qui gère tout seul comme un grand
//pool.connect();

module.exports = pool;