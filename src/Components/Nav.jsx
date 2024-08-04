import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { navLinks } from "../Data";
import { Link, NavLink } from "react-router-dom";
const Nav = () => {
  const [openSideb, isOpenSideb] = useState(false);
  const linksRef = useRef(null);

  const toggleButton = () => {
    isOpenSideb(!openSideb);
    if (linksRef.current) {
      if (linksRef.current.classList.contains("-translate-x-full")) {
        linksRef.current.classList.remove("hidden");

        setTimeout(() => {
          linksRef.current.classList.remove("-translate-x-full");
          linksRef.current.classList.add("translate-x-0");
        }, 100);
      } else {
        linksRef.current.classList.remove("translate-x-0");
        linksRef.current.classList.add("-translate-x-full");
        setTimeout(() => {
          linksRef.current.classList.add("hidden");
        }, 100);
      }
    }
  };

  return (
    <nav className="px-4 py-2 bg-blue-500 flex   text-white justify-between items-center">
      <Link
        to="/"
        className="text-xl font-bold    cursor-pointer order-2 md:order-1"
      >
        LernWeg
      </Link>
      <button
        onClick={toggleButton}
        className="md:hidden  order-1 md:order-2  "
      >
        {openSideb ? (
          <FaTimes className="h-11 w-6" />
        ) : (
          <FaBars className=" h-11 w-6" />
        )}
      </button>

      <ul
        ref={linksRef}
        className={` md:flex md:space-x-3 bg-gray-100 order-3 z-10 text-blue-400 absolute top-16  md:static w-full md:w-auto  md:bg-transparent  left-0 duration-200 transition-transform md:z-auto md:text-white -translate-x-full md:translate-x-0 `}
      >
        {navLinks.map((nlink) => {
          const { id, url, name } = nlink;
          return (
            <li
              key={id}
              className="transition-all text-black  md:text-gray-200  cursor-pointer md:bg-transparent md:hover:text-gray-50 hover:text-blue-400  md:hover:bg-transparent   hover:bg-blue-100 p-2 hover:pl-5  "
            >
              <NavLink
                to={url}
                className={({ isActive }) =>
                  `block ${
                    isActive
                      ? "md:underline md:underline-offset-8 md:decoration-white md:text-white md:decoration-2 "
                      : ""
                  }`
                }
              >
                {name[0].toUpperCase() + name.slice(1)}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
