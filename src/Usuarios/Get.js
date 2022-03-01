'use strict'
const {Usuarios} = require('../../Models/Usuario')
// const {searchNothing} = require('../../Helpers/searchtNothing')
const {generateSuccess,generateCatch} = require('../../Helpers/errorGenerate')


const Get = async (event) =>{
     try{

        const response = await Usuarios.findAll({
            attributes:['nombre']
        });
        return generateSuccess('Se encontre usuarios',response);

    }catch(e){
        return generateCatch('se produjo un error',e.message);
    }
}

module.exports ={
    Get
}