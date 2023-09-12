const express = require('express');
const path = require('path');
const app = express();

// Servindo arquivos estáticos
app.use(express.static('public'));

// Rotas
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/about.html'));
});

app.get('/user', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/user.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/login.html'));
});

// Página de erro 404
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname + '/public/404.html'));
});

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Aplicativo rodando na porta 3000');
});
