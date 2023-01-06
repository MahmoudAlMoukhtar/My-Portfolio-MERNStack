const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        uid: action.uid,
        isAdmin:action.isAdmin
      };
    case "REGISTERE":
      return {
        uid: action.uid,
        userName:action.name,        
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};

export default authReducer;
