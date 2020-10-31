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


// need a create user route...
router.post('/', (req, res) => {
    User.create({
        username: req.body.username,
        password: req.body.password
    })
    .then(dbUserData => {
        res.json(dbUserData);
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
        const validPassword = dbuserData.checkPassword
    })
});



module.exports = router;