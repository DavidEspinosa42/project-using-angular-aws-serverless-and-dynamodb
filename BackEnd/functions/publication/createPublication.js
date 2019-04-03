'use strict';

const dynamoDB = require('../dynamoDB');

module.exports.handler = async (event) => {
  console.log(event)
  const params = {
    TableName: process.env.publicationsTable,
    Item: {
      datetime: new Date().toISOString(),
      title: JSON.parse(event.body).title,
      author: JSON.parse(event.body).author,
      body: JSON.parse(event.body).body
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