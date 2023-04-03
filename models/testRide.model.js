const test_ride_collection = require('../schemas/test_ride.schema');

const testRideModel = {
    saveData : async(objData) => {
        try{
            const data = await new test_ride_collection(objData).save();
            if(data)
                return {status: 200, message: 'Test Ride Saved', data}
            else
                return {status: 400, message: 'Test Ride Insertion Failed'}
        }catch(error){
            console.log(error, 'error')
        }
    },

    fetchData : async(objFilter) => {
        try{
            const data = await test_ride_collection.find(objFilter).exec();
            if(data)
                return {status: 200, message: 'Test Ride Data', data}
            else
                return {status: 400, message: 'Test Ride Data', data: []}
        }catch(error){
            console.log(error, 'error')
        }
    },

    countData : async(objFilter) => {
        try{
            const data = await test_ride_collection.find(objFilter).count();
            if(data)
                return {status: 200, message: 'Test Ride Count', data}
            else
                return {status: 400, message: 'Test Ride Count', data: 0}
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = testRideModel;