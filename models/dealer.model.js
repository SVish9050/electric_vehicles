const dealer_collection = require('../schemas/dealer.schema');

const dealerModel = {
    saveDealer : async(objData) => {
        try{
            const data = await new dealer_collection(objData).save();
            if(data)
                return {status: 200, message: 'dealer inserted', data}
            else
                return {status: 400, message: 'dealer not inserted'}
        }catch(error){
            console.log(error, 'error')
        }
    },

    fetchDealer : async(objFilter) => {
        try{
            const data = await dealer_collection.find(objFilter).exec();
            if(data.length > 0)
                return {status: 200, message: 'dealers', data}
            else
                return {status: 400, message: 'No dealers', data: []}
        }catch(error){
            console.log(error, 'error')
        }
    },

    fetchOne : async(objFilter) => {
        try{
            const data = await dealer_collection.findOne(objFilter).exec();
            if(data)
                return {status: 200, message: 'dealer', data}
            else
                return {status: 400, message: 'No dealer'}
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = dealerModel