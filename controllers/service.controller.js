const serviceModel = require('../models/service.model');

const serviceController = {
    insertData : async(req, res) => {
        try{
            const result = await serviceModel.saveData(req.body);
            return res.json(result);
        }catch(error){
            console.log(error, 'error');
        }
    },

    getData : async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.city)
                    filter.customerCity = req.query.city
            }
            const result = await serviceModel.fetchData(filter);
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    },

    getCount : async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.date)
                    filter.createdAt = {$gte : new Date(req.query.date)}
                if(req.query.city)
                    filter.city = req.query.city;
            }
            const result = await serviceModel.countData(filter);
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = serviceController;