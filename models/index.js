const User = require('./User');
const Blog = require('./Blog');
const Comment = require('./comment')

// User has many Blogs 

User.hasMany(Blog, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

// Blogs belongs to User

Blog.belongsTo(User, {
    foreignKey: 'user_id'
});

Blog.hasMany(Comment, {
    foreignKey: 'blog_id',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Blog, {
    foreignKey: 'blog_id'
});

module.exports = { User, Blog, Comment }