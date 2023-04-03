const mongoose = require('mongoose');

const dealer_schema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        default: ""
    },
    email: {
        type: String,
        required: true,
        default: "",
        unique: true
    },
    passowrd: {
        type: String,
        required: true,
        default: "12345"
    },
    city: {
        type: String,
        required: true,
        default: ""
    }

})

const dealer_collection = new mongoose.model('dealer', dealer_schema, 'dealer');
module.exports = dealer_collection;