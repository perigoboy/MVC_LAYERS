const express = require('express');
const cors = require('cors');
const routes = require('./routes'); // <--- Importamos o arquivo que acabamos de criar

const app = express();

app.use(express.json());
app.use(cors());

// Aqui dizemos para o servidor usar as rotas definidas no outro arquivo
app.use(routes); 

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});