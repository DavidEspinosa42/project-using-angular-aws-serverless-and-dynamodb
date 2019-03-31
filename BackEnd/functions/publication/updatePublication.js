'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.publicationsTable,
    Key:{
      datetime: event.queryStringParameters.datetime,
      title: event.queryStringParameters.title
    },
    UpdateExpression: "set author=:author, body=:body",
    ExpressionAttributeValues: {
        ":author": event.queryStringParameters.author,
        ":body": event.queryStringParameters.body
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