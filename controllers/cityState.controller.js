const cityStateModel = require('../models/citySate.model');

const cityStateCtrl = {
    allStates : async(req, res) => {
        try{
            const getData = await cityStateModel.getAllState({});
            return res.json(getData);
        }catch(error){
            console.log(error, 'error')
        }
    },

    allCity: async(req, res) => {
        try{
            let filter = {};
            if(req.query){
                if(req.query.state)
                    filter.state = req.query.state;
            }
            const getData = await cityStateModel.getAllCities(filter);
            return res.json(getData);
        }catch(error){
            console.log(error, 'erorr')
        }
    }
}

module.exports = cityStateCtrl