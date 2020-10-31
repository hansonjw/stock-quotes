const { Thesis } = require('../models');

const thesisData = [
    {
        id: 1,
        title: "Is Tesla...woa...whats next?",
        thesis_text: "This is some text about TSLA...blah blah blah...this is an investment thesis",
        user_id: 1,
        security_id: 'TSLA'
    },
    {
        id: 2,
        title: "An IPO with some potential...",
        thesis_text: "This si some text about PLTR....blah blah blah...this is an investment thesis",
        user_id: 5,
        security_id: 'PLTR'
    },
    {
        id: 3,
        title: "Berkshire, still the one",
        thesis_text: "This si some text about BRK....blah blah blah...this is an investment thesis",
        user_id: 2,
        security_id: 'BRKA'
    },
    {
        id: 4,
        title: "AAPL the juggernaught!",
        thesis_text: "This is some text about AAPL....blah blah blah...this is an investment thesis",
        user_id: 2,
        security_id: 'AAPL'
    },
    {
        id: 5,
        title: "A boring bank stock?",
        thesis_text: "This sis some text about JPM....blah blah blah...this is an investment thesis",
        user_id: 1,
        security_id: 'JPM'
    },
    {
        id: 6,
        title: "More Tesla...",
        thesis_text: "This is some text about TSLA...blah blah blah...this is an investment thesis",
        user_id: 4,
        security_id: 'TSLA'
    },
    {
        id: 7,
        title: "More Palantir...",
        thesis_text: "This si some text about PLTR....blah blah blah...this is an investment thesis",
        user_id: 2,
        security_id: 'PLTR'
    },
    {
        id: 8,
        title: "More Berkshire",
        thesis_text: "This si some text about BRK....blah blah blah...this is an investment thesis",
        user_id: 5,
        security_id: 'BRKA'
    },
    {
        id: 9,
        title: "More Apple...",
        thesis_text: "This is some text about AAPL....blah blah blah...this is an investment thesis",
        user_id: 4,
        security_id: 'AAPL'
    },
    {
        id: 10,
        title: "More JPMorgan",
        thesis_text: "This sis some text about JPM....blah blah blah...this is an investment thesis",
        user_id: 2,
        security_id: 'JPM'
    },
];

const seedThesis = () => Thesis.bulkCreate(thesisData);

module.exports = seedThesis;