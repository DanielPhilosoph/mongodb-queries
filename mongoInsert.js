require("dotenv").config();
const path = require("path");
const mongoose = require("mongoose");
const Student = require("./student");

// * MongoDB connection
const url = `mongodb+srv://daniel_mongo_user:${process.env.PASSWORD}@cluster0.xx3io.mongodb.net/cyber4s?retryWrites=true&w=majority`;

mongoose.connect(url);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

Student.insertMany([
  {
    name: "Ido",
    surName: "Arbel",
    birth: new Date(1998, 1, 26),
    phone: "0526305421",
    gender: "Male",
    courses: ["Java", "Math"],
  },
  {
    name: "Chen",
    surName: "Halevi",
    birth: new Date(1997, 3, 11),
    phone: "0526323421",
    gender: "Male",
    courses: ["Math", "Law"],
  },
  {
    name: "Koren",
    surName: "Gan - or",
    birth: new Date(1997, 1, 19),
    phone: "0526305321",
    gender: "Male",
    courses: ["JavaScript", "Finance", "Law"],
  },
  {
    name: "Oryan",
    surName: "Levy",
    birth: new Date(1998, 2, 4),
    phone: "0542305321",
    gender: "Male",
    courses: ["JavaScript", "Law"],
  },
  {
    name: "Yahalom",
    surName: "Cohen",
    birth: new Date(1993, 3, 11),
    phone: "0542305392",
    gender: "Female",
    courses: ["Java", "Law"],
  },
])
  .then(function () {
    console.log("Data inserted"); // Success
  })
  .catch(function (error) {
    console.log(error); // Failure
  });
