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

  // ! Query / Find Documents:

  // * Get all students
  async function getAllStudents() {
    let students = await Student.find({});
    console.log(students);
    return students;
  }
  //getAllStudents();

  // * Get all students by name
  async function getStudentsByName(name) {
    let students = await Student.find({ name: name });
    console.log(students);
    return students;
  }
  //getStudentsByName("Ido");

  //* Get all students how learned specific course
  //? $all = Matches arrays that contain all elements specified in the query.
  async function getStudentsByCourse(course) {
    let students = await Student.find({ courses: { $all: course } });
    console.log(students);
    return students;
  }
  //getStudentsByCourse("Law");

  //* Get all students where courses include specific course and specific gender
  async function getStudentsByCourseAndGender(course, gender) {
    let students = await Student.find({
      courses: { $all: course },
      gender: gender,
    });
    console.log(students);
    return students;
  }
  //getStudentsByCourseAndGender("Java", "Female");

  // * Get all students older then 'Date'
  //? $lt = Matches values that are less than a specified value.
  async function getStudentsOlderThen(Date) {
    let students = await Student.find({ birth: { $lt: Date } });
    console.log(students);
    return students;
  }
  //getStudentsOlderThen(new Date(1997, 5, 5));

  // * Get all students where phone starts with 'number'
  //? $regex = Selects documents where values match a specified regular expression.
  async function getStudentsByPhoneCode(number) {
    const regex = new RegExp(`^${number}`);
    let students = await Student.find({ phone: { $regex: regex } });
    console.log(students);
    return students;
  }
  //getStudentsByPhoneCode("054");

  // ! Update Documents

  // * Add a JavaScript course to the students where name set to 'name'
  //? $push = Adding value to array { array: value }
  async function updateCourseToStudent(name) {
    let students = await Student.updateMany(
      { name: name },
      { $push: { courses: "JavaScript" } }
    );
    console.log(students);
    return students;
  }
  //updateCourseToStudent("Yahalom");

  // * Update the birth to 'date' where name set to 'name'
  async function updateDateToStudent(date, name) {
    let students = await Student.updateMany({ name: name }, { birth: date });
    console.log(students);
    return students;
  }
  //updateDateToStudent(new Date(1998, 11, 2), "Koren");

  // ! Text Search

  // * Find all students that have a name that contains 'letter'
  async function GetStudentsContain(letter) {
    const regex = new RegExp(`[${letter}]`);
    let students = await Student.find({ name: { $regex: regex } });
    console.log(students);
    return students;
  }
  //GetStudentsContain("o");

  // * Find all students that have a surName that contains the letter "letter1" or "letter2"
  async function GetStudentsContain(letter1, letter2) {
    const regex = new RegExp(`[(${letter1}|${letter2})]`);
    let students = await Student.find({ surName: { $regex: regex } });
    console.log(students);
    return students;
  }
  //GetStudentsContain("y", "h");

  // ! Delete Documents

  // * Delete student by name
  async function deleteStudent(name) {
    let students = await Student.deleteOne({ name: name });
    console.log(students);
    return students;
  }
  //deleteStudent("Ido");

  // * Delete student where 'date'
  async function deleteStudent(date) {
    let students = await Student.deleteOne({ birth: date });
    console.log(students);
    return students;
  }
  //deleteStudent(new Date(1998, 1, 4)); // month index starts with 0
});
