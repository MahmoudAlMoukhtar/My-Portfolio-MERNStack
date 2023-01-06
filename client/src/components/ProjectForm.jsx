import {useState} from "react";
import {connect} from "react-redux";
import {
  startAddProjectAction,
} from "../redux/actions/projectsActions";

const ProjectForm = ({onSubmit, project}) => {
  const [title, setTitle] = useState(project ? project.title : "");
  const [description, setDiscription] = useState(
    project ? project.description : ""
  );
  const [githubLink, setGithubLink] = useState(
    project ? project.githubLink : ""
  );
  const [demoLink, setDemoLink] = useState(project ? project.demoLink : "");
  const [image, setImage] = useState(project ? project.image : "");

const handleSubmit = (e)=>{
e.preventDefault();
        
        onSubmit({
            title,
            description,
            demoLink,
            githubLink,
            image,
          });
        //const formData = new FormData();
        //console.log("fromHandle",image)
        // formData.append('title', title);
        // formData.append('description', description);
        // formData.append('githubLink', githubLink);
        // formData.append('demoLink', demoLink);
        // formData.append('imageProject', image);
        //let formDataObject = Object.fromEntries(formData.entries());
        //onSubmit(formData);        
}

const handleFileUpload = async (e)=>{
  const file = e.target.files[0];
  const base64 = await converToBase64(file)
  setImage(base64);
  console.log("from client",base64)
}
  
  return (
    <form className="flex flex-col gap-4 justify-between items-center text-black" encType='multipart/form-data' onSubmit={handleSubmit}>
      <label className="w-[100%] flex justify-between gap-6 ">
        Title Project
        <input
          type="text"
          placeholder="Title Project"
          onChange={e => setTitle(e.target.value)}
          value={title}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Demo Url Project
        <input
          type="text"
          placeholder="Demo Url"
          onChange={e => setDemoLink(e.target.value)}
          value={demoLink}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Github Url Project
        <input
          type="text"
          placeholder="Github Url"
          onChange={e => setGithubLink(e.target.value)}
          value={githubLink}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        description Project
        <input
          type="text"
          placeholder="description Project"
          onChange={e => setDiscription(e.target.value)}
          value={description}
        />
      </label>
      <label className="w-[100%] flex justify-between gap-6 ">
        Image url Project
        <input
          type='file'         
          name="imageProjecte"
          onChange={handleFileUpload}
          
        />
      </label>
      <input
        type="submit"
        className="bg-black py-2 w-full border-2 border-black rounded hover:bg-black hover:text-white z-60 cursor-pointer shadow-lg"
        value={"Submit"}
      />
      
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    addProjectAction: project => dispatch(startAddProjectAction(project)),
  };
}


const converToBase64 = (file)=>{
return new Promise((resolve, reject)=>{
  const fileReader = new FileReader()
  fileReader.readAsDataURL(file);
  fileReader.onload = ()=>{
    resolve(fileReader.result)
  };
  fileReader.onerror = (error)=>{
    reject(error)
  }
})
}

export default connect(undefined, mapDispatchToProps)(ProjectForm);
/* 
e.preventDefault();
          onSubmit({
            title,
            description,
            demoLink,
            githubLink,
            image,
          });
*/