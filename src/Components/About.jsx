import React from "react";
import { email, socialLinks } from "../Data";

const About = () => {
  return (
    <div className="flex items-center flex-col p-12 h-screen container mx-auto">
      <div className="flex justify-center">
        <h1 className="relative text-3xl">About Me</h1>
        <span className="w-1/3 h-[3px] border-2 border-gray-400 rotate-180 absolute top-[145px] "></span>
      </div>
      <div>
        <p className="py-4 text-xl  ">
          Hello! I'm Johnson, a B.Tech student in the Computer Science
          Department. I enjoy working on web-based applications and mini
          projects. If you're interested in my work, feel free to explore my
          LinkedIn profile and check out some of my mini projects featured on
          this portfolio website.
          <br></br>
          &nbsp;&nbsp;&nbsp;This web application is built using ReactJS and
          Tailwind CSS, with most of the data being static for now. In the
          future, I plan to transition to a dynamic setup by integrating a
          backend to manage and update the data.<br></br> &nbsp;&nbsp; Outside
          of coding, I enjoy art and sketching, which helps me stay creative and
          inspired.If you’re interested in collaborating or want to discuss
          potential opportunities, feel free to reach out to me via {email} or
          connect with me on &nbsp;
          <a
            href={socialLinks[1]?.url}
            className="underline text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            {socialLinks[1]?.name}
          </a>
          &nbsp;and&nbsp;
          <a
            href={socialLinks[2].url}
            className="underline text-blue-500 hover:text-blue-600 cursor-pointer"
          >
            Github
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default About;
