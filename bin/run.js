'use strict'

const service = require('../server/service');
require('dotenv').load();
var http = require('http');
const server = http.createServer(service);
server.listen(3000);

server.on('listening', function () {
    console.log(`iris is listening on ${server.address().port} in ${service.get('env')} mode`)
   
});