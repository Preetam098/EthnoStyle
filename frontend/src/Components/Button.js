import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export const Button = ({ name , className , onClick }) => {
  return (
    <button  onClick={onClick}  className={`${className} hover:underline flex justify-center items-center bg-[#2b79c2] px-4 py-2 text-white`}>
      {name} {<MdOutlineKeyboardArrowRight />}
    </button>
  );
};


