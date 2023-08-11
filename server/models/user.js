require('dotenv').config()
const mongoose = require('mongoose');
const session = require("express-session");
const bcrypt = require('bcrypt');





const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please enter your username']
    },
    password: {
        type: String,
        required: [true, 'Please enter your password']
    },
    updated: { type: Date, default: Date.now}
});

userSchema.pre('save', function(next){
    const user = this

    bcrypt.hash(user.password, 10).then((hash) => {
        user.password = hash
        next()
    }).catch(error => {
        console.error(error)
    })
});





const User = mongoose.model('User', userSchema);
module.exports = User;