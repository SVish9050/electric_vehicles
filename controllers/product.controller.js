const product_model = require('../models/products.model');

const product_controller = {
    insertData : async(req, res) => {
        try{
            let obj = {productName : 'Velocity – Electric Cycle by Hero Electric', productCategory : 'Electric Scooter', productSubCategory : 'CX(LP Series)', productColor: 'beige', productPrice: 86391, productImage: 'Photon-LP_Beige_550x550.png', productDetail: {}, productStatus: 1, dealerId : '6421cc76f50048630d8831cf'}
            const result = await product_model.saveData(obj);
            return res.json(result);
        }catch(error){
            console.log('error', error)
        }
    },

    getData : async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.dealer)
                    filter.dealerId = req.query.dealer
            }
            const result = await product_model.fetchData(filter);
            return res.json(result);
        }catch(error){
            console.log('error', error)
        }
    }
}

module.exports = product_controller