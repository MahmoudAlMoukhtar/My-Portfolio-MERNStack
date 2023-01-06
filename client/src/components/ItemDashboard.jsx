import React from "react";
import { connect } from "react-redux";
import {MdOutlineRemoveCircle} from "react-icons/md";
import { startRemoveProjectAction } from "../redux/actions/projectsActions";
import { Link } from "react-router-dom";

const ItemProjectsDashpoard = ({project, removeProject,uid}) => {
  const {image, title, _id:id} = project;
  //console.log(id);
  return (
    <div className="flex justify-between items-center">
      <Link
        to={`/dashboard/edit/${id}`}
        className="flex justify-between items-center"
      >
        <img src={image} alt="" className="w-40 itemProjects" />
        <p>{title}</p>
      </Link>
      <button className="p-2" onClick={() => removeProject(id,uid)}>
        <MdOutlineRemoveCircle size={30} />
      </button>
    </div>
  );
};


function mapDispatchToProps(dispatch) {
  return {
    removeProject: (id,uid) => dispatch(startRemoveProjectAction(id,uid)),
  };
}
function mapStateToProps(state) {
  return {
    projects: state.projects,
    uid: state.auth.uid,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemProjectsDashpoard);
