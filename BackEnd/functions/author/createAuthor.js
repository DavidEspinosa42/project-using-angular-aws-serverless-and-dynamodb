'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.authorsTable,
    Item: { 
      name: JSON.parse(event.body).name,
      email: JSON.parse(event.body).email,
      DOB: JSON.parse(event.body).DOB
    }
  };

  try {
    const data = await dynamoDB.put(params).promise();
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