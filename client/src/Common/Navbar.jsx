import {Link, NavLink} from "react-router-dom";
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
import {HiMenuAlt3} from "react-icons/hi";
import {connect} from "react-redux";
import {startLogout} from "../redux/actions/auth";

const Navbar = ({
  isAuth,
  isAdmin,
  startLogout,
  setUserAuth,
  setOpenModalNavbar,
}) => {
  return (
    <header className="flex  justify-center items-center w-[100%] py-4 gap-4 flex-row sm:justify-between sm:gap-0">
      <nav className="flex justify-start items-center gap-4 md:gap-8 w-[100%] sm:w-1/3">
        <button onClick={() => setOpenModalNavbar(true)}>
          <HiMenuAlt3 size={30} />
        </button>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded  invisible md:visible absolute py-2 md:static px-1 md:px-2 md:py-4 text-sm md:text-md"
              : "invisible md:visible md:static absolute"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded  invisible md:visible absolute py-2 md:static px-1 md:px-2 md:py-4 text-sm md:text-md"
              : "invisible md:visible md:static absolute"
          }
          to="/portfolio"
        >
          Portfolio
        </NavLink>
        <NavLink
          className={({isActive}) =>
            isActive
              ? "text-black font-semibold sm:font-bold bg-gray-400 rounded invisible md:visible absolute md:static py-2  px-1 md:px-2 md:py-4 text-sm md:text-md"
              : "invisible md:visible md:static absolute"
          }
          to="/certificates"
        >
          Certificates
        </NavLink>

        {isAuth && isAdmin && (
          <NavLink
            className={({isActive}) =>
              isActive
                ? "text-black font-semibold sm:font-bold bg-gray-400 rounded invisible md:visible absolute md:static py-2  px-1 md:px-2 md:py-4 text-sm md:text-md"
                : "invisible md:visible md:static absolute"
            }
            to="/dashboard"
          >
            Dashboard
          </NavLink>
        )}
      </nav>
      <div className="text-4xl w-1/3 flex justify-center hidden absolute sm:flex sm:static hidden md:static">
        M
      </div>
      <ul className="flex gap-4 justify-end w-[100%] sm:w-1/3">
        <a
          href="https://www.linkedin.com/in/mahmoud-al-moukhtar-a00604229/"
          target="_blank"
          className="invisible md:visible md:static absolute"
        >
          <AiFillLinkedin size={30} />
        </a>
        <a
          href="https://github.com/MahmoudAlMoukhtar?tab=repositories"
          target="_blank"
          className="invisible md:visible md:static absolute"
        >
          <AiFillGithub size={30} />
        </a>
        <a href="" className="invisible md:visible md:static absolute">
          <AiFillFacebook size={30} />
        </a>
      </ul>
    </header>
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

/* 

{
          !isAuth ?
        <Link to="/loggin" className="bg-white p-1 text-black font-bold rounded">
          Loggin
        </Link>:
        <Link to="/" className="bg-white p-1 text-black font-bold rounded" onClick={()=>{

          startLogout();
          setUserAuth(false)
        }
      }>
          Loggout
        </Link>}
        {!isAuth && 
          <Link to="/registere" className="bg-white p-1 text-black font-bold rounded">
          Registere
        </Link>}
        

*/
