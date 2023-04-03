const testRideModel = require('../models/testRide.model');

const testRideController = {
    insertData : async(req, res) => {
        try{
            const result = await testRideModel.saveData(req.body);
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    },

    getData : async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.dealer)
                    filter.dealer = req.query.dealer
                if(req.query.city)
                    filter.city = req.query.city
            }
            const result = await testRideModel.fetchData(filter);
            return res.json(result)
        }catch(error){
            console.log(error, 'error')
        }
    },

    getCount : async(req, res) => {
        try{
            let filter = {}
            if(req.query){
                if(req.query.city)
                    filter.city = req.query.city
                if(req.query.date)
                    filter.createdAt = {$gte : new Date(req.query.date)}
                if(req.query.dealer)
                    filter.dealer = req.query.dealer
            }
            const result = await testRideModel.countData(filter);
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = testRideController