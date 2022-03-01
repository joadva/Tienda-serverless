'use strict'
const {Usuarios} = require('../../Models/Usuario')
// const {searchNothing} = require('../../Helpers/searchtNothing')
const {generateSuccess,generateCatch,generateError} = require('../../Helpers/errorGenerate')
const {generateResponse}=require('../../Helpers/generateResponse')
const {
    userScheme,
    messageUser,
  } = require("../../SchemaValidate/useValidate");
  const { validateInputs } = require("../../Helpers/ValidateInputs");

const Post = async (event) =>{
     try{
        const { email, contrasena,nombre } = JSON.parse(event["body"]);
        const isValidate = await validateInputs(
            {
                email, contrasena,nombre
            },
            userScheme,
            messageUser,
          );
          // valida el metodo para el cual si no retorna el isValidate y cacha el return de ValidateInputs
          if (!isValidate.matched) {
            return generateResponse(422, {
              success: false,
              message: "Error al registrar su Usuario",
              errors: isValidate.errors,
            });
          }
      
        const data={ email,contrasena, nombre, estatus:1}
        const response = await Usuarios.create(
           data
        );
        return generateSuccess('Se creo usuario',response);

    }catch(e){
        return generateCatch('se produjo un error',e.message);
    }
}

module.exports ={
    Post
}