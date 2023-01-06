import {useState} from "react";
import {connect} from "react-redux";
import {useParams} from "react-router-dom";
import ProjectForm from "../../components/ProjectForm";
import {startEditProject} from "../../redux/actions/projectsActions";

const EditPage = ({projects, editProject, uid}) => {
  const {id} = useParams();
  //console.log("idEditPAge", id);
  const project = projects.find(p => p._id === id);
  //console.log("project Edit PAge", project);
  return (
    <div className="bg-white p-4">
      <h1>Edit Project</h1>
      <ProjectForm
        project={project}
        onSubmit={project => {
          editProject(id, project,uid);
          //console.log("edit project", project);
        }}
      />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
    uid: state.auth.uid
  };
}


function mapDispatchToProps(dispatch) {
  return {
    editProject: (id, updates,uid) => dispatch(startEditProject(id, updates,uid)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditPage);
