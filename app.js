var express = require('express');
var morgan = require('morgan');

var app = express();

app.use(morgan('dev'));
app.use(express.json());

app.get('/', function(req, res) {
    res.json({
        message: 'hello sakila backend!'
    })
})

const filmRoute = require('./routes/film.route');
app.use('/api/films', filmRoute);

const actorRoute = require('./routes/actor.route');
app.use('/api/actors', actorRoute);

const customerRoute = require('./routes/customer.route');
app.use('/api/customers', customerRoute);

const PORT = 3000
app.listen(PORT, function() {
    console.log(`Sakila backend is running at http: //localhost:${PORT}`);
})