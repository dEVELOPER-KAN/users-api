const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: "String",
        required: true
    },
    image: {
        type: "String"
    }
});

const users = mongoose.model('user', userSchema);

module.exports = users;