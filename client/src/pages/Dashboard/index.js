import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import ItemProjectsDashpoard from '../../components/ItemDashboard'


const DashboardPage = ({projects}) => {
  return (
    <div className="flex flex-col gap-16 w-full items-center bg-white text-black z-40 p-8">
      <nav className="flex justify-start bg-slate-800 text-white w-full gap-2 p-2">        
        <Link
          to={"/dashboard/AddProject"}
          className="bg-white p-1 text-black font-semibold"
        >
          Add Project
        </Link>
      </nav>
      <div className="w-[100%] flex flex-col justify-center gap-6">
        <h1 className="text-center">Projects:</h1>
        <div className="flex flex-col gap-6">
          {projects.map(item => (
            <ItemProjectsDashpoard
              key={item._id}
              project={item}
              
            />
          ))}
        </div>
      </div>
    </div>
  );
};


function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps)(DashboardPage);
