'use strict';

const AWS = require('aws-sdk');

const options = {
  region: "localhost",
  endpoint: "http://localhost:8000",
  accessKeyId: 'DEFAULT_ACCESS_KEY',
  secretAccessKey: 'DEFAULT_SECRET'
};

const dynamoDB = process.env.IS_OFFLINE ? new AWS.DynamoDB.DocumentClient(options) : new AWS.DynamoDB.DocumentClient();

module.exports = dynamoDB;