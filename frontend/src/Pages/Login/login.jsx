import React, { useState } from "react";
import toast, { ToastBar, Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authLogin } from "../../Redux/actions/authAction";
import logo from "../../Assets/Logo.svg";

const Login = () => {
  const [logindata, setLoginData] = useState({});
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const res = useSelector((state) => state.authReducer);
  console.log("res", res);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setLoginData({ ...logindata, [e.target.name]: e.target.value });
  };
  console.log("fomr", logindata);

  const handleSubmit = () => {
    const { email, password } = logindata;
    if (!email && !password) {
      toast.error("Please Fill The Fields ");
    } else {
      const callBack = () => {
        navigate("/dashboard");
      };
      dispatch(authLogin(logindata, callBack));
    }
  };

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img src={logo} className="mx-auto"></img>
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-[#2B79C2]">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
                value={logindata?.email}
                onChange={handleChange}
                required
                className="block w-full rounded-md border-0 p-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block my-1 text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
              <div className="text-sm">
                <a
                  href="/forgot-password"
                  className="font-semibold text-[#2B79C2] hover:underline hover:text-[#2d69a0]"
                >
                  Forgot password ?
                </a>
              </div>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={logindata?.password}
                onChange={handleChange}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 p-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="text-center my-4">
            <button
              onClick={handleSubmit}
              type="submit"
              className="flex w-full justify-center rounded-md bg-[#2B79C2] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#2d69a0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2  "
            >
              Sign In
            </button>

            <Link to="/register">
              <p className="py-2 ">
                Create an Account ?{" "}
                <a className="underline text-[#2B79C2]">Sign in</a>
              </p>
            </Link>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
