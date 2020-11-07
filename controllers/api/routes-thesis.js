const router = require('express').Router();
const { User, Thesis, Security, Comment } = require('../../models');
const sequelize = require('../../config/connection');


//get all theses in the database
router.get('/', (req, res) => {
    Thesis.findAll({
        attributes: [
            'id',
            'title',
            'user_id',
            'security_id',
            'createdAt'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Security,
                attributes: ['name']
            }
        ]
    })
    .then(dbThesisData => res.json(dbThesisData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


//get one thesis and associated data
router.get('/:id', (req, res) => {
    Thesis.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'title',
            'thesis_text',
            'user_id',
            'security_id',
            'createdAt'
        ],
        include: [
            {
                model: User,
                attributes: ['id', 'username']
            },
            {
                model: Comment,
                attributes: ['id', 'user_id', 'comment_text']
            },
            {
                model: Security,
                attributes: ['name']
            }
        ]
    })
    .then(dbThesisData => res.json(dbThesisData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// Create a new thesis
// Need to figure out sign in ####### 
router.post('/', (req, res) => {
    Thesis.create({
        title: req.body.title,
        thesis_text: req.body.thesis_text,
        security_id: req.body.security_id,
        // user_id: req.session.user_id,
        user_id: req.body.user_id,
    })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


module.exports = router;