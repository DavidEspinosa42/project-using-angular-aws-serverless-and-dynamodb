'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.authorsTable,
    Key:{
      name: event.queryStringParameters.name
    },
    UpdateExpression: "set email=:email, DOB=:dob",
    ExpressionAttributeValues: {
        ":email": JSON.parse(event.body).email,
        ":dob": JSON.parse(event.body).DOB
    },
    ReturnValues: "ALL_NEW"
  };

  try {
    const data = await dynamoDB.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      statusCode: error.statusCode,
      body: JSON.stringify(error)
    };
  }
};