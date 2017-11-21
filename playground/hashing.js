const jwt = require('jsonwebtoken');

var data = {
    order: 'jwt10304'
};

var token = jwt.sign(data, 'secretToken');
console.log(token);
var decoded = jwt.verify(token, 'secretToken');
console.log('DECODED', decoded);