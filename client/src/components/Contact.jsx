import {Link} from "react-router-dom";
import {AiOutlineArrowRight} from "react-icons/ai";
import {motion} from "framer-motion";
import {useState} from "react";
import * as api from "../api/index";
const Contact = () => {
  const [formData, setFormData] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const res = await api.sendEmailMessage(formData);
    //console.log(res.data);
  };

  return (
    <motion.section
      id="contact"
      initial={{opacity: 0, y: "-150px"}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5}}
      className="flex justify-center md:flex-row flex-col gap-20 lg:gap-40 xl:gap-60 px-8 md:px-20 xl:px-40 w-full mt-40"
    >
      <div className="flex flex-col gap-10 w-full">
        <div className="flex flex-col gap-2">
          <h6 className="text-2xl flex items-center gap-2 w-full">
            - <p className="text-sm text-gray-400">contact</p>
          </h6>
          <p className="md:text-xl lg:text-3xl w-full">
            Got a project Let's talk.
          </p>
        </div>
        <p className="text-xs w-full">
          if you have any type of query & discusstion send to me on my email
        </p>
        <Link className="flex items-center gap-6 text-[#e2c006] underline">
          mahmoudalmoukhtar@gmail.com
          <AiOutlineArrowRight
            color="#e2c006"
            className="border-b-[1px] border-[#e2c006]"
          />
        </Link>
      </div>
      <div className="flex flex-col gap-10 w-full">
        <p className="md:text-xl lg:text-3xl w-full">
          Estimate your project?
          <br />
          let me know here
        </p>
        <form className="flex flex-col gap-2">
          <input
            id="name"
            type="text"
            className="text-xl font-semibold w-full py-6 px-2 text-black"
            placeholder="what's your name?"
            onChange={e => setFormData({...formData, name: e.target.value})}
          />
          <input
            id="email"
            type="text"
            className="text-xl font-semibold w-full py-6 px-2 text-black"
            placeholder="Your fancy email"
            onChange={e => setFormData({...formData, email: e.target.value})}
          />
          <textarea
            id="message"
            onChange={e => setFormData({...formData, message: e.target.value})}
            type="text"
            className="text-xl font-semibold w-full py-6 px-2 text-black"
            placeholder="Tell me about your project"
          />
          <button
            className="bg-[#e2c006] p-2 rounded w-full text-black font-semibold"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
