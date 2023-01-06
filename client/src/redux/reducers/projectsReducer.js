const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.project];

    case "REMOVE_PROJECT":
      const newProjects = state.filter(item => item._id !== action.id)
      return newProjects;
      
    case "UPDATE_PROJECT":
      return state.map(p => {
        if (p.id === action.id) {
          return {...p, ...action.updates};
        } else {
          return p;
        }
      });
    case "SET_PROJECTS":
      return action.projects;
    default:
      return state;
  }
};

export default projectsReducer;
