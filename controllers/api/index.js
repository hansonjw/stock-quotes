const router = require('express').Router();

const routesUser = require('./routes-user.js');
const routesThesis = require('./routes-thesis.js');
const routesSecurity = require('./routes-security.js');
const routesComment = require('./routes-comment.js');

router.use('/users',routesUser);
router.use('/thesis', routesThesis);
router.use('/security', routesSecurity);
router.use('/comment', routesComment);

module.exports = router;