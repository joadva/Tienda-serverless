const generateResponse = (code, data) => {
    return {
      statusCode: code,
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
        "Access-Control-Allow-Headers":
          "timestamp,tz,tenant-id,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Credentials": true,
      },
      body: JSON.stringify({ ...data }, null, 2),
    };
  };
  
  module.exports.generateResponse = generateResponse;