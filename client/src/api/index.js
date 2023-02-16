import axios from "axios";

//const API = axios.create({baseURL: "http://localhost:3001/api"});
const API = axios.create({
  baseURL: "https://my-portfolio-mern-stack.vercel.app/api/",
  //baseURL: "http://localhost:3001/api",
});

/* API.interceptors.request.use(req => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("profile")).token
    }`;
  }

  return req;
});
 */

//CRUD POSTS
export const fetchProjects = () => API.get("/projects");
export const createProject = (newProject, uid) =>
  API.post("/projects", newProject, {
    headers: {
      "x-auth-token": uid,
    },
  });
export const updateProject = (id, updates) =>
  API.patch(`/projects/${id}`, updates);
export const deleteProject = (id, uid) =>
  API.delete(`/projects/${id}`, {
    headers: {
      "x-auth-token": uid,
    },
  });
//export const likeProject = id => API.patch(`/posts/${id}/likePost`);

//AUTH Operation
export const signin = formData => API.post("/user/signin", formData);
export const signup = formData => API.post("/user/signup", formData);

//email message
export const sendEmailMessage = formData => API.post("/sendEmail", formData);
