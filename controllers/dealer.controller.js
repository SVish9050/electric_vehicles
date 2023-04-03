const dealerModel = require('../models/dealer.model');

const dealerController = {
    insertDealer : async(req, res) => {
        try{
            const data = await dealerModel.saveDealer({name: 'New Delhi Dealer', email: 'ndls@dealer.com', password: '12345', city: 'New Delhi'});
            return res.json(data);
        }catch(error){
            console.log(error, 'error')
        }
    },

    getDealer : async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.city)
                    filter.city = req.query.city;
            }
            const data = await dealerModel.fetchDealer(filter);
            return res.json(data);
        }catch(error){
            console.log(error, 'error')
        }
    },

    getOne : async(req, res) => {
        try{
            const result = await dealerModel.fetchOne(req.body);
            return res.json(result);
        }catch(error){
            console.log(error, 'error');
        }
    }
}

module.exports = dealerController;