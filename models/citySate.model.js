const city_state_collection = require('../schemas/state_cities.schema');

const cityStateModel = {
    getAllState : async(objFilter) => {
        try{
            const data = await city_state_collection.find(objFilter).select('state').exec();
            if(data.length > 0){
                return {status: 200, message: 'all states', data}
            }else{
                return {status: 400, message: 'all states', data}
            }
        }catch(error){
            console.log(error, 'error')
        }
    },

    getAllCities : async(objFilter) => {
        try{
            const data = await city_state_collection.find(objFilter).select('districts').exec();
            if(data.length > 0){
                return {status: 200, message: 'all cities', district: data}
            }else{
                return {status: 400, message: 'all cities', district: []}
            }
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = cityStateModel