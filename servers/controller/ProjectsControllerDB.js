const Project = require("../models/ProjectModelDB");

//add new student to database
const addNewProject = (req, res, nxt) => {
  const {title, description, demoLink, githubLink, image} = req.body;
  const {file} = req;
  console.log(file);
  const newProject = new Project({
    title: title,
    description: description,
    demoLink: demoLink,
    githubLink: githubLink,
    image: req.file.path,
  });
  newProject
    .save()
    .then(() => {
      res.status(200).send("add");
    })
    .catch(err => {
      res.status(400).send("error in post");
    });
};

//get all student from database
const getAllProjects = async (req, res, nxt) => {
  try {
    //const allStudents =  await Student.find({}).select({name:1,email:1,id:1})
    const AllProjects = await Project.find({});
    if (!AllProjects) {
      res.status(400).send("error in get all students");
    } else {
      res.json(AllProjects);
    }
  } catch (err) {
    nxt(err);
  }
};

//update student by id
const updateProjectById = async (req, res, nxt) => {
  const {id} = req.params;
  const updates = req.body;
  try {
    const updateProject = await Project.findByIdAndUpdate(id, updates, {
      returnOriginal: false,
    });
    if (!updateProject) {
      res.status(400).send("error in update student");
    } else {
      res.status(200).send(updateProject);
    }
  } catch (err) {
    nxt(err);
  }
};

const deleteProjectById = async (req, res, nxt) => {
  const {id} = req.params;

  try {
    const studentByID = await Project.findByIdAndRemove(id);
    if (!studentByID) {
      res.status(400).send("errror in deleting project by id");
    } else {
      res.status(200).send("deleting project in successfuly");
    }
  } catch (err) {
    nxt(err);
  }
};

//get student from database by id
// const getStudentById = async (req,res)=>{
//     const {id} = req.params
//     try{

//         const studentById = await Student.findById(id);
//         if(!studentById){
//         res.status(400).send("error in get student")
//     }  else{
//         res.send(studentById)
//      }
//     }catch(err){
//         for(let i in err.errors){
//             console.log(err.errors[i].message)
//         }
//     }
// }

module.exports = {
  addNewProject,
  getAllProjects,
  updateProjectById,
  deleteProjectById,
};
