const { User } = require('../models');

const userData = [
    {
        id: 1,
        username: 'John Petrucci',
        email: 'john@petrucci.com',
        password: 'majesty'
    },
    {
        id: 2,
        username: 'Gretchen Menn',
        email: 'gretchen@menn.com',
        password: 'halesouls'
    },
    {
        id: 3,
        username: 'Annie Thorisdottir',
        email: 'annie@thorisdottir.com',
        password: 'iceland'
    },
    {
        id: 4,
        username: 'John Mayer',
        email: 'john@mayer.com',
        password: 'gravity'
    },
    {
        id: 5,
        username: 'Joe Satriani',
        email: 'joe@satriani.com',
        password: 'satch'
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;