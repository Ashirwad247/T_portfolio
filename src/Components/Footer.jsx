import React from "react";
import { email, socialLinks } from "../Data";
import { AiOutlineMail } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className=" flex md:flex-row  md:items-center flex-col md:justify-around bg-blue-500 w-full text-md text-white px-2 py-4 bottom-0  cursor-default gap-3  md:gap-0 ">
      <div className="socialDiv flex justify-center md:order-3">
        <div>
          <div>
            <h2 className=" relative font-bold text-xl">Social links</h2>
            <span className=" absolute  w-14 border-b-2 border-white"></span>
          </div>
          <div className="flex flex-col md:flex-row md:gap-3 ">
            {socialLinks.map((link) => {
              const { id, url, icon, name } = link;
              return (
                <div key={id} className="py-2   cursor-pointer">
                  <a href={url} className="flex items-center justify-evenly">
                    {icon}
                    <h3 className="md:hidden">{name}</h3>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="contactDiv flex  md:order-1 items-center justify-center  gap-2 cursor-default">
        <AiOutlineMail />
        Contact : {email}
        <div></div>
      </div>
      <div className="flex justify-center md:order-2 md:mr-32">
        <h1>&copy;{new Date().getFullYear()} LernWeg. All rights Reserved.</h1>
      </div>
    </footer>
  );
};

export default Footer;
