/**
 * @description  Modulo para validar campos para ver sus esquemas estan en Scheme en la carpeta helpers se crean y se mandan a llamar en la lambdda seleccionada
 *                para guiar o ver algo de cambiso la libreria es   node-input-validator  el link al github es : https://github.com/bitnbytesio/node-input-validator
 *
 */

 const { Validator } = require("node-input-validator");
 const niv = require("node-input-validator");
 const validateInputs = async (object, squema, customMessage) => {
   const v = new Validator(object, squema);
   console.log(object);
 
   niv.addCustomMessages(customMessage);
 
   const matched = await v.check();
   return { matched, errors: v.errors };
 };
 
 module.exports = {
   validateInputs,
 };