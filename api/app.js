const express = require('express')
const userRouter = require('./routes/userRoutes')
const app = express();

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use('/api/users', userRouter);



module.exports = app;