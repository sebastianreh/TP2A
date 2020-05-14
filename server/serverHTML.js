const http = require('http');
const fs = require('fs');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    let html = fs.readFileSync('./index.htm', 'utf-8');
    //let mensaje = request.query.mensaje;
    let mesaje = 'Hola mundo';
    html = html.replace('{mensaje}', mensaje);
    response.write(html);
    response.end();
}).listen(3000, '127.0.0.1');