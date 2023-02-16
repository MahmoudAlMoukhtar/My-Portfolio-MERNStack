import ItemProjcets from "../../components/ItemProjcets";
import {connect} from "react-redux";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import {motion} from "framer-motion";
const PortfolioPage = ({projects, numSlice}) => {
  const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const projectsAfterSlice = numSlice
    ? projects.reverse().slice(0, numSlice)
    : projects.reverse();
  if (!projects.length) {
    return (
      <div className="absolute inset-0 mx-[50%] flex items-center justify-cneter">
        <ClimbingBoxLoader />
      </div>
    );
  }
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="flex flex-col justify-center items-center gap-8 h-[100%]"
    >
      <h1 className="text-4xl">PROJECTS</h1>

      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className=" flex justify-center items-center flex-wrap gap-20"
      >
        {projectsAfterSlice.map(p => (
          <ItemProjcets p={p} key={p._id} />
        ))}
      </motion.div>
    </motion.div>
  );
};

function mapStateToProps(state) {
  return {
    projects: state.projects,
  };
}

export default connect(mapStateToProps)(PortfolioPage);
