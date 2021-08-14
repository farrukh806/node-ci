require('../models/User');

const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });
console.log('NODE_ENV', process.env.NODE_ENV);
jest.setTimeout(40000);
