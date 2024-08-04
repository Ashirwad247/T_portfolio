import React, { useState } from "react";
import { optionsArray } from "../optionsData";
import { Link } from "react-router-dom";

const Cards = ({ option, toChangecategory }) => {
  let style1 =
    " bg-white hover:bg-blue-50 hover:text-blue-400 transition-color  duration-75 ";

  let style2 =
    "  bg-white text-blue-400  hover:text-black  transition-color duration-75 ";

  return (
    <div className="rounded-sm   flex  flex-col gap-3  justify-between items-center md:grid md:grid-flow-col md:justify-start md:gap-6">
      {optionsArray
        .filter((item) => item.category === toChangecategory)
        .map((op) => {
          const { id, title, imageurl, desc, url } = op;
          return (
            <Link
              to={url}
              className={`${option === 2 ? style2 : style1}+'  w-full   '`}
              key={id}
            >
              <div className="p-4 rounded-md border  border-black flex items-center flex-row-reverse justify-evenly md:flex-col shadow-md hover:shadow-xl  transition-shadow duration-75 animate-fade-in">
                {imageurl && (
                  <div>
                    <img
                      src={imageurl}
                      className=" w-full h-32 object-cover  md:h-32"
                      alt="title"
                    />
                  </div>
                )}
                <div>
                  <h2>{title}</h2>
                  <p className="text-sm text-gray-500">{desc}</p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Cards;
