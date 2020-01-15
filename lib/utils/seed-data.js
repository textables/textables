require('dotenv').config();
require('./connect')();
const data = require('../data/kanye-quotes');
require('../models/Text');

const { seedTextData } = require('./seed-function');

seedTextData(data, '5e1e511c46795e1e5d27356f');
