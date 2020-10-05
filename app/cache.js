 
module.exports = require('express-redis-cache')({
    auth_pass: 'js4life',
    prefix: 'omymug:',
    expire: 60
});