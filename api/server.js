const app = require('./app');
const mongoose = require('mongoose')
const env = require('dotenv').config();


var port = process.env.PORT;
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})


mongoose.connect(process.env.CONN_STRING,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log('db connected');
})
