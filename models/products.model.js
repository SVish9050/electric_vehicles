const products_schema = require('../schemas/products.schema');

const product_model = {
    saveData : async(objData) => {
        try{
            const data = await new products_schema(objData).save();
            if(data)
                return {status: 200, message: 'Product Saved', data}
            else
                return {status: 400, message: 'Product Not Saved'}
        }catch(error){
            console.log('error', error)
        }
    },

    fetchData : async(objectFilter) => {
        try{
            const data = await products_schema.find(objectFilter).exec();
            if(data.length)
                return {status: 200, message: 'Products Data', data}
            else
                return {status: 400, message: 'No Products'}
        }catch(error){
            console.log('error', error)
        }
    }
}

module.exports = product_model