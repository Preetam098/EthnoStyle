import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../Assets/Logo.svg";
const Header = () => {
  const navigate = useNavigate("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };
  const handleLogin = () => {
    localStorage.removeItem("AccessToken");
    navigate("/");
  };
  return (
    <header className=" bg-white-600 text-md  bg-[#d3e7fa] text-[#2B79C2]">
      <div className="container mx-auto px-2 md:px-6 py-2">
        <div className=" flex  flex-wrap items-center justify-between  ">
          <Link to="/dashboard">
            <div className="w-48">
              <img src={Logo}></img>
            </div>
          </Link>
          {(toggle || window.innerWidth >= 768) && (
            <div className="md:order-1 order-2 md:w-[30rem] w-full">
              <ul className="leading-8  md:flex justify-evenly items-center text-center space-x-3 my-4 lg:flex">
                <li className="">
                  <a href="/all-products" className="   hover:underline">
                    New Drops
                  </a>
                </li>

                <li className="">
                  <a href="/tops" className="  hover:underline">
                    Tops
                  </a>
                </li>

                <li className="">
                  <a href="/bottom" className="  hover:underline">
                    Bottom
                  </a>
                </li>
                <li className="">
                  <a href="/accessories" className=" hover:underline">
                    Accesssories
                  </a>
                </li>
              </ul>
            </div>
          )}

          <div className="md:order-2 order-1 flex justify-between items-center flex-shrink-0  lg:flex">
            <div>
              <a href="/cart">
                <FaShoppingCart className="w-6 h-6 md:mr-4" />
              </a>
            </div>

            <button onClick={handleToggle} className="p-4 md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-[#2B79C2]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <button
              onClick={handleLogin}
              className="hidden md:block  px-6 py-2 font-semibold rounded bg-[#2B79C2] text-white"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
