const mongoose = require('mongoose');

const test_ride_schema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true,
        default: ''
    },
    lastName: {
        type: String,
        required: true,
        default: ''
    },
    phone: {
        type: String,
        required: true,
        default: ''
    },
    otp: {
        type: String,
        required: true,
        default: ''
    },
    model: {
        type: String,
        required: true,
        default: ''
    },
    email: {
        type: String,
        required: true,
        default: ''
    },
    state: {
        type: String,
        required: true,
        default: ''
    },
    city: {
        type: String,
        required: true,
        default: ''
    },
    dealer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dealer',
        required: true,
        default: ''
    }

}, {timestamps: true})

const test_ride_collection = new mongoose.model('test_ride', test_ride_schema, 'test_ride');
module.exports = test_ride_collection;