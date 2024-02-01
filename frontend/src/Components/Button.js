import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Button = ({ name , className }) => {
  return (
    <button className={`${className} flex justify-center items-center bg-[#2b79c2] px-4 py-2 text-white`}>
      {name} {<MdOutlineKeyboardArrowRight />}
    </button>
  );
};


