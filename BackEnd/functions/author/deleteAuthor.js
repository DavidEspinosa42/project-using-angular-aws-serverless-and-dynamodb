'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: 'authorsTable',
    Key: { name: event.queryStringParameters.name }
  };

  try {
    const data = await dynamoDB.delete(params).promise();
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