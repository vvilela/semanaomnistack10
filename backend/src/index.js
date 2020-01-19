const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb+srv://omnistack:omnistack@cluster0-7imyk.mongodb.net/week10?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
});

app.use(cors({origin:'http://localhost:3000'}));
app.use(express.json());
app.use(routes);
// Métodos HTTP: GET, POST, PUT, DELETE

//Tipos de parâmetros:

// Query params: request.query (Filtros, ordenação, paginação, ...)
// Rout params: request.params (Identificar um recurso na alteração ou remoção)
// Body params:


app.listen(3333);