const client = require('./client');

module.exports = {

    findUserByRole: async function(role) {

        const result = await client.query('SELECT * FROM user WHERE role = $1', [role]);
        return result.rows;
    },


    findUserById: async function(id) {

        const result = await client.query('SELECT * FROM user WHERE id = $1', [id]);
        return result.rows;
    }


};
