const express = require('express');
const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const ProjectValidatorMW = require('../middlewares/ProjectsMW')
const AuthPermissionMW = require('../middlewares/AuthPermissionMW')
const router = express.Router();

const {
  addNewProject,
  getAllProjects,
  updateProjectById,
  deleteProjectById
} = require('../controller/ProjectsControllerDB')




const storage = multer.diskStorage({
    destination: 'public',
    filename: function (req, file, cb) {
        return cb(null, file.originalname)
    }
});

const upload = multer({ storage: storage })



// const upload = multer({
//   dest:'images',
//   limits:{
//     fileSize:1000000
//   },
//    filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
//     cb(null, file.fieldname + '-' + uniqueSuffix)
//   }
// });

//let upload = multer({ storage }).single('imageProject');




router.get("/", getAllProjects);


//create new Student
router.post("/",AuthPermissionMW,  upload.single('imageProject'),addNewProject);


router.param("id",(req,res,nxt,val)=>{
  //validation of parameter
  if(/^[0-9a-fA-F]{24}$/.test(val)){
      req.id = val;
      nxt();
  }else{
    res.status(400).send("invalid id")
  }
})


//router.get("/:id", getStudentById);

router.delete("/:id", AuthPermissionMW, deleteProjectById);

router.put("/:id", AuthPermissionMW, updateProjectById);


 /* router.all("/",(req,res,nxt)=>{
  console.log("request students all is resieved !!! ")
  nxt()
});
 */



module.exports = router