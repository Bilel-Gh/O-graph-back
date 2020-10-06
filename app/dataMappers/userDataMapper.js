const client = require('./client');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

    findUsers: async function() {

        const result = await client.query('SELECT * FROM user_without_password;');
        return result.rows;
    },

    // Récupération des utilisateurs en fonction de leurs rôle
    findUserByRole: async function(data) {

        const result = await client.query('SELECT * FROM user_without_password WHERE role = $1;', [data.role]);
        return result.rows;
    },

    // Récupération des utilisateur par leurs id
    findUserById: async function(data) {

        const result = await client.query('SELECT * FROM user_without_password WHERE user_id = $1;', [data.userId]);
        return result.rows[0];
    },

    // Récupération des utilisateur par leurs projets
    findUserByProjectId: async function(data){

        const result = await client.query(`
            SELECT * FROM user_without_password JOIN user_has_project 
                ON user_has_project.user_id = user_without_password.user_id 
                WHERE user_has_project.project_id = $1;`, [data.projectId]);
        return result.rows;
    },


    // Dréation d'un user
    createUser: async function(data){

        bcrypt.genSalt(saltRounds, (err, salt) => {
            
            bcrypt.hash(data.password, salt, async function(err, hash) {

                const result = await client.query(`
                INSERT INTO "user" (role, email, password, first_name, last_name, company_name, image)
                VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;`, [data.role, data.email, hash, data.first_name, data.last_name, data.company_name, data.image]);
                return result.rows[0];
            });

        });
    },

    updateUserPassword: async function(data) {

        bcrypt.genSalt(saltRounds, (err, salt) => {
            
            bcrypt.hash(data.password, salt, async function(err, hash) {

                const result = await client.query(`
                UPDATE "user" SET password = $1
                WHERE id = $2 RETURNING *;`, [hash, data.id]);
                return result.rows[0];
            });

        });
    },
    
    updateUser: async function(data) {

        const result = await client.query(`
        UPDATE "user" SET first_name = $1, last_name = $2, company_name = $3, image = $4
        WHERE id = $5 RETURNING *;`, [data.first_name, data.last_name, data.company_name, data.image, data.id]);
        return result.rows[0];
    }
};
