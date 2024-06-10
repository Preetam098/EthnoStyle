import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import Logo from "../../Assets/Logo.svg";
import Web from "../../Assets/webscrappper.png";
import { FaUser } from "react-icons/fa";
import { FaBars } from "react-icons/fa6";

const Header = ({ cart }) => {
  // const cartItems = JSON.parse(localStorage.getItem("bookingCart"));

  const navigate = useNavigate("");
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const handleLogin = () => {
    localStorage.removeItem("AccessToken");
    localStorage.removeItem("User");
    localStorage.removeItem("bookingCart");
    navigate("/");
  };

  return (
    <header className=" bg-white-600 text-md  bg-[#d3e7fa] text-[#2B79C2]">
      <div className="container mx-auto px-2 md:px-6 py-2">
        <div className=" flex  flex-wrap items-center justify-between  ">
          <Link to="/dashboard">
            <div className="flex  items-center">
              <img className="w-20" src={Web}></img>

              <p className="text-xl font-semibold text-[#4d87c9]">
                Web Scrapper
              </p>
            </div>
          </Link>
          {(toggle || window.innerWidth >= 768) && (
            <div className="md:order-1 order-2 md:w-[30rem] w-full">
              <ul className="leading-8  md:flex justify-evenly items-center text-center space-x-3 my-4 lg:flex">
                <li className="">
                  <Link to="/all-products" className="   hover:underline">
                    New Drops
                  </Link>
                </li>

                <li className="">
                  <Link to="/tops" className="  hover:underline">
                    Tops
                  </Link>
                </li>

                <li className="">
                  <Link to="/bottom" className="  hover:underline">
                    Bottom
                  </Link>
                </li>
                <li className="">
                  <Link to="/accessories" className=" hover:underline">
                    Accesssories
                  </Link>
                </li>
              </ul>
            </div>
          )}

          <div className="md:order-2 order-1 flex justify-center items-center flex-shrink-0  lg:flex">
            <Link to="/cart">
              <div class="cart mr-4">
                {/* <span class="count">{cartItems.length  ? cartItems.length : 0}</span> */}
                <FaShoppingCart className="material-icons text-[#2b79c2] w-7 h-8 md:mr-4" />
              </div>
            </Link>

            <Link to="/profile">
              <FaUser className="w-8 h-8 mr-4 border border-[#2b79c2] p-1 rounded-full" />
            </Link>

            <button
              onClick={handleLogin}
              className="hidden md:block  px-6 py-2 font-semibold rounded bg-[#2B79C2] text-white"
            >
              Log in
            </button>
            {/* )} */}

            <button onClick={handleToggle} className="p-4 md:hidden">
              <FaBars />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
