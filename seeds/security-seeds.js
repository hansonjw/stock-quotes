const { Security } = require('../models');

const securityData = [
    {
        ticker: 'TSLA',
        name: 'Tesla'
    },
    {
        ticker: 'AAPL',
        name: 'Apple'
    },
    {
        ticker: 'BRKA',
        name: 'Berkshire Hathaway'
    },
    {
        ticker: 'PLTR',
        name: 'Palantir'
    },
    {
        ticker: 'JPM',
        name: 'JP Morgan Chase'
    },
    {
        ticker: 'SNOW',
        name: 'Snowflake'
    }
];

const seedSecurities = () => Security.bulkCreate(securityData);

module.exports = seedSecurities;