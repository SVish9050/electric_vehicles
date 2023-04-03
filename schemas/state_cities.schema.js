const mongoose = require('mongoose');

const state_cities_schema = new mongoose.Schema({

    state: {
        type: String,
        required: true,
        default: ""
    },
    districts: {
        type: Array,
        required: true,
        default: []
    }

})

const state_cities_collection = new mongoose.model('state_cities', state_cities_schema, 'state_cities');
module.exports = state_cities_collection;