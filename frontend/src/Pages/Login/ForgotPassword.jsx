import React, { useState } from "react";
import Logo from "../../Assets/Logo.svg";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authOTP, forgotPassword } from "../../Redux/actions/authAction";
import toast from "react-hot-toast";

const ForgotPassword = () => {
  const navigate = useNavigate("");
  const dispatch = useDispatch("");
  const [showSecondTab, setShowSecondTab] = useState(false);
  const getUserId = useSelector((state) => state?.otpReducer?.data);
  // const userIdString = getUserId.toString();
  const [value, setValue] = useState({
    email: "",
    id: "",
    otp: "",
    newPassword: "",
  });

  console.log("vvvv", value);
  console.log("first", getUserId);
  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleEmailSent = () => {
    const { email } = value;
    const em = {email}
    if (!em) {
      toast.error("Please Enter Email");
    } else {
      const callback = (userId) => {
        setShowSecondTab(true);
        setValue({
          ...value,
          id: userId,
        });
      };
      dispatch(authOTP(em, callback));
    }
  };

  const handleResetPassword = () => {
    const { id, otp, newPassword } = value;
    const data = { id, otp, newPassword };
    if (!data) {
      toast.error("Please Enter Fields");
    } else {
      const callback=()=>{
        navigate('/')
      }
      dispatch(forgotPassword(data , callback));
    
    }
  };

  return (
    <>
      <main className="flex items-center justify-center min-h-screen ">
        <div class="max-w-md  w-full p-6 bg-white rounded-md shadow-md ">
          <img src={Logo} className="mx-auto"></img>
          {showSecondTab ? (
            <>
              <h2 class="text-xl font-semibold text-center mb-6">
                Password Reset
              </h2>
              {/* <!-- OTP Input --> */}
              <div class="mb-4">
                <label
                  for="otp"
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  OTP
                </label>
                <input
                  type="number"
                  id="otp"
                  name="otp"
                  maxLength="4"
                  value={value?.otp}
                  onChange={handleChange}
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter OTP"
                />
              </div>

              {/* <!-- New Password Input --> */}
              <div class="mb-6">
                <label
                  for="newPassword"
                  class="block text-gray-700 text-sm font-bold mb-2"
                >
                  New Password
                </label>
                <input
                  type="password"
                  id="newPassword"
                  value={value?.newPassword}
                  onChange={handleChange}
                  name="newPassword"
                  class="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                  placeholder="Enter new password"
                />
              </div>

              {/* <!-- Submit Button --> */}
              <button
                type="submit"
                onClick={handleResetPassword}
                class="bg-[#2b79c2] w-full text-white py-2 px-4 rounded-md hover:bg-[#2d69a0] focus:outline-none focus:shadow-outline-blue"
              >
                Reset Password
              </button>
            </>
          ) : (
            <>
              <h2 class="text-xl  mb-4 text-center">Enter Email To Send OTP</h2>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    autoComplete="email"
                    value={value?.email}
                    onChange={handleChange}
                    required
                    className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#2b79c2] sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={handleEmailSent}
                className="flex w-full my-4 justify-center rounded-md bg-[#2B79C2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2d69a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
              >
                Sent OTP
              </button>

              <div>
                <a
                  href="/"
                  className="flex items-center text-[#2b79c2] hover:underline"
                >
                  <IoMdArrowRoundBack className="w-4 h-4 " />
                  <span> Back</span>
                </a>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
