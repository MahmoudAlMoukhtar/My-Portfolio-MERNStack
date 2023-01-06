import {connect} from "react-redux";
import {Navigate} from "react-router-dom";

const PrivaiteRoute = ({isAuth, isAdmin, children}) => {
  //const user = JSON.parse(localStorage.getItem('user'))
  if (isAuth && isAdmin) {
    return children;
  }
  return <Navigate to="/loggin" replace />;
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.uid,
    isAdmin:state.auth.isAdmin
  };
}

export default connect(mapStateToProps)(PrivaiteRoute);
