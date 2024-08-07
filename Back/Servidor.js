const express = require('express');
const app = express();
const port = 3000;

// Define uma rota simples que responde com "Hello, World!"
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

// Inicia o servidor na porta 3000
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}/`);
});