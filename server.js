const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = 'mongodb+srv://dba:dba123@petapi.fvpq0.mongodb.net/?retryWrites=true&w=majority&appName=petapi'; // Substitua pelo URI do seu MongoDB

// Middleware
app.use(bodyParser.json());

// Conectar ao MongoDB
mongoose.connect(MONGO_URI,)
  .then(() => console.log('Conectado ao MongoDB'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

// Roteamento
app.use('/api', require('./routes/dogs'));

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
