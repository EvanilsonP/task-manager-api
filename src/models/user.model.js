const mongoose = require('mongoose');
const validator = require('validator');

// Creating a model and a schema;
const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        required: true,
        trim: true,
        validate(email) {
            if(!validator.isEmail(email)) {
                throw new Error('Email is invalid. Please try again.');
            }
        }
    },

    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 7,
        validate(password) {
            if(password.toLowerCase().includes('password')) {
                throw new Error('Password cannot contain "password"');
            }
        }
    },

    age: {
        type: Number,
        required: true,
        trim: true,
        default: 0,
        validate(age) {
            if(age < 0) {
                throw new Error('Age must be a positive number.');
            }
        }
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;