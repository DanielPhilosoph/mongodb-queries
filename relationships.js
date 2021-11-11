require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const { User, Post, Comment } = require("./users");

// * MongoDB connection
const url = `mongodb+srv://daniel_mongo_user:${process.env.PASSWORD}@cluster0.xx3io.mongodb.net/relationships?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");

  // ! Querying related collections

  // * Find all users
  async function getUsers() {
    let users = await User.find({});
    console.log(users);
  }
  //getUsers();

  // * Find all Posts
  async function getPosts() {
    let posts = await Post.find({});
    console.log(posts);
  }
  //getPosts();

  // * find all posts that was authored by "name"
  async function getPostsByUsername(name) {
    let posts = await Post.find({ username: name });
    console.log(posts);
  }
  //getPostsByUsername("ScumbagSteve");

  // * Find all Comments
  async function getComments() {
    let comments = await Comment.find({});
    console.log(comments);
  }
  //getComments();

  // * Find all Comments by username
  async function getCommentsByUsername(name) {
    let comments = await Comment.find({ username: name });
    console.log(comments);
  }
  //getCommentsByUsername("ScumbagSteve");

  // * find all comments belonging to "postText"
  async function getCommentsRelated(postText) {
    let post = await Post.find({ title: postText });
    let comments = await Comment.find({
      post: post[0]._id.toString(),
    });
    console.log(comments);
  }
  //getCommentsRelated("Reports a bug in your code");
});
