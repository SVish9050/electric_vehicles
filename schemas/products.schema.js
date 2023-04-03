const mongoose = require('mongoose');

const products_schema = new mongoose.Schema({

    productName: {
        type: String,
        required: true,
        default: ""
    },
    productCategory: {
        type: String,
        required: true,
        default: "",
    },
    productSubCategory: {
        type: String,
        required: true,
        default: ""
    },
    productColor: {
        type: String,
        required: true,
        default: ""
    },
    productPrice: {
        type: Number,
        required: true,
        default: ""
    },
    productImage: {
        type: String,
        required: true,
        default: ""
    },
    productDetail: {
        type: Object,
        required: true,
        default: ""
    },
    productStatus: {
        type: Boolean,
        required: true,
        default: 1
    },
    dealerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dealer',
        required: true,
        default: ''
    }

}, {timestamps: true})

const products_collection = new mongoose.model('products', products_schema, 'products');
module.exports = products_collection;