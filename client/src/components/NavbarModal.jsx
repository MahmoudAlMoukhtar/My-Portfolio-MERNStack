import React from "react";
import {NavLink} from "react-router-dom";
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
import {HiMenuAlt3} from "react-icons/hi";
const NavbarModal = ({setOpenModalNavbar, isAdmin, isAuth}) => {
  return (
    <div
      id="modal-nav"
      class="flex fixed inset-0 bg-opacity-75 transition-opacity flex flex-col justify-center items-center z-50	text-black"
    >
      <div
        onClick={() => setOpenModalNavbar(false)}
        class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity flex flex-col justify-center items-center"
      ></div>
      <div
        id="content-modal-Collaps"
        class="bg-white flex flex-col gap-y-4 fixed z-10 top-0 left-0 border w-60 min-h-full shadow-2xl animate__animated animate__fadeInLeft"
      >
        <div id="header-cart" class="my-2 w-100">
          <button
            onClick={() => setOpenModalNavbar(false)}
            class="font-bold ml-4"
          >
            X
          </button>
        </div>
        <header className="flex flex-col justify-center items-center w-[100%] py-4 gap-8">
          <nav className="flex flex-col justify-center  items-center gap-6 md:gap-8 w-[100%] sm:w-1/3">
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
                  : undefined
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
                  : undefined
              }
              to="/portfolio"
            >
              Portfolio
            </NavLink>
            <NavLink
              className={({isActive}) =>
                isActive
                  ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
                  : undefined
              }
              to="/certificates"
            >
              Certificates
            </NavLink>

            {isAuth && isAdmin && (
              <NavLink
                className={({isActive}) =>
                  isActive
                    ? "text-black font-semibold sm:font-bold bg-gray-400 rounded sm:px-4 sm:py-2  px-2"
                    : undefined
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
            )}
          </nav>
          <ul className="flex flex-col gap-4 justify-center items-center  w-[100%] sm:w-1/3">
            <a
              href="https://www.linkedin.com/in/mahmoud-al-moukhtar-a00604229/"
              target="_blank"
            >
              <AiFillLinkedin size={30} />
            </a>
            <a
              href="https://github.com/MahmoudAlMoukhtar?tab=repositories"
              target="_blank"
            >
              <AiFillGithub size={30} />
            </a>
            <a href="">
              <AiFillFacebook size={30} />
            </a>
          </ul>
        </header>
      </div>
    </div>
  );
};

export default NavbarModal;
