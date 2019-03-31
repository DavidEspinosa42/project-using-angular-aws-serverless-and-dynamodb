'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.publicationsTable,
    Item: {
      datetime: event.queryStringParameters.datetime,
      title: event.queryStringParameters.title,
      author: event.queryStringParameters.author,
      body: event.queryStringParameters.body
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