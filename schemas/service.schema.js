const mongoose = require('mongoose');

const service_schema = new mongoose.Schema({

    customerName: {
        type: String,
        required: true,
        default: ''
    },
    customerEmail: {
        type: String,
        required: true,
        default: ''
    },
    customerMobile: {
        type: String,
        required: true,
        default: ''
    },
    customerState: {
        type: String,
        required: true,
        default: ''
    },
    customerCity: {
        type: String,
        required: true,
        default: ''
    },
    customerPin: {
        type: String,
        required: true,
        default: ''
    },
    customerModel: {
        type: String,
        required: true,
        default: ''
    },
    customerPurchased:{
        type: String,
        required: false,
        default: ''
    },
    customerStore: {
        type: String,
        required: false,
        default: ''
    },
    customerInvoice: {
        type: String,
        required: false,
        default: ''
    },
    serviceType: {
        type: String,
        required: false,
        default: 'station'
    },
    customerPackage: {
        type: String,
        required: false,
        default: ''
    },
    customerAddress: {
        type: String,
        required: false,
        default: ''
    },
    serviceImage: {
        type: String,
        required: false,
        default: ''
    },
    customerRequirement: {
        type: String,
        required: false,
        default: ''
    },
    serviceDate: {
        type: Date,
        required: false,
        default: null
    },
    serviceTime: {
        type: String,
        required: false,
        default: ''
    },
    customerPurchaseDate: {
        type: Date,
        required: false,
        default: Date.now
    }

}, {timestamps: true})

const service_model = new mongoose.model('service', service_schema, 'service');
module.exports = service_model;