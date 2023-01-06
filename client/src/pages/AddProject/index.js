import {connect} from "react-redux";
import ProjectForm from "../../components/ProjectForm";
import {startAddProjectAction} from "../../redux/actions/projectsActions";

const AddProject = ({uid,addProject}) => {
  return (
    <div className="bg-white text-black p-2">
      <h1>Add Project</h1>
      <ProjectForm
        onSubmit={project => {
          addProject(project, uid);
        }}
      />
    </div>
  );
};
function mapStateToProps(state) {
  return {
    uid: state.auth.uid
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addProject: (project,uid) => dispatch(startAddProjectAction(project,uid)),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
