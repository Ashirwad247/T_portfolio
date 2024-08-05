import React, { useState } from "react";
import { optionsArray } from "../optionsData";
import { Link, useNavigate } from "react-router-dom";

const Cards = ({ option, toChangecategory }) => {
  const navigate = useNavigate();
  let style1 =
    " bg-white rounded-md hover:shadow-xl hover:shadow-blue-100 hover:-translate-y-2 transition-transform ease-in-out duration-500 ";

  let style2 =
    "  bg-white text-blue-400  hover:text-black  transition-color duration-300 ";

  return (
    <div className="   flex  flex-col gap-3  justify-between items-center md:grid md:grid-flow-col duration  md:justify-start md:gap-6">
      {optionsArray
        .filter((item) => item.category === toChangecategory)
        .map((op) => {
          const { id, title, imageurl, desc, url, longDesc, projectUrl } = op;
          return (
            <div
              onClick={() => {
                navigate(`/${url}`, {
                  state: { title, longDesc, imageurl, projectUrl },
                });
              }}
              className={`${
                option === 2 ? style2 : style1
              }+'  w-full cursor-pointer  '`}
              key={id}
            >
              <div className="p-4 rounded-lg  flex items-center translate-y  flex-row-reverse justify-evenly md:flex-col shadow-xl hover:shadow-lg  transition-shadow duration-75 animate-fade-in">
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
            </div>
          );
        })}
    </div>
  );
};

export default Cards;
