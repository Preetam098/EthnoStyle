import React, { useState, useEffect, memo } from "react";
import { Button } from "../../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import SimpleReactValidator from "simple-react-validator";

import { updateProfile } from "../../../Redux/actions/authAction";

const UserInfo = () => {
  const getUserData = JSON.parse(localStorage.getItem("User"));
  const dispatch = useDispatch("");
  const [update, setUpdate] = useState({});
  const validate = new SimpleReactValidator({});
  const [error, setError] = useState("");
  const [isEditMode, setisEditMode] = useState(false);
  const [userInfo, setUserInfo] = useState({
    _id: getUserData._id,
    username: getUserData ? getUserData.username : "",
    email: getUserData ? getUserData.email : "",
    mobileNo: getUserData ? getUserData.mobileNo : "",
    dob: getUserData ? getUserData.dob : "",
  });

  const handelInput = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    setError({ ...update, [e.target.name]: " " });
  };

  const handleSubmit = () => {
    if (validate.allValid()) {
      const callBack = () => {
        localStorage.setItem("User", JSON.stringify(userInfo));
        setisEditMode(false);
      };
      dispatch(updateProfile(userInfo, callBack));
    } else {
      validate.showMessages();
      setError(validate.errorMessages);
    }
  };

  return (
    <React.Fragment>
      <div className="dark:border-neutral-700 bg-white dark:bg-neutral-800 orderdetails-sec">
        <div className="space-y-2 sm:space-y-8 ">
          <div className="flex-content-between">
            <h2 className="text-2xl font-semibold">User Info</h2>
          </div>
          <div className="container lg:mb-32 mt-5 pb-5">
            <div className="w-1/2 dark:bg-neutral-900">
              <div className="w-full mx-auto">
                <div className="flex items-center ">
                  <label className="w-full block text-neutral-800">
                    Username
                  </label>
                  <input
                    onChange={handelInput}
                    type="text"
                    value={userInfo.username ? userInfo.username : ""}
                    name="username"
                    placeholder="example_01"
                    className="mt-1 rounded-2xl text-[#2b79c2] p-2 w-full "
                    disabled={!isEditMode}
                    style={isEditMode ? { border: "2px solid #2b79c2" } : {}}
                  />
                </div>
                

                <div className="text-right w-11/12">
                  {validate.message("username", userInfo?.username, "required")}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">
                      {error?.username}
                    </p>
                  )}
                </div>

                <div className="flex items-center my-4 ">
                  <label className="w-full block ">Email Address</label>
                  <input
                    onChange={handelInput}
                    type="email"
                    name="email"
                    readOnly={true}
                    value={userInfo.email ? userInfo.email : ""}
                    disabled={!isEditMode}
                    placeholder="example@.com"
                    className={
                      isEditMode
                        ? "mt-1 rounded-2xl text-[#2b79c2] p-2 w-full"
                        : " mt-1 rounded-2xl text-[#2b79c2] p-2 w-full "
                    }
                    style={isEditMode ? { border: "2px solid #2b79c2" } : {}}
                  />
                </div>


                <div className="text-right w-11/12">
                  {validate.message("email", userInfo?.email, "required")}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">
                      {error?.email}
                    </p>
                  )}
                </div>


                <div className="flex items-center my-4">
                  <label className="w-full block ">MobileNo</label>
                  <input
                    onChange={handelInput}
                    type="number"
                    name="mobileNo"
                    value={userInfo.mobileNo ? userInfo.mobileNo : ""}
                    disabled={!isEditMode}
                    placeholder="+123 456 789"
                    className="mt-1 rounded-2xl text-[#2b79c2] p-2 w-full"
                    style={isEditMode ? { border: "2px solid #2b79c2" } : {}}
                  />
                </div>

                <div className="text-right w-11/12">
                  {validate.message("mobile No", userInfo?.mobileNo, "required")}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">
                      {error?.mobileNo}
                    </p>
                  )}
                </div>


                <div className="flex items-center mb-4">
                  <label className="w-full block  ">Date Of Birth</label>
                  <input
                    onChange={handelInput}
                    type="date"
                    value={userInfo.dob ? userInfo.dob : ""}
                    disabled={!isEditMode}
                    name="dob"
                    placeholder="mm/dd/yyyy"
                    className="mt-1 rounded-2xl text-[#2b79c2] p-2 w-full "
                    // value={formData.mobile}
                    // onChange={handlePhoneNumber}
                    // disabled={!formData.isEditMode}
                    style={isEditMode ? { border: "2px solid #2b79c2" } : {}}
                  />
                </div>
                <div className="text-right w-11/12">
                  {validate.message("date of birth ", userInfo?.dob, "required")}
                  {error && (
                    <p className="text-red-500 my-2 text-sm">
                      {error?.dob}
                    </p>
                  )}
                </div>


              

                <div className="my-5">
                  {!isEditMode ? (
                    <Button
                      className="my-5 rounded-xl w-full "
                      name="Request To Edit"
                      onClick={() => setisEditMode(true)}
                    ></Button>
                  ) : (
                    <div className="flex gap-4 justify-between">
                      <Button
                        name="Cancel"
                        className="rounded-xl  w-full"
                        onClick={() => setisEditMode(false)}
                        type="Submit"
                      ></Button>
                      <Button
                        type="submit"
                        className=" rounded-xl w-full "
                        name="Update"
                        onClick={handleSubmit}
                      >
                        {" "}
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
