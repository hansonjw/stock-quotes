const User = require('./User');
const Thesis = require('./Thesis');
const Security = require('./Security');
const Comment = require('./Comment');


// associations for models
User.hasMany(Thesis, {
    foreignKey: 'user_id'
});

Thesis.hasMany(Comment, {
    foreignKey: 'thesis_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});

Thesis.hasOne(Security, {
    foreignKey: 'ticker',
    constraints: false
});


module.exports = {
    User,
    Thesis,
    Security,
    Comment
};