'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  const params = {
    TableName: process.env.publicationsTable
  };

  try {
    const data = await dynamoDB.scan(params).promise();
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: 200,
      body: JSON.stringify(data.Items)
    };
  } catch (error) {
    return {
      headers: { 'Access-Control-Allow-Origin': '*' },
      statusCode: error.statusCode,
      body: JSON.stringify(error)
    };
  }
};