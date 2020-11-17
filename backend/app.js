const express = require('express');
const appointmentsRouter = require('./routes/appointments');
const usersRouter = require('./routes/users');
const app = express();
const PORT = 3001;
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(express.json())

app.use('/appointments', appointmentsRouter);
app.use('/users', usersRouter);

app.listen(PORT, () => console.log('server running on ' + PORT));