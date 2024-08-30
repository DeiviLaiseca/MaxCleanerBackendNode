const mongoose = require('mongoose');

const URI = 'mongodb://127.0.0.1:27017/MaxCleanerDB';

mongoose.connect(URI)
    .then(() => console.log('¡Conectado!'))
    .catch((error) => console.log('Error en la conexión: ' + error))

module.exports = mongoose;