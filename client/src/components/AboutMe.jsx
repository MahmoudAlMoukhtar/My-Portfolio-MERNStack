import React from "react";
import {motion} from "framer-motion";
import {GoLocation} from "react-icons/go";
import {HiOutlineMail} from "react-icons/hi";
import {HiDevicePhoneMobile} from "react-icons/hi2";
import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiCsharp,
  SiRedux,
  SiMaterialui,
  SiLinkedin,
  SiFacebook,
  SiGithub,
} from "react-icons/si";
import {FaReact, FaNodeJs} from "react-icons/fa";
import {DiCss3Full, DiFirebase} from "react-icons/di";
import {IoLogoFirebase} from "react-icons/io5";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";

const Skill = ({skillName, Icon}) => {
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.button
      variants={item}
      className="items popover__wrapper  p-4 bg-[#161515] rounded-md"
    >
      {Icon}

      <div class="popover__content">
        <p class="popover__message text-xl font-bold">{skillName}</p>
      </div>
    </motion.button>
  );
};

const AboutMe = () => {
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

  return (
    <div className="flex flex-col gap-10 px-8 md:px-20 xl:px-40 py-10 mb-40">
      <motion.section className="flex sm:flex-wrap lg:flex-nowrap  justify-center xl:items-start items-center gap-10 w-full">
        <img
          src="/Untitled-1فثسف.jpg"
          className="w-full rounded max-w-[450px]"
          alt="mahmoud profile with yellow background"
        />

        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl flex items-center gap-2 w-full">
              - <p className="text-sm text-gray-400">My skills</p>
            </h6>
            <p className="md:text-xl lg:text-3xl w-full">
              All my skills in web development
            </p>
          </div>
          <p className="text-xs w-full">
            if you have any type of query & discusstion send to me on my email
          </p>
          <a
            href="#contact"
            className="flex items-center gap-6 text-[#e2c006] underline"
          >
            mahmoudalmoukhtar@gmail.com
            <AiOutlineArrowRight
              color="#e2c006"
              className="border-b-[1px] border-[#e2c006]"
            />
          </a>
        </div>
      </motion.section>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="container flex justify-center flex-wrap gap-10  w-full"
      >
        <Skill
          skillName={"Html"}
          Icon={
            <SiHtml5
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"CSS"}
          Icon={
            <DiCss3Full
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Javascript"}
          Icon={
            <SiJavascript
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"React.js"}
          Icon={
            <FaReact
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Redux"}
          Icon={
            <SiRedux
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Firebase"}
          Icon={
            <DiFirebase
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Node.js"}
          Icon={
            <FaNodeJs
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Express.js"}
          Icon={
            <SiExpress
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Mongodb"}
          Icon={
            <SiMongodb
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"C#"}
          Icon={
            <SiCsharp
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Tailwind.css"}
          Icon={
            <SiTailwindcss
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
        <Skill
          skillName={"Material Ui"}
          Icon={
            <SiMaterialui
              size={70}
              className="cursor-pointer hover:text-[#e2c006]"
            />
          }
        />
      </motion.div>
    </div>
  );
};

export default AboutMe;
