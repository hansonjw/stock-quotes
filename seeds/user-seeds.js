const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'John Petrucci',
        password: 'majesty'
    },
    {
        id: 2,
        username: 'Gretchen Menn',
        password: 'halesouls'
    },
    {
        id: 3,
        username: 'Annie Thorisdottir',
        password: 'iceland'
    },
    {
        id: 4,
        username: 'John Mayer',
        password: 'gravity'
    },
    {
        id: 5,
        username: 'Joe Satriani',
        password: 'satch'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;