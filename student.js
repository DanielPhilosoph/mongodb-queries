const mongoose = require("mongoose");

const studentSchem = new mongoose.Schema({
  name: { type: String, required: true },
  surName: { type: String, required: true },
  birth: { type: Date, required: true },
  phone: { type: String, required: true },
  gender: { type: String, required: true },
  courses: [
    {
      type: String,
    },
  ],
});
const Student = mongoose.model("person", studentSchem);

module.exports = Student;
