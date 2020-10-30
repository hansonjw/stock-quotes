const { Comment } = require('../models');

const commentData = [
    {
        id: 1,
        user_id: 5,
        thesis_id: 2,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 2,
        user_id: 4,
        thesis_id: 3,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 3,
        user_id: 3,
        thesis_id: 2,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 4,
        user_id: 2,
        thesis_id: 1,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 5,
        user_id: 1,
        thesis_id: 5,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 6,
        user_id: 4,
        thesis_id: 4,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 7,
        user_id: 3,
        thesis_id: 2,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 8,
        user_id: 3,
        thesis_id: 1,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 9,
        user_id: 5,
        thesis_id: 2,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 10,
        user_id: 4,
        thesis_id: 1,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 11,
        user_id: 1,
        thesis_id: 1,
        comment_text: "hey this is a great comment!"
    },
    {
        id: 12,
        user_id: 3,
        thesis_id: 4,
        comment_text: "hey this is a great comment!"
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;