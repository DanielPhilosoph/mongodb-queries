const mongoose = require("mongoose");

const userSchem = new mongoose.Schema({
  username: { type: String, required: true },
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
});

const User = mongoose.model("user", userSchem);

const postsSchem = new mongoose.Schema({
  username: { type: String, required: true },
  title: { type: String, required: true },
  body: { type: String, required: true },
});

const Post = mongoose.model("post", postsSchem);

const commentSchem = new mongoose.Schema({
  username: { type: String, required: true },
  comment: { type: String, required: true },
  post: { type: String, required: true },
});

const Comment = mongoose.model("comment", commentSchem);

module.exports = { User, Post, Comment };
