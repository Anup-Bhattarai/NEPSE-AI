const { Router } = require('express');
const { registerNewUser, loginUser } = require('../controllers/user');
const app = Router();

app.post('/register',registerNewUser);
app.post('/login',loginUser)


module.exports = app;