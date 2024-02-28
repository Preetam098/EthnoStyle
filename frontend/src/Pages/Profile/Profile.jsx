import React, { useState } from "react";
import Layout from "../../Layout/Index";
import Dashboard from "./Tabs/Dashboard";
import MyProfile from "./Tabs/UserInfo";
import ChangePassword from "./Tabs/ChangePassword";
import MyBookings from "./Tabs/Bookings";
import { FaPhoneAlt, FaUser, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BiSolidDashboard } from "react-icons/bi";
import User from "../../Assets/User.png";
import UserInfo from "./Tabs/UserInfo";

const SiderBar = [
  {
    id: 1,
    name: "Dashboard",
    icon: <BiSolidDashboard className="w-5 h-5" />,
  },
  {
    id: 2,
    name: "My Profile",
    icon: <FaUser className="w-5 h-5" />,
  },
  {
    id: 3,
    name: "My Booking",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-6 h-6 "
      >
        <path
          fill-rule="evenodd"
          d="M7.502 6h7.128A3.375 3.375 0 0 1 18 9.375v9.375a3 3 0 0 0 3-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 0 0-.673-.05A3 3 0 0 0 15 1.5h-1.5a3 3 0 0 0-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6ZM13.5 3A1.5 1.5 0 0 0 12 4.5h4.5A1.5 1.5 0 0 0 15 3h-1.5Z"
          clip-rule="evenodd"
        />
        <path
          fill-rule="evenodd"
          d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 0 1 3 20.625V9.375Zm9.586 4.594a.75.75 0 0 0-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 0 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.116-.062l3-3.75Z"
          clip-rule="evenodd"
        />
      </svg>
    ),
  },
  {
    id: 4,
    name: "Change Password",
    icon: <FaLock className="w-5 h-5" />,
  },
];

const UserProfile = ({handleName}) => {
  console.log("nnnnn" , handleName)
  const userData = JSON.parse(localStorage.getItem("User"));
  const [activeTab, setActiveTab] = useState(1);
  const [name, setName] = useState("");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const SidebarItemComponent = ({ item, activeTab, handleTabClick }) => (
    <li
      onClick={() => handleTabClick(item.id)}
      key={item.id}
      className={`${
        activeTab === item.id
          ? "m-1 bg-blue-400 cursor-pointer  text-white px-3 rounded-md py-2 flex items-center gap-2"
          : "m-1 text-black px-3 rounded-md cursor-pointer py-2 flex items-center gap-2"
      }`}
    >
      {item.icon}
      {item.name}
    </li>
  );

  const handleNameChange = (name) => {
    setName(name);
  };

  return (
    <React.Fragment>
      <div className="nc-CommonLayoutProps">
        <div className="dark:border-neutral-700 bg-white dark:bg-neutral-800">
          <div className="">
            <div className="mt-10 md:my-2 space-y-6">
              <div className="flex items-center gap-4 dark:bg-neutral-300 p-3 ">
                <img
                  className=" w-36 h-36 bg-gray-400 rounded-full"
                  src={User}
                ></img>
                <div>
                  <h4 className="text-3xl font-semibold">
                    Hello{" "}
                    <span className="capitalize text-primary">
                      {userData?.username }{" "}
                    </span>
                    Welcome
                  </h4>
                  <div className="flex items-center gap-2 text-sm">
                    <FaPhoneAlt className="text-[#2b79c2]" />
                    {userData?.mobileNo} <p></p>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <MdEmail className=" w-4 h-4 text-[#2b79c2]" />
                    <p>{userData?.email} </p>
                  </div>
                </div>
              </div>

              <div className=" border-b-[2px] border-gray-300 opacity-50 "></div>
              <div className="flex gap-4">
                <div className="border-r-[2px]  w-1/5 mt-0 space-y-0  overflow-hidden  border-gray-300">
                  <div className="w-full py-3 dark:ring-neutral-700 bg-white dark:bg-neutral-900  ">
                    <div className="sidebar-menus border-darkOrange-100">
                      <ul className="flex flex-col text-white">
                        {SiderBar.map((item, index) => (
                          <SidebarItemComponent
                            key={item.id}
                            item={item}
                            activeTab={activeTab}
                            handleTabClick={handleTabClick}
                          />
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="w-4/5 py-6">
                  <div className="content">
                    {activeTab === 1 && <Dashboard />}
                    {activeTab === 2 && <MyProfile />}
                    {activeTab === 3 && <MyBookings />}
                    {activeTab === 4 && <ChangePassword />}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout(UserProfile);
