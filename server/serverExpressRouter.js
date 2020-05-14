const express = require('express');
const chalk = require('chalk');
const app = express();

let port = process.env.PORT || 3000;

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879 },
    { first: 'Isaac', last: 'Newton', year: 1643 },
    { first: 'Galileo', last: 'Galilei', year: 1564 },
    { first: 'Marie', last: 'Curie', year: 1867 },
    { first: 'Johannes', last: 'Kepler', year: 1571 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473 },
    { first: 'Max', last: 'Planck', year: 1858 },
  ];

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

app.get('/api/inventors/', (req, res) =>{
    res.json(inventors);
});

app.get('/api/inventors/:id', (req, res) =>{
    //let idInventor = req.params.id;
    res.send(`
    <html>
        <head></head>
        <body>
            <h1>Inventor</h1>
            <h1>Inventor ID: ${req.params.id}</h1>
        </body>
    </html>
`);    
});

app.listen(port, () =>{console.log(chalk.bgGreen.yellow('Servidor disponible'))});