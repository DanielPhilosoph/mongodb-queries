# mongodb-queries

Here I have lots of exemples of mongoose queries to use.

## Exemples

- [X] Exsample of finding a value in array (query)

```js
//* Get all students how learned specific course
//? $all = Matches arrays that contain all elements specified in the query.
  async function getStudentsByCourse(course) {
    let students = await Student.find({ courses: { $all: course } });
    console.log(students);
    return students;
  }
  ```
  
  - [X] Exsample of pushing into array

```js
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
  ```
  
  - [X] Exsample of finding studends that surName contains letter1 or letter2

```js
// * Find all students that have a surName that contains the letter "letter1" or "letter2"
  async function GetStudentsContain(letter1, letter2) {
    const regex = new RegExp(`[(${letter1}|${letter2})]`);
    let students = await Student.find({ surName: { $regex: regex } });
    console.log(students);
    return students;
  }
  ```
