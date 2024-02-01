import React, { useCallback, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import logo  from "../../Assets/Logo.svg";
import {registerAction} from "../../Redux/actions/authAction";
import toast from "react-hot-toast";






export default function Login() {
  const [formValues, setformValues] = useState({});
  const navigate = useNavigate("");
  const dispatch = useDispatch("");

  const handleChange = (e) => {
    setformValues({ ...formValues, [e.target.name]: e.target.value });
  };

  console.log(formValues);

  const handleSubmit = () => {
    const { email, password } = formValues;
    if (!email && !password) {
      toast.error("Please Fill The Fields ");
    } else {
      const callBack = () => {
        navigate("/");
      };
      dispatch(registerAction(formValues, callBack));
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} className="mx-auto">
          </img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create A New Account
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:mx-auto sm:w-full sm:max-w-2xl gap-4">
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Username
              </label>
            </div>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                value={formValues.username}
                onChange={handleChange}
                autoComplete="current-username"
                required
                className="block w-full rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

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
                type="email"
                autoComplete="email"
                value={formValues?.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="mobileNo"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Mobile No
              </label>
            </div>
            <div className="mt-2">
              <input
                id="mobileNo"
                name="mobileNo"
                type="mobileNo"
                value={formValues?.mobileNo}
                onChange={handleChange}
                autoComplete="current-mobileNo"
                required
                className="block w-full rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={formValues?.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="dob"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of Birth
              </label>
            </div>
            <div className="mt-2">
              <input
                id="dob"
                name="dob"
                type="date"
                value={formValues?.dob}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="flex items-end pb-1 justify-between">
            <button
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-[#2B79C2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2d69a0]  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 "
            >
              Sign in
            </button>
          </div>
        </div>
        <div className=" my-2 text-center">
          <p>
            Already Have an Account ?{" "}
            <a href="/" className="underline text-[#2B79C2]">
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
