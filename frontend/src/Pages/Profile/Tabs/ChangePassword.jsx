import React, { useState, useEffect } from "react";
import { Button } from "../../../Components/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetPassword } from "../../../Redux/actions/authAction";
import toast, { ToastBar, Toaster } from "react-hot-toast";

const ChangePassword = () => {
  // const getUserData = localStorage.getitem("User");
  const User = JSON.parse(localStorage.getItem("User"));
  const [userData, setUserData] = useState({});
  const dispatch = useDispatch("");

  console.log("user", User._id);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { oldPassword, newPassword, confirmPassword } = userData;
    if (!oldPassword || !newPassword) {
      toast.error("Plase Fill All Requires Fields");
    } else {
      dispatch(resetPassword({ _id: User._id, newPassword, oldPassword }));
    }
  };
  const handleInput = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };
  return (
    <section>
      <div className="container">
        <div className="">
          <h2 className="text-2xl font-semibold">Change Password</h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="flex flex-col mt-4">
            <label htmlFor="oldPassword" className="text-darkOrange-300">
              Current Password
            </label>
            <input
              type="password"
              name="oldPassword"
              id="oldPassword"
              className="mt-1 rounded-2xl p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
              value={userData.oldPassword}
              onChange={handleInput}
            />
          </div>

          <div className="flex flex-col mt-4">
            <label htmlFor="newPassword" className="text-darkOrange-300">
              New Password
            </label>
            <input
              type="password"
              name="newPassword"
              id="newPassword"
              className="mt-1 rounded-2xl p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
              value={userData.newPassword}
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col mt-4">
            <label htmlFor="confirmPassword" className="text-darkOrange-300">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              className="mt-1 rounded-2xl p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
              value={userData.confirmPassword}
              onChange={handleInput}
            />
          </div>
        </div>

        <div className="my-4">
          <Button
            className="rounded-xl hover:underline"
            name="Change Password"
            onClick={handleSubmit}
          ></Button>
        </div>
      </div>
      <Toaster />
    </section>
  );
};

export default ChangePassword;
