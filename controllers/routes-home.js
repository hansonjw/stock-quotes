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


router.get('/thesis/:id', (req, res) => {
    Thesis.findOne({
        where: { id: req.params.id},
        attributes: [
            'title',
            'thesis_text',
            'security_id'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'thesis_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            },
            {
                model: Security,
                attributes: ['name']
            }
        ]
    })
    .then(dbThesisData => {
        if(!dbThesisData) {
            res.status(404).jason({message: 'No Thesis found with this ID'});
            return;
        }

        // serialize the data - what does this mean?
        const thesis = dbThesisData.get({ plain: true });
        console.log(thesis);

        // pass data to handlebars template

        res.render('aThesis', {
            thesis
            // loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;