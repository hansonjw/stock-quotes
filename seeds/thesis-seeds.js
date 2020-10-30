const { Thesis } = require('../models');

const thesisData = [
    {
        id: 1,
        title: "Is Tesla...woa...whats next?",
        thesis_text: "This is some text about TSLA...blah blah blah...this is an investment thesis",
        user_id: 1,
        ticker: 'TSLA'
    },
    {
        id: 2,
        title: "An IPO with some potential...",
        thesis_text: "This si some text about PLTR....blah blah blah...this is an investment thesis",
        user_id: 5,
        ticker: 'PLTR'
    },
    {
        id: 3,
        title: "Berkshire, still the one",
        thesis_text: "This si some text about BRK....blah blah blah...this is an investment thesis",
        user_id: 2,
        ticker: 'BRKA'
    },
    {
        id: 4,
        title: "AAPL the juggernaught!",
        thesis_text: "This is some text about AAPL....blah blah blah...this is an investment thesis",
        user_id: 2,
        ticker: 'AAPL'
    },
    {
        id: 5,
        title: "A boring bank stock?",
        thesis_text: "This sis some text about JPM....blah blah blah...this is an investment thesis",
        user_id: 4,
        ticker: 'JPM'
    },
];

const seedThesis = () => Thesis.bulkCreate(thesisData);

module.exports = seedThesis;