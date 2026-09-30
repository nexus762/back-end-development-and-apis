const express = require('express');
const path = require('path');

// IMPORTACIÓN CON DESESTRUCTURACIÓN:
const { inputCleaner, inputValidator } = require('./middleware');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Ruta estática
app.use('/form', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('/form');
});

// RUTA POST:
// Cada parámetro después de '/submit' debe ser una función válida
app.post('/submit', inputCleaner, inputValidator, (req, res) => {
  res.json({
    username: req.body.username,
    comment: req.body.comment
  });
});

app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});