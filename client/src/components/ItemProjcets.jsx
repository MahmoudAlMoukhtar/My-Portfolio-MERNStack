import React from "react";
import {motion} from "framer-motion";
const ItemProjcets = ({p}) => {
  //console.log("projec",p);
  const {
    title,
    description,
    category,
    image,
    imageProject,
    demoLink,
    githubLink,
  } = p;
  const item = {
    hidden: {y: 50, opacity: 0},
    visible: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <motion.div variants={item} className="item">
      <div className="flex flex-col justify-center gap-2 w-[300px] sm:w-[400px] shadow-xl shadow-black p-2 z-40 bg-[#161515] hover:scale-105 transtion duration-200 itemProjects">
        <img
          src={image}
          alt=""
          className="w-[100%] max-h-[200px] itemProjects"
        />
        <div className="flex flex-col gap-2 w-[100%] items-center">
          <h2 className="text-gray-400">{title}</h2>
          <p className="text-xs">{description}</p>
          <div className="flex gap-2 mt-4">
            <a
              href={demoLink}
              className=" bg-[#e2c006] text-black font-semibold rounded p-1 text-center itemProjects"
              target="blank"
            >
              Demo
            </a>
            <a
              href={githubLink}
              className=" bg-[#e2c006] text-black font-semibold rounded p-1 itemProjects"
              target="blank"
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ItemProjcets;

/*
 */
