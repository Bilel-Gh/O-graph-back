module.exports = require('express-redis-cache')({
    auth_pass: 'js4life',
    prefix: 'ograph:',
    expire: 3600
});