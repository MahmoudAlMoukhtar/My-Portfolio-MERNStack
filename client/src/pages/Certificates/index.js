import React from "react";
import {SiPluralsight, SiLinkedin, SiUdemy} from "react-icons/si";
import {TbCertificate} from "react-icons/tb";
import {AiOutlineArrowRight} from "react-icons/ai";
import {motion} from "framer-motion";
import {Link} from "react-router-dom";

export const Certificate = ({children, link}) => {
  return (
    <motion.a
      href={`https://my-portfolio-mern-stack.vercel.app/api/images/${link}`}
      className="flex gap-2 items-start text-md focus:bg-[#e2c006] focus:text-black  hover:text-black hover:bg-[#e2c006] p-2 rounded-lg"
      target="blank"
    >
      <div>
        <TbCertificate size={20} />
      </div>
      {children}
    </motion.a>
  );
};
const CertificatesPage = ({page}) => {
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
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="flex justify-center  flex-wrap md:flex-nowrap items-start gap-8 h-full w-full bg-[#161515] py-40 px-8 md:px-20 xl:px-40"
    >
      {!page && (
        <div className="flex flex-col items-center text-center justify-center md:items-start md:text-start md:justify-start gap-16 ">
          <div className="flex flex-col gap-2">
            <h6 className="text-2xl flex items-center gap-2 w-full">
              - <p className="text-sm text-gray-400">Certificates</p>
            </h6>
            <p className="text-3xl w-full">
              All my certificates in web development
            </p>
          </div>
          <p className="text-xs w-full">
            Show recently my awards in web design and web development
          </p>
          <Link
            to="/certificates"
            className="flex items-center gap-6 text-[#e2c006] underline"
          >
            Explore more
            <AiOutlineArrowRight
              color="#e2c006"
              className="border-b-[1px] border-[#e2c006]"
            />
          </Link>
        </div>
      )}
      <div className="flex flex-col justify-center items-center sm:items-start flex-wrap gap-4 lg:gap-4 sm:flex-row  text-md md:text-xl w-full">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container w-80"
        >
          <li
            initial={{y: "100px", zIndex: 1000}}
            whileInView={{y: 0, zIndex: 1000}}
            transition={{type: "spring", duration: 1, bounce: 0.3}}
            className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-[#e2c006] p-2 rounded mb-2"
          >
            <SiPluralsight />
            PluralSight
          </li>
          <div className="text-[15px] w-full flex flex-col gap-2">
            <Certificate link="React The Big Picture.png.png">
              React: The Big Picture
            </Certificate>
            <Certificate link="React 17 Getting Started.png">
              React 17: Getting Started
            </Certificate>
            <Certificate link="Managing React State.jpg">
              Managing React State
            </Certificate>
            <Certificate link="Designing React 17 Components.jpg">
              Designing React 17 Components
            </Certificate>
            <Certificate link="Server Rendering React 16 Components.png">
              Server Rendering React 16 Components
            </Certificate>
            <Certificate link="Git The Big Picture.png">
              Git: The Big Picture
            </Certificate>
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container w-80"
        >
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-[#e2c006] p-2 rounded mb-2">
            <SiLinkedin />
            Linkedin learning
          </li>
          <div className="w-full text-[15px] flex flex-col gap-2">
            <Certificate link="Programming Foundations Fundamentals.png">
              Programming Foundations: Fundamentals
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/html-essential-training-4">
              HTML Essential Training
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/programming-foundations-databases-2">
              Programming Foundations: Databases
            </Certificate>
            <Certificate link="https://www.linkedin.com/learning/succeeding-in-web-development-full-stack-and-front-end">
              Succeeding in Web Development
            </Certificate>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container w-80"
        >
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-[#e2c006] p-2 rounded mb-2">
            <SiUdemy />
            Udemy
          </li>
          <div className="w-full text-[15px] flex flex-col gap-2">
            <Certificate link="The Modern JavaScript Bootcamp.png">
              The Modern JavaScript Bootcamp
            </Certificate>
            <Certificate link="The Complete React Developer Course(w Hooks and Redux).jpg">
              The Complete React Developer Course(w/ Hooks and Redux)
            </Certificate>
          </div>
        </motion.div>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="container w-80"
        >
          <li className="w-full flex gap-2 items-center justify-between font-bold text-center text-black bg-[#e2c006] p-2 rounded mb-2">
            <SiUdemy />
            Mahara-Tech
          </li>
          <div className="w-full text-[15px] flex flex-col gap-2">
            <Certificate link="The Complete Node.js Course (RESTful Web Services with Node.js,Express, and MongoDB).png">
              The Complete Node.js Course (RESTful Web Services with Node.js,
              Express, and MongoDB)
            </Certificate>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default CertificatesPage;
