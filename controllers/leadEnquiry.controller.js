const leadEnquiryModel = require('../models/leadEnquiry.model')

const leadEnquiryController = {
    insertData : async(req, res) => {
        try{
            const result = await leadEnquiryModel.saveData(req.body);
            return res.json(result);
        }catch(error){
            console.log(error, 'error');
        }
    },

    getData : async(req, res) => {
        try{
            let filter = {}
            if(req.query){
                if(req.query.city)
                    filter.city = req.query.city
            }
            const result = await leadEnquiryModel.fetchData(filter)
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    },

    getCount : async(req, res) => {
        try{
            let filter = {};
            console.log(req.query, 'query');
            if(req.query){
                if(req.query.date)
                    filter.createdAt = {$gte : new Date(req.query.date)}
                if(req.query.city)
                    filter.city = req.query.city;
            }
            const result = await leadEnquiryModel.countData(filter);
            return res.json(result);
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = leadEnquiryController;