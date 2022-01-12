const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const db = require('./config/db')
const creacionRoles = require('./creacionUsersRoles/creacionRoles')
app.use(bodyParser.urlencoded({ extended: false }))
require('dotenv').config()
app.use(bodyParser.json())
app.use('/proyectos', require('./routes/proyectos-route'));
app.use('/auth',require('./routes/auth.routes'))
app.use('/user',require('./routes/users.routes'))
app.listen(3000)
