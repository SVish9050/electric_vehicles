const mongoose = require('mongoose');

const lead_enquiry_schema = new mongoose.Schema({

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
    address: {
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
    pincode: {
        type: String,
        required: true,
        default: ''
    },
    model: {
        type: String,
        required: true,
        default: ''
    },
    mfgyear: {
        type: String,
        required: true,
        default: ''
    },
    budget: {
        type: String,
        required: true,
        default: ''
    },
    purchasemonth: {
        type: String,
        required: true,
        default: ''
    },
    finance: {
        type: String,
        required: true,
        default: ''
    }

}, {timestamps: true})

const lead_enquiry_collection = new mongoose.model('lead_enquiry', lead_enquiry_schema, 'lead_enquiry');
module.exports = lead_enquiry_collection;