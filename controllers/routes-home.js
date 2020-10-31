const router = require('express').Router();

const sequelize = require('../config/connection');
const { User, Thesis, Security, Comment } = require('../models');


router.get('/', (req, res) => {
    Thesis.findAll({
        attributes: [
            'id',
            'title',
            'thesis_text',
            'user_id',
            'security_id'
        ],
        include: [
            {
                model: Security,
                attributes: ['ticker', 'name']
            },
            {
                model: Comment,
                attributes: ['id', 'user_id', 'thesis_id', 'comment_text']
            },
            {
                model: User,
                attributes: ['id', 'username']
            }
        ]
    })
    .then (dbThesisData => {
        const theses = dbThesisData.map(thesis => thesis.get({ plain: true }));
        res.render('homepage', {
            theses
            // loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


module.exports = router;