//import database from "../../firebase/firebase";
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
 export const addProjectAction = project => ({
   type: "ADD_PROJECT",
   project,
 });


 export const startAddProjectAction =  (projectData,uid) => {
   return async dispatch => {
    //  const {
    //    title = "",
    //    description = "",
    //    demoLink = "",
    //    githubLink = "",
    //  } = projectData;
      
    //  const project = {title, description, demoLink, githubLink};
      return axios.post("https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/projects/", projectData,{
      
      headers: {
        //'content-type': 'multipart/form-data',
        //'content-type': undefined,
        'x-auth-token': uid
      }
}).then((res)=>{
      // console.log(res)
      let formDataObject = Object.fromEntries(projectData.entries());
      return dispatch(
            addProjectAction({   
             id:uuidv4(),
              ...formDataObject,
            })
          );

      }).catch((err)=>{
        console.log("Error action add proj")
        //console.log(err)         
      })   
   }
  
};




  export const removeProjectAction = id => ({
    type: "REMOVE_PROJECT",
    id,
  });

export const startRemoveProjectAction = (id,uid) => {
  return async dispatch => {
    return fetch(`https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/projects/${id}`, {
     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
     cache: "no-cache",
     headers: {
       'Content-Type': 'application/json',
       'x-auth-token':uid,
     },
   }).then(()=>{
        dispatch(
            removeProjectAction(id)
          );
   }).catch((err)=>{
    console.log("error in add proj")
    console.log(err)
   })
   

    
  
  };
};
export const editProject = (id, updates) => ({
  type: "UPDATE_PROJECT",
  id,
  updates,
});

export const startEditProject = (id, updates,uid) => {
  return async dispatch => {
    const response = await fetch(`https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/projects/${id}`, {
     method: 'PUT', // *GET, POST, PUT, DELETE, etc.
     cache: "no-cache",
     headers: {
       'Content-Type': 'application/json',
       'x-auth-token':uid,
     },
     body: JSON.stringify(updates) 
   })
   
   if(response.ok){
    //console.log(updates)
     dispatch(
            editProject({   
             id,
             updates,
            })
          );
   }else{
    console.log("error in add proj")
    console.log(response.ok)
  }    
  };
};

export const setProjectsAction = projects => ({
  type: "SET_PROJECTS",
  projects,
});

export const startSetProjectsAction = () => {
  return dispatch => {
    return fetch('https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/projects')
    .then((response) => response.json())
    .then((projects)=>{
      //console.log(projects)
      dispatch(setProjectsAction(projects));
    })
  };
};
