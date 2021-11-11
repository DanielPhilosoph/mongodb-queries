require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
//const Student = require("./student");
const { User, Post, Comment } = require("./users");

// * MongoDB connection
const url = `mongodb+srv://daniel_mongo_user:${process.env.PASSWORD}@cluster0.xx3io.mongodb.net/relationships?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");

  //
});

// ! Insert Comments

//Comment.insertMany([
//   {
//     username: "GoodGuyGreg",
//     comment: "Hope you got a good deal!",
//     post: "618d24f5a6958f25eae1383f",
//   },
//   {
//     username: "GoodGuyGreg",
//     comment: "What's mine is yours!",
//     post: "618d24f5a6958f25eae13840",
//   },
//   {
//     username: "GoodGuyGreg",
//     comment: "Don't violate the licensing agreement!",
//     post: "618d24f5a6958f25eae13841",
//   },
//   {
//     username: "ScumbagSteve",
//     comment: "It still isn't clean",
//     post: "618d24f5a6958f25eae1383c",
//   },
//   {
//     username: "ScumbagSteve",
//     comment: "Denied your PR cause I found a hack",
//     post: "618d24f5a6958f25eae1383e",
//   },
// ])
//   .then(function () {
//     console.log("Data inserted comments"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

// ! Insert Users + Posts

//User.insertMany([
//   {
//     username: "GoodGuyGreg",
//     first_name: "Good Guy",
//     last_name: "Greg",
//   },
//   {
//     username: "ScumbagSteve",
//     first_name: "Scumbag",
//     last_name: "Steve",
//   },
// ])
//   .then(function () {
//     console.log("Data inserted user"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

// Post.insertMany([
//   {
//     username: "GoodGuyGreg",
//     title: "Passes out at party",
//     body: "Wakes up early and cleans house",
//   },
//   {
//     username: "GoodGuyGreg",
//     title: "Steals your identity",
//     body: "Raises your credit score",
//   },
//   {
//     username: "GoodGuyGreg",
//     title: "Reports a bug in your code",
//     body: "Sends you a Pull Request",
//   },
//   {
//     username: "ScumbagSteve",
//     title: "Borrows something",
//     body: "Sells it",
//   },
//   {
//     username: "ScumbagSteve",
//     title: "Borrows everything",
//     body: "The end",
//   },
//   {
//     username: "ScumbagSteve",
//     title: "Forks your repo on github",
//     body: "Sets to private",
//   },
// ])
//   .then(function () {
//     console.log("Data inserted posts"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });

// ! Insert Students
// Student.insertMany([
//   {
//     name: "Ido",
//     surName: "Arbel",
//     birth: new Date(1998, 1, 26),
//     phone: "0526305421",
//     gender: "Male",
//     courses: ["Java", "Math"],
//   },
//   {
//     name: "Chen",
//     surName: "Halevi",
//     birth: new Date(1997, 3, 11),
//     phone: "0526323421",
//     gender: "Male",
//     courses: ["Math", "Law"],
//   },
//   {
//     name: "Koren",
//     surName: "Gan - or",
//     birth: new Date(1997, 1, 19),
//     phone: "0526305321",
//     gender: "Male",
//     courses: ["JavaScript", "Finance", "Law"],
//   },
//   {
//     name: "Oryan",
//     surName: "Levy",
//     birth: new Date(1998, 2, 4),
//     phone: "0542305321",
//     gender: "Male",
//     courses: ["JavaScript", "Law"],
//   },
//   {
//     name: "Yahalom",
//     surName: "Cohen",
//     birth: new Date(1993, 3, 11),
//     phone: "0542305392",
//     gender: "Female",
//     courses: ["Java", "Law"],
//   },
// ])
//   .then(function () {
//     console.log("Data inserted"); // Success
//   })
//   .catch(function (error) {
//     console.log(error); // Failure
//   });
