const router = require('express').Router();
const { User, Thesis, Security, Comment } = require('../../models');
const sequelize = require('../../config/connection');


// Get all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: [
            'id',
            'user_id',
            'thesis_id',
            'comment_text'
        ]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.post('/', (req, res) => {
    Comment.create({
        thesis_id: req.body.thesis_id,
        comment_text: req.body.comment_text,
        user_id: req.session.user_id,
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

module.exports = router;