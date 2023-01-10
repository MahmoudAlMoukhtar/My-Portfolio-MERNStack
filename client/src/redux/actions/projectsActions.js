import * as api from "../../api/index";

export const startAddProjectAction = (projectData, uid) => async dispatch => {
  try {
    const {data} = await api.createProject(projectData, uid);
    dispatch({type: "ADD_PROJECT", payload: data});
  } catch (err) {
    console.log("Error action add proj");
  }
};

export const startRemoveProjectAction = (id, uid) => async dispatch => {
  const {data} = await api.deleteProject(id, uid);
  dispatch({type: "REMOVE_PROJECT", payload: id});
};

export const editProject = (id, updates) => ({
  type: "UPDATE_PROJECT",
  id,
  updates,
});

export const startEditProject = (id, updates, uid) => {
  return async dispatch => {
    const response = await fetch(
      `https://my-portfolio-mern-stack-ldcc2skza-mahmoudalmoukhtar.vercel.app/api/projects/${id}`,
      {
        method: "PUT", // *GET, POST, PUT, DELETE, etc.
        cache: "no-cache",
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": uid,
        },
        body: JSON.stringify(updates),
      }
    );

    if (response.ok) {
      //console.log(updates)
      dispatch(
        editProject({
          id,
          updates,
        })
      );
    } else {
      console.log("error in add proj");
      console.log(response.ok);
    }
  };
};

export const startSetProjectsAction = () => async dispatch => {
  try {
    const {data} = await api.fetchProjects();
    dispatch({type: "SET_PROJECTS", payload: data});
  } catch (err) {
    console.log("err from action fetch");
  }
};
