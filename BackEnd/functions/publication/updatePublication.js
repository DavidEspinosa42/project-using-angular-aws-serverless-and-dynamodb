'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.publicationsTable,
    Key:{
      title: event.queryStringParameters.title
    },
    UpdateExpression: "set body=:body",
    ExpressionAttributeValues: {
        ":body": event.body
    }
  };

  try {
    const data = await dynamoDB.update(params).promise();
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