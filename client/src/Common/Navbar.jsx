import {Link, NavLink} from "react-router-dom";
import {connect} from "react-redux";
import {startLogout} from "../redux/actions/auth";
import {BiHomeSmile} from "react-icons/bi";
import {motion} from "framer-motion";
const Navbar = () => {
  return (
    <motion.header
      initial={{y: "-100px", zIndex: 1000}}
      whileInView={{y: 0, zIndex: 1000}}
      transition={{type: "spring", duration: 1, bounce: 0.3}}
      className="flex flex-col items-center gap-4 sm:gap-0 sm:flex-row sm:items-center justify-between px-8 md:px-20 xl:px-40 py-4 w-full"
    >
      <BiHomeSmile size={40} color={"#e2c006"} className="cursor-pointer" />
      <nav className="flex items-center gap-8">
        <NavLink
          className={({isActive}) =>
            isActive
              ? "font-semibold text-white border-b-4 border-[#e2c006]  py-2 text-md md:text-xl"
              : "font-semibold text-gray-400 py-2 hover:border-b-4 hover:text-white hover:border-[#e2c006] transtion duration-100 text-md md:text-xl"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "font-semibold text-white border-b-4 border-[#e2c006]  py-2 text-md md:text-xl"
              : "font-semibold text-gray-400 py-2 hover:border-b-4 hover:text-white hover:border-[#e2c006] transtion duration-100 text-md md:text-xl"
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "font-semibold text-white border-b-4 border-[#e2c006]  py-2 text-md md:text-xl"
              : "font-semibold text-gray-400 py-2 hover:border-b-4 hover:text-white hover:border-[#e2c006] transtion duration-100 text-md md:text-xl"
          }
          to="/certificates"
        >
          Certificates
        </NavLink>
      </nav>
    </motion.header>
  );
};

function mapStateToProps(state) {
  return {
    isAuth: state.auth.uid,
    isAdmin: state.auth.isAdmin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startLogout: () => dispatch(startLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
