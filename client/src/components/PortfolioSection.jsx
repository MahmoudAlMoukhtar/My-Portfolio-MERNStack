import React from "react";
import {AiOutlineArrowRight} from "react-icons/ai";
import {Link} from "react-router-dom";
import {motion, useTransform, useViewportScroll} from "framer-motion";

const PortfolioSection = () => {
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
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      className="container flex flex-wrap justify-between items-center px-8 md:px-20 xl:px-40 gap-10 mb-40"
    >
      <motion.div variants={item} className="flex flex-col gap-16 item">
        <div className="flex flex-col gap-2">
          <h6 className="text-2xl flex items-center gap-2 w-full">
            - <p className="text-sm text-gray-400">portfolio</p>
          </h6>
          <p className="text-3xl w-full">
            All Creative Works Selected projects.
          </p>
        </div>
        <p className="text-xs w-full">
          Show recently my work in web design and web development
        </p>
        <Link
          to={"/portfolio"}
          className="flex items-center gap-6 text-[#e2c006] underline"
        >
          Explore more
          <AiOutlineArrowRight
            color="#e2c006"
            className="border-b-[1px] border-[#e2c006]"
          />
        </Link>
      </motion.div>
      <a href="https://e-commer-mernstack-front.vercel.app/" target="blank">
        <motion.div variants={item} className="item">
          <img
            alt="project"
            src="/ecommerce-furni.png"
            className="w-[400px] rotate-[-4deg] rounded cursor-pointer"
          />
        </motion.div>
      </a>

      <a href="https://speaker-landing-page.vercel.app/" target="blank">
        <motion.div variants={item} className="item">
          <img
            alt="project"
            src="/speaker-landing-page.png"
            className="w-[400px] rotate-[-4deg] rounded cursor-pointer"
          />
        </motion.div>
      </a>
      <a href="https://abaia-ecomerce-frontend.vercel.app/" target="blank">
        <motion.div variants={item} className="item">
          <img
            alt="project"
            src="/abaya.png"
            className="w-[400px] rotate-[-4deg] rounded cursor-pointer"
          />
        </motion.div>
      </a>
    </motion.div>
  );
};

export default PortfolioSection;
