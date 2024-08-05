import React from "react";
import { useLocation } from "react-router-dom";

const Deflogs = () => {
  const location = useLocation();
  const { title, imageurl, longDesc, projectUrl } = location.state || "";
  console.log(title);
  console.log(projectUrl);
  if (!title) {
    return <Error />;
  }

  return (
    <div className="h-screen">
      <div className="heading px-4 py-2 flex items-center justify-center w-full">
        <h1 className="md:text-2xl text-xl">{title}</h1>
      </div>
      <div className="px-2 py-4 flex items-center justify-center">
        <img src={imageurl} className="object-cover w-2/3" alt="one" />
      </div>
      <p className="md:px-8 md:py-4  px-16 py-2 text-center text-md md:text-xl ">
        {longDesc}{" "}
        <a
          href={projectUrl}
          className="text-blue-500 underline hover:text-blue-600 "
        >
          here.
        </a>
      </p>
    </div>
  );
};

export default Deflogs;
