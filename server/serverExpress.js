const express = require('express');
const chalk = require('chalk')

const app = express();
let port = 3000;

app.get('/', (req, res) =>{
    res.send(`
        <html>
            <head></head>
            <body>
                <h1> Hola mundo: ${req.query.name}</h1>
            </body>
        </html>
    `);
});

app.get('/api', (req,res) => {
    res.json({fisrt: 'Jhon', last:'Doe'});
});

app.listen(port, () =>{console.log(chalk.bgGreen.yellow('Servidor disponible'))});