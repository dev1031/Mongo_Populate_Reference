const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var userSchema = Schema({
  name: String,
  age: Number,
  posts: [{ type: Schema.Types.ObjectId, ref: 'Post' }]
});

var postSchema = Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  title: String,
  content: String
});

var User = mongoose.model('User', userSchema);
var Post = mongoose.model('Post', postSchema);

module.exports = { User , Post }