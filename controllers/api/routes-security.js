const router = require('express').Router();
const { User, Thesis, Security, Comment } = require('../../models');


router.get('/', (req, res) => {
    Security.findAll({
        include: [
            {
                model: Thesis,
                attributes: ['title', 'user_id']
            }
        ]
    })
    .then(dbSecurityData => res.json(dbSecurityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


router.get('/:id', (req, res) => {
    Security.findOne({
        where: {
            ticker: req.params.id
        },
        include: [
            {
                model: Thesis,
                attributes: ['title', 'user_id']
            }
        ]
    })
    .then(dbSecurityData => res.json(dbSecurityData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});


module.exports = router;