import React from "react";
import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import {BsCreditCard2Front} from "react-icons/bs";
import {BiServer} from "react-icons/bi";
import {MdWeb} from "react-icons/md";
import {motion} from "framer-motion";
const FeachersSection = () => {
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

  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.section
      initial={{opacity: 0, y: "-150px"}}
      whileInView={{opacity: 1, y: "-250px"}}
      transition={{duration: 0.3}}
      className="flex flex-col items-center gap-40 bg-[#161515] py-20 px-8 md:px-20 xl:px-40 w-full z-40"
    >
      <div className="flex justify-center md:flex-row flex-col  gap-20 lg:gap-40  xl:gap-60 w-full">
        <div className="flex flex-col gap-10 w-full">
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl flex items-center gap-2 w-full">
              - <p className="text-sm text-gray-400">contact</p>
            </h6>
            <p className="md:text-xl lg:text-3xl w-full">
              Any Type Of Query & Discusstion.
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
        <div className="flex flex-col gap-20 w-full">
          <p className="md:text-xl lg:text-3xl w-full">
            You cant use ip creativity, the more you use, more you have in your
            signifant mind
          </p>

          <div className="flex items-center gap-20 md:gap-40">
            <div className="flex items-center gap-6 text-sm">
              <span className="md:text-2xl lg:text-5xl text-[#e2c006]">+1</span>
              Years of Experiance
            </div>
            <div className="flex items-center gap-6 text-sm">
              <span className="md:text-2xl lg:text-5xl text-[#e2c006]">
                +12
              </span>
              Awards
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="container flex justify-center flex-wrap md:flex-nowrap gap-10 md:gap-4 lg:gap-10 items-center"
        variants={container}
        initial="hidden"
        whileInView="visible"
      >
        <motion.button
          variants={item}
          autoFocus
          className="item flex flex-col justify-end items-start bg-[#1d1d1d] w-80 h-80 hover:bg-[#e2c006] hover:text-black font-bold focus:bg-[#e2c006] focus:text-black"
        >
          <div className="flex items-start gap-4 p-8">
            <BsCreditCard2Front size={30} />
            <p className="text-xl">Frontend Development</p>
          </div>
        </motion.button>
        <motion.button
          variants={item}
          className="item flex flex-col justify-end items-start bg-[#1d1d1d] w-80 h-80 hover:bg-[#e2c006] hover:text-black font-bold focus:bg-[#e2c006] focus:text-black"
        >
          <div className="flex items-start gap-4 p-8">
            <BiServer size={30} />
            <p className="text-xl">Backend Development</p>
          </div>
        </motion.button>
        <motion.button
          variants={item}
          className="item flex flex-col justify-end items-start bg-[#1d1d1d] w-80 h-80 hover:bg-[#e2c006] hover:text-black font-bold focus:bg-[#e2c006] focus:text-black"
        >
          <div className="flex items-start gap-4 p-8">
            <MdWeb size={30} />
            <p className="text-xl">Full Stack Development</p>
          </div>
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

export default FeachersSection;
