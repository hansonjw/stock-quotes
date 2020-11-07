const router = require('express').Router();
const { User, Thesis, Security, Comment } = require ('../../models');


router.get('/', (req, res) => {
    User.findAll({})
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/:id', (req, res) => {
    User.findOne({
        where: {
            id: req.params.id
        },
        attributes: [
            'id',
            'username'
        ],
    include: [
        {
            model: Thesis,
            attributes: [ 'id', 'security_id', 'title']
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
        res.json(dbUserData)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
})


// create a new user route...
router.post('/', (req, res) => {
    console.log("User Post Route was called...")
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json(dbUserData);
        });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});


// login user route...
router.post('/login', (req,res) => {
    User.findOne({
        where: {
            username: req.body.username
        }
    })
    .then(dbUserData => {
        if(!dbUserData) {
            res.status(400).json({message: "No user found with that username..."});
            return;
        }
        const validPassword = dbUserData.checkPassword

        if(!validPassword){
            res.status(400).json({ message: 'That password does not compute...'});
            return;
        }

        req.session.save(() => {
            req.session.user_id = dbUserData.id;
            req.session.username = dbUserData.username;
            req.session.loggedIn = true;
            res.json({ user: dbUserData, message: 'You are now logged in!' });
            console.log(req.session.loggedIn);
        });
    });
});

// user logout...
router.post('/logout', (req, res) => {
    console.log("logging the user out...");
    if (req.session.loggedIn) {
      req.session.destroy(() => {
        res.status(204).end();
      });
    }
    else {
      res.status(404).end();
    }
});


module.exports = router;