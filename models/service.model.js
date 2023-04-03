const service_schema = require('../schemas/service.schema')

const serviceModel = {
    saveData : async(objData) => {
        try{
            const data = await new service_schema(objData).save();
            if(data)
                return {status: 200, message: 'Service Inserted', data}
            else
                return {status: 400, message: 'Service Not Inserted'}
        }catch(error){
            console.log(error, 'error')
        }
    },

    fetchData : async(objFilter) => {
        try{
            const data = await service_schema.find(objFilter).exec();
            if(data.length > 0)
                return {status: 200, message: 'Service Data', data}
            else
                return {status: 400, message: 'No Service Data Found'}
        }catch(error){
            console.log(error, 'error')
        }
    },

    countData : async(objFilter) => {
        try{
            const data = await service_schema.find(objFilter).count();
            if(data)
                return {status: 200, messsage: 'Service Count', data}
            else
                return {status: 400, message: 'Service Count', data: 0}
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = serviceModel