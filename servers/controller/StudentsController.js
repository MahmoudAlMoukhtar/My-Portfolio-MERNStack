const validator = require('../util/StudentsValidator')
const Student = require('../models/StudentModle')

const getAllStudents = (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  //res.json(students);
  Student.fetchAllStudents((obj)=>{
      res.render("Students.ejs",{students:obj})
  });
  
}


const getStudentById = (req, res) => {
  //const {id} = req.params;
    const id = req.id;  

  const student = students.find(std => std.id === id);
  res.json(student);
}

const createNewStudetns = (req, res) => {
    const {name, email} = req.body;
  const valid = validator(req.body);
  if (valid) {
    const newStudent = new Student(name, email)
    newStudent.saveStudent();
    
    res.json(newStudent);
  } else {
    //res.sen(403).send("forvidden command");
    res.sendStatus(403);
  }
}

const updateStudentByID = (req, res) => {
  const {id} = req.params;
  const updates = req.body;

  const studentsUpdate = students.map(std => {
    if (std.id == id) {
      return {...std, ...updates};
    } else {
      return std; 
    }
  });
  res.json(studentsUpdate);
}

const deleteStudentByID = (req, res) => {
  //const {id} = req.params;
  const id = req.id;
  //const deletStudent = students.find(std => std.id === id);
  const studentsAfterDeleteStd = students.filter(std => std.id !== id);
  res.send("one Element affected !!!");
}

module.exports = {
    getAllStudents,
    getStudentById,
    createNewStudetns,
    updateStudentByID,
    deleteStudentByID
}