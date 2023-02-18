import React from "react";
import {AiFillLinkedin, AiFillGithub, AiFillFacebook} from "react-icons/ai";
import {BiHomeSmile} from "react-icons/bi";
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-8 text-center w-[100%] text-3xl py-20">
      <a href="/#">
        <BiHomeSmile size={40} color={"#e2c006"} className="cursor-pointer" />
      </a>
      <p className="text-xs w-[300px] md:w-[400px] border-[1px]  p-4 shadow-xl shadow-black z-[80]">
        <span className="font-semibold">Thanks for scrolling. </span>thats all
        folks
      </p>
      <span className="h-2 bg-[#e2c006] w-16"></span>
      <ul className="flex gap-4 justify-center w-[100%]">
        <a
          href="https://www.linkedin.com/in/mahmoud-al-moukhtar-a00604229/"
          target="blank"
          className="invisible md:visible md:static absolute"
        >
          <AiFillLinkedin size={20} />
        </a>
        <a
          href="https://github.com/MahmoudAlMoukhtar?tab=repositories"
          target="blank"
          className="invisible md:visible md:static absolute"
        >
          <AiFillGithub size={20} />
        </a>
        <a
          href="https://github.com/MahmoudAlMoukhtar?tab=repositories"
          target="blank"
          className="invisible md:visible md:static absolute"
        >
          <AiFillFacebook size={20} />
        </a>
      </ul>
    </div>
  );
};

export default Footer;
