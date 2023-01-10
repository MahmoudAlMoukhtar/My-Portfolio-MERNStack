const projectsReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PROJECT":
      return [...state, action.payload];

    case "REMOVE_PROJECT":
      const newProjects = state.filter(item => item._id !== action.payload);
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
      return action.payload;
    default:
      return state;
  }
};

export default projectsReducer;
