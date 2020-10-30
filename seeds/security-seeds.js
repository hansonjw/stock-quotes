const { Security } = require('../models');

const securityData = [
    {
        ticker: 'TSLA'
    },
    {
        ticker: 'AAPL'
    },
    {
        ticker: 'BRKA'
    },
    {
        ticker: 'PLTR'
    },
    {
        ticker: 'JPM'
    },
    {
        ticker: 'SNOW'
    }
];

const seedSecurities = () => Security.bulkCreate(securityData);

module.exports = seedSecurities;