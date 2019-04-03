'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.publicationsTable,
    Key: {
      datetime: event.queryStringParameters.datetime,
      title: event.queryStringParameters.title
    }
  };

  try {
    const data = await dynamoDB.delete(params).promise();
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(data)
    };
  } catch (error) {
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: error.statusCode,
      body: JSON.stringify(error)
    };
  }
};