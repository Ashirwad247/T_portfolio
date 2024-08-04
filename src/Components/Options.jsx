import React, { useRef, useState } from "react";
import Cards from "./Cards";
const Options = () => {
  const [option, setOption] = useState(0);
  const [category, setCategory] = useState("mini-projects");
  return (
    <div className="options">
      <div className="buttons flex items-center justify-center gap-2  ">
        <button
          onClick={() => {
            setOption(0);
            setCategory("mini-projects");
          }}
          className=" px-4 py-2 rounded-lg  text-white bg-blue-500   hover:bg-blue-400 shadow-lg drop-shadow-md "
        >
          Mini Projects
        </button>
        <button
          onClick={() => {
            setOption(1);
            setCategory("blogs");
          }}
          className=" px-4 py-2 rounded-lg  text-white bg-blue-500   hover:bg-blue-400 shadow-lg drop-shadow-md "
        >
          Blogs
        </button>
        <button
          onClick={() => {
            setOption(2);
            setCategory("skills");
          }}
          className=" px-4 py-2 rounded-lg  text-white bg-blue-500   hover:bg-blue-400 shadow-lg drop-shadow-md "
        >
          My Skills
        </button>
      </div>
      <div className="px-36 py-6">
        <Cards option={option} toChangecategory={category} />
      </div>
    </div>
  );
};

export default Options;
