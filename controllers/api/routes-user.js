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
            'email',
            'username',
            'password'
        ],
    include: [
        {
            model: Thesis,
            attributes: [ 'id', 'ticker', 'title']
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



module.exports = router;