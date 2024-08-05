import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { email, socialLinks } from "../Data";
import { FaFileLines } from "react-icons/fa6";

const Contact = () => {
  return (
    <div className="flex items-center flex-col p-12 h-screen ">
      <div className="flex justify-center">
        <h1 className="relative text-3xl">Contact Me</h1>
        <span className="w-1/3 h-[3px] border-2 border-gray-400 rotate-180 absolute top-[145px]"></span>
      </div>
      <div>
        <p
          className="py-4
        "
        >
          Hello you can contact me through this email and the links.
        </p>
      </div>
      <div>
        <ul className="flex flex-col text-2xl ">
          <li>
            <div className="contactDiv flex  md:order-1 items-center justify-center  gap-2 cursor-default">
              <AiOutlineMail />
              Contact : {email}
              <div></div>
            </div>
          </li>
          <li>
            {socialLinks.map((link) => {
              const { id, name, url, icon } = link;
              return (
                <a
                  href={url}
                  key={id}
                  className="flex items-center hover:text-blue-500 gap-2 justify-center cursor-pointer"
                >
                  {icon} {name}
                </a>
              );
            })}
          </li>
          <li className="text-center">
            <a
              href="src/assets/My resume v2.pdf"
              className="hover:text-blue-500 flex justify-center gap-2 items-center"
              target="_blank"
            >
              <FaFileLines />
              View My resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
