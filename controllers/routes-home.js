const router = require('express').Router();

const sequelize = require('../config/connection');
const { User, Thesis, Security, Comment } = require('../models');

// route if user is not logged in...
router.get('/login', (req, res) => {
    // if user is logged in redirect to main page
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    // ...otherwise take then to the login page
    res.render('login');
});


// route for 'getting' all Thesis's and rendering on the page
router.get('/', (req, res) => {
    Thesis.findAll({
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

// route for getting a particular Thesis and rendering
router.get('/thesis/:id', (req, res) => {
    Thesis.findOne({
        where: { id: req.params.id},
        attributes: [
            'title',
            'thesis_text',
            'security_id',
            'createdAt'
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
});

// route for getting a particular thesis and rendering on the page
router.get('/security/:id', (req, res) => {
    Security.findOne({
        where: { ticker: req.params.id},
        attributes: [
            'ticker',
            'name'
        ],
        include: [
            {
                model: Thesis,
                attributes: [
                    'id',
                    'title',
                    'thesis_text',
                    'user_id',
                    'security_id',
                    'createdAt'
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            }
        ]
    })
    .then(dbSecurityData => {
        if(!dbSecurityData) {
            res.status(404).jason({message: 'No Security found with this ID'});
            return;
        }

        // serialize the data - what does this mean?
        const security = dbSecurityData.get({ plain: true });
        console.log(security);

        // pass data to handlebars template

        res.render('aSecurity', {
            security
            // loggedIn: req.session.loggedIn
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


// render page for entering a new thesis...
router.get('/newthesis', (req, res) => {
    User.findOne({
        where: {
            // id: req.session.user_id
            id: 3
        },
        attributes: [
            'id',
            'username'
        ],
    include: [
        {
            model: Thesis,
            attributes: [ 'id', 'security_id', 'title'],
            include: [{
                model: Security,
                attributes: ['ticker', 'name']
            }]
        },
        {
            model: Comment,
            attributes: ['id', 'thesis_id', 'comment_text']
        }
    ]
    })
    .then(dbUserData => {
        if (!dbUserData) {
            res.status(404).json({message: "No user found with that ID"});
            return;
        }
        // serialize the data - what does this mean?
        const user = dbUserData.get({ plain: true });
        console.log(user);
        res.render('newThesis', {user});
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

// route 




module.exports = router;