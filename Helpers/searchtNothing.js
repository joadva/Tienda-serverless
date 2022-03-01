const {generateSuccess,generateCatch} = require('../Helpers/errorGenerate');
const {db} = require('../conection')

const searchNothing = async (model) => {
    const response = await model.findAll({
    
    });
    if(!response){
        return generateSuccess('no see encontr usuarios',response);
    }
    
}

module.exports ={
    searchNothing
}