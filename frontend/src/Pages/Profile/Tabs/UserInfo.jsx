import React, { useState, useEffect, memo } from "react";
import { Button } from "../../../Components/Button";
import { useDispatch, useSelector } from "react-redux";
import { updateProfile } from "../../../Redux/actions/authAction";

const UserInfo = () => {
  const dispatch = useDispatch("");
  const [update, setUpdate] = useState({});

  const handelInput = (e) => {
    setUpdate({ ...update, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const callBack = () => {
      console.log("hho rhhah ");
    };
    dispatch(updateProfile(update, callBack));
  };

  console.log("update", update);
  return (
    <React.Fragment>
      <div className="dark:border-neutral-700 bg-white dark:bg-neutral-800 orderdetails-sec">
        <div className="space-y-2 sm:space-y-8 ">
          <div className="flex-content-between">
            <h2 className="text-2xl font-semibold">User Info</h2>
          </div>
          <div className="container lg:mb-32 mt-5 pb-5">
            <div className="w-1/2 dark:bg-neutral-900">
              <div className="w-full mx-auto space-y-6 ">
                <div className="flex items-center  mb-4">
                  <label className="w-full block text-neutral-800 dark:text-neutral-200 ">
                    Username
                  </label>
                  <input
                    onChange={handelInput}
                    type="text"
                    value={update.username}
                    name="username"
                    placeholder="example_01"
                    className="mt-1 rounded-2xl  p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
                    // value={formData.firstname}
                    // onChange={handleInputChange}
                    // disabled={!formData.isEditMode}
                    // style={
                    //   !formData.isEditMode ? { border: "0px solid" } : {}
                    // }
                  />
                  <div></div>
                </div>
                <div className="text-right">
                  {/* {errorMessage && (
                      <p className="text-red-500 p-1 text-sm">
                        {errorMessage?.firstname}
                      </p>
                    )} */}
                  {/* {validate.message(
                      "firstname",
                      formData?.firstname,
                      "required"
                    )} */}
                </div>

                <div className="text-right">
                  {/* {validate.message(
                      "lastname",
                      formData?.lastname,
                      "required"
                    )}
                    {errorMessage && (
                      <p className="text-red-500 p-1 text-sm">
                        {errorMessage?.lastname}
                      </p>
                    )} */}
                </div>

                <div className="flex items-center mb-4">
                  <label className="w-full block text-neutral-800 dark:text-neutral-200 ">
                    Email address
                  </label>
                  <input
                    onChange={handelInput}
                    type="email"
                    value={update.email}
                    name="email"
                    placeholder="example@example.com"
                    className="mt-1 rounded-2xl  p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
                    // value={userInfo.email ? userInfo.email : formData?.email}
                    // onChange={handleInputChange}
                    // disabled
                    // style={
                    //   !formData.isEditMode ? { border: "0px solid" } : {}
                    // }
                    // readOnly={true}
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="w-full block text-neutral-800 dark:text-neutral-200 ">
                    MobileNo
                  </label>
                  <input
                    onChange={handelInput}
                    type="number"
                    name="mobileNo"
                    value={update.mobileNo}
                    placeholder="+123 456 789"
                    className="mt-1 rounded-2xl  p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
                    // value={formData.lastname}
                    // onChange={handleInputChange}
                    // disabled={!formData.isEditMode}
                    // style={
                    //   !formData.isEditMode ? { border: "0px solid" } : {}
                    // }
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="w-full block text-neutral-800 dark:text-neutral-200 ">
                    Date Of Birth
                  </label>
                  <input
                    onChange={handelInput}
                    type="date"
                    value={update.dob}
                    name="dob"
                    placeholder="mm/dd/yyyy"
                    className="mt-1 rounded-2xl  p-2 w-full border-2 bg-#2b79c2 focus:outline-none focus:border-[#2b79c2]"
                    // value={formData.mobile}
                    // onChange={handlePhoneNumber}
                    // disabled={!formData.isEditMode}
                    // style={
                    //   !formData.isEditMode ? { border: "0px solid" } : {}
                    // }
                  />
                </div>
                <div className="text-right">
                  {/* {!isValidPhoneNumber && (
                      <p className="text-red-500">
                        Please enter a valid phone number.
                      </p>
                    )} */}
                </div>

                {/* {!formData.isEditMode ? (
                    <ButtonPrimary className="" onClick={handleEditClick}>
                      Request To Edit
                    </ButtonPrimary>
                  ) : (
                    <div className="d-flex my-5">
                      <ButtonPrimary
                        className="w-100 mr-1"
                        onClick={handleCancelClick}
                      >
                        Cancel
                      </ButtonPrimary>
                      <ButtonPrimary
                      onChange={handelInput}  
                      type="submit"
                        className="ml-1 w-100 "
                        onClick={handleSubmit}
                      >
                        Update
                      </ButtonPrimary>
                    </div>
                  )} */}

                <Button
                  type="submit"
                  className="my-5 rounded-xl w-full  "
                  name="Update"
                  onClick={handleSubmit}
                >
                  {" "}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default UserInfo;
