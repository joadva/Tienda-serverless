/**
 * Helpers para acortar condigo de respuesta ocupando un helper
 */

 const { generateResponse } = require('./generateResponse');

 function generateError(message, errors) {
     return generateResponse(422, {
         success: false,
         message: message,
         errors: errors
     });
 }
 
 function generateBasic(message) {
     return generateResponse(422, {
         success: false,
         message: message
     });
 }
 
 function generateNotfound(message, errors) {
     return generateResponse(400, {
         success: false,
         message: message,
         errors: errors
     });
 }
 
 function generateCatch(message, data) {
     return generateResponse(500, {
         success: false,
         message: message,
         data: data
     });
 }
 
 function generateSuccess(message, data) {
     return generateResponse(200, {
         success: true,
         message: message,
         data: data
     });
 }
 function generateFilter(message, totalPages, data) {
     return generateResponse(200, {
         success: true,
         message: message,
         totalPages: totalPages,
         data: data
     });
 }
 
 function generateSubquery(message, count, registros, data) {
     return generateResponse(200, {
         success: true,
         message: message,
         count: count,
         primer_registro: registros,
         data: data
     });
 }
 function generateCreate(message, data) {
     return generateResponse(201, {
         success: true,
         message: message,
         data: data
     });
 }
 module.exports = {
     generateError,
     generateCatch,
     generateSuccess,
     generateCreate,
     generateNotfound,
     generateFilter,
     generateBasic,
     generateSubquery
 };