require('dotenv').config();

const mongoose = require('mongoose');

// Conectar a MongoDB usando la URI del archivo .env
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.error('Error al conectar a MongoDB:', err));
