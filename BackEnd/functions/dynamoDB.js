'use strict';

const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: 'localhost',
  endpoint: 'http://localhost:8001',
  accessKeyId: 'DEFAULT_ACCESS_KEY',  // needed if you don't have aws credentials at all in env
  secretAccessKey: 'DEFAULT_SECRET' // needed if you don't have aws credentials at all in env
})

module.exports = dynamoDb;