const User = require('./User');
const Thesis = require('./Thesis');
const Security = require('./Security');
const Comment = require('./Comment');


// associations for models
User.hasMany(Thesis, {
    foreignKey: 'user_id'
});

Thesis.belongsTo(User,{
    foreignKey: 'user_id'
});

Thesis.hasMany(Comment, {
    foreignKey: 'thesis_id'
});

Comment.belongsTo(Thesis, {
    foreignKey: 'thesis_id'
});

User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
})

Security.hasMany(Thesis, {
    foreignKey: 'security_id',
    constraint: false
})

Thesis.belongsTo(Security, {
    foreignKey: 'security_id',
    constraint: false
});


module.exports = {
    User,
    Thesis,
    Security,
    Comment
};