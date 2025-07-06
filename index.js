const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname)); // serve arquivos estáticos da raiz

app.get('/ping', (req, res) => {
  res.status(200).send('pong');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});