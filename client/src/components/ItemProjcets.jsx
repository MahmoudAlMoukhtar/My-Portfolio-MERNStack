const ItemProjcets = ({p}) => {
  //console.log("projec",p);
  const {title, description, category, image,imageProject, demoLink, githubLink} = p;
  
  return (
    <div className="flex flex-col justify-center gap-2 w-[300px] sm:w-[400px] shadow-lg p-2 z-40 bg-slate-800  hover:scale-105 transtion duration-200 itemProjects">
      <img src={`https://my-portfolio-mern-stack.vercel.app/api/images/${image}`} alt="" className="w-[100%] max-h-[200px] itemProjects" />
      <div className="flex flex-col gap-2 w-[100%] items-center">
        <h2 className="text-gray-400">{title}</h2>
        <p className="text-xs">{description}</p>
        <a
          href={demoLink}
          className=" bg-slate-600 text-center itemProjects"
          target="_blank"
        >
          Demo
        </a>
        <a href={githubLink} className=" bg-slate-600 itemProjects" target="_blank">
          Github
        </a>
      </div>
    </div>
  );
};

export default ItemProjcets;

/*
 */
