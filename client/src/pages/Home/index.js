import React from "react";

import {
  AiOutlineArrowRight,
  AiFillLinkedin,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";
import CertificatesPage from "../Certificates";
import FeachersSection from "../../components/FeachersSection";
import PortfolioSection from "../../components/PortfolioSection";
import Contact from "../../components/Contact";
import {motion, AnimatePresence} from "framer-motion";
import AboutMe from "../../components/AboutMe";

const HomePage = () => {
  return (
    <motion.div
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      className="flex flex-col  items-center my-20  w-[100%] translate-y-[-70px] "
    >
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        viewport={{once: true}}
        className="flex flex-col sm:flex-row justify-center w-full px-8 md:px-20 xl:px-40 h-screen sm:h-auto"
      >
        <div className="flex items-start h-full">
          <motion.div
            initial={{x: "-200px", zIndex: 1000}}
            whileInView={{x: 0, zIndex: 1000}}
            transition={{type: "spring", duration: 1, bounce: 0.3}}
            className="flex flex-col gap-8 lg:gap-16 text-start w-[100%] text-3xl"
          >
            <motion.h6
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              exit={{opacity: 0}}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              className="font-bold md:text-5xl lg:text-6xl w-[350px] lg:w-[400px] border-[1px]  p-4 shadow-xl shadow-black z-50 cursor-grab"
            >
              Mahmoud Al Mokhtar
              <span className="text-[60px] font-bold">.</span>
            </motion.h6>
            <span className="h-2 bg-[#e2c006] w-16"></span>
            <ul className="flex gap-4 justify-start w-[100%] mt-14">
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
            <motion.div
              initial={{x: "100px", zIndex: 1000}}
              whileInView={{x: 0, zIndex: 1000}}
              exit={{x: "100px", zIndex: 1000}}
              transition={{type: "spring", duration: 1, bounce: 0.3}}
              className="flex flex-col gap-10 w-full lg:w-1/2 sm:hidden sm:absolute static"
            >
              <div className="flex flex-col items-start gap-6 w-full">
                <p className="text-2xl flex items-center gap-2 w-full">
                  - <p className="text-sm text-gray-400">introduction</p>
                </p>
                <p className="text-xl lg:text-4xl w-full">
                  Web Developer with MERN stack, based in Syria
                </p>
                <p className="text-xs w-full">
                  Hello, I am Mahmoud Al-Mukhtar from Syria, a front-end and
                  back-end web developer with MERN stack, I have enough
                  experience in the field of website development, I have the
                  skills to work on software projects requested by customers on
                  my own or with the team
                </p>
                <a
                  href="http://localhost:3001/api/images/Black%20Blue%20Modern%20Professional%20CV%20Resume%20Template.jpg"
                  target="blank"
                  className="flex items-center gap-6 text-[#e2c006] underline text-sm lg:text-md"
                >
                  Download CV
                  <AiOutlineArrowRight
                    color="#e2c006"
                    className="border-b-[1px] border-[#e2c006]"
                  />
                </a>
              </div>
            </motion.div>
          </motion.div>

          <img
            src="/IMG_20220917_141958_063.png"
            className="min-w-full z-40  translate-x-[-330px] translate-y-[0px] sm:translate-y-[-220px]"
            alt="mahmoud"
          />
        </div>
        <motion.div
          initial={{x: "100px", zIndex: 1000}}
          whileInView={{x: 0, zIndex: 1000}}
          exit={{x: "100px", zIndex: 1000}}
          transition={{type: "spring", duration: 1, bounce: 0.3}}
          className="flex flex-col gap-10 w-full lg:w-1/2 sm:flex sm:static hidden absolute"
        >
          <div className="flex flex-col items-start gap-6 w-full">
            <p className="text-2xl flex items-center gap-2 w-full">
              - <p className="text-sm text-gray-400">introduction</p>
            </p>
            <p className="md:text-xl lg:text-4xl w-full">
              Web Developer with MERN stack, based in Syria
            </p>
            <p className="text-xs w-full">
              Hello, I am Mahmoud Al-Mukhtar from Syria, a front-end and
              back-end web developer with MERN stack, I have enough experience
              in the field of website development, I have the skills to work on
              software projects requested by customers on my own or with the
              team
            </p>
            <a
              href="http://localhost:3001/api/images/Black%20Blue%20Modern%20Professional%20CV%20Resume%20Template.jpg"
              target="blank"
              className="flex items-center gap-6 text-[#e2c006] underline text-sm lg:text-md"
            >
              Download CV
              <AiOutlineArrowRight
                color="#e2c006"
                className="border-b-[1px] border-[#e2c006]"
              />
            </a>
          </div>
        </motion.div>
      </motion.div>
      <FeachersSection />
      <AboutMe />
      <PortfolioSection />
      <CertificatesPage />
      <Contact />
    </motion.div>
  );
};

export default HomePage;
