const lead_enquiry_collection = require('../schemas/lead_enquiry.schema');

const leadEnquiryModel = {
    saveData : async(objData) => {
        try{
            const data = await new lead_enquiry_collection(objData).save();
            if(data)
                return {status: 200, message: 'Lead Enquiry Saved', data}
            else
                return {status: 400, message: 'Lead Enquiry Insertion Failed'}
        }catch(error){
            console.log(error, 'error')
        }
    },

    fetchData : async(objFilter) => {
        try{
            const data = await lead_enquiry_collection.find(objFilter).exec();
            if(data)
                return {status: 200, message: 'Lead Enquiry Data', data}
            else
                return {status: 400, message: 'Lead Enquiry Data', data: []}
        }catch(error){
            console.log(error, 'error')
        }
    },

    countData : async(countFilter) => {
        try{
            console.log('countFilter', countFilter)
            const data = await lead_enquiry_collection.find(countFilter).count();
            if(data)
                return {status: 200, message: 'Lead Enquiry Counting', data}
            else
                return {status: 400, message: 'Lead Enquiry Counting', data: 0}
        }catch(error){
            console.log(error, 'error')
        }
    }
}

module.exports = leadEnquiryModel;