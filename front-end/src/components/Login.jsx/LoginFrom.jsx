import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useLoginContext } from "../../context/userDetailsContext/userContext";
import axios from "axios";

function LoginFrom() {
  const navigator = useNavigate();
  const [loginUser, setLoginUser] = useState({});

  const handleUserLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/app/login",
        loginUser,
        { withCredentials: true }
      );
      setLoginUser(res.data);
      console.log("hello");

      localStorage.setItem("user", JSON.stringify(res.data));
      navigator("/");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  return (
    <>
      <div className="border border-gray-300 p-10 rounded-md">
        <div className="text-6xl text-purple-700 font-semibold text-center h-20">
          Login
        </div>
        <div className="pt-8">
          <form
            action=""
            className="flex flex-col gap-8"
            onSubmit={handleUserLogin}
          >
            <div className="flex items-center gap-3 ">
              <FaUser className="text-2xl text-gray-700" />
              <input
                type="text"
                placeholder="Enter Your UserName..."
                className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-96"
                name="username"
                value={loginUser.username}
                onChange={handleLoginInputChange}
                required
              />
            </div>
            <div className="flex items-center gap-3 ">
              <RiLockPasswordFill className="text-2xl text-gray-700" />
              <input
                type="password"
                placeholder="Enter Your Password..."
                className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-96"
                name="password"
                value={loginUser.password}
                onChange={handleLoginInputChange}
                required
              />
            </div>
            <div className="flex 600 justify-between">
              <div class="flex items-center">
                <input
                  id="remember_me"
                  name="remember_me"
                  type="checkbox"
                  className="h-4 w-4 focus:ring-0 focus:ring-offset-0 bg-transparent uppercase tracking-wider text-[#5D4037] font-semibold cursor-pointer"
                />
                <label
                  for="remember_me"
                  class="ml-2 cursor-pointer select-none block  text-gray-900"
                >
                  Remember me
                </label>
              </div>
              <p className="hover:text-purple-500 text-purple-700 cursor-pointer">
                Forget Your Password ?
              </p>
            </div>
            <div className="flex justify-center gap-5">
              <button type="submit" class="button">
                <span class="fold"></span>

                <div class="points_wrapper">
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                </div>

                <span class="inner">
                  <svg
                    class="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Login
                </span>
              </button>
              <button
                type="button"
                class="button"
                onClick={() => navigator("/register")}
              >
                <span class="fold"></span>

                <div class="points_wrapper">
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                  <i class="point"></i>
                </div>

                <span class="inner">
                  <svg
                    class="icon"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2.5"
                  >
                    <polyline points="13.18 1.37 13.18 9.64 21.45 9.64 10.82 22.63 10.82 14.36 2.55 14.36 13.18 1.37"></polyline>
                  </svg>
                  Register
                </span>
              </button>
            </div>
          </form>
          <div class="mt-6">
            <div class="relative">
              <div class="absolute inset-0 flex items-center">
                <div class="w-full border-t border-gray-300"></div>
              </div>
              <div class="relative flex justify-center text-sm">
                <span class="px-2 bg-gray-100 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div class="mt-6 grid grid-cols-3 gap-3">
              <div>
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img
                    class="h-5 w-5"
                    src="https://www.svgrepo.com/show/512120/facebook-176.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img
                    class="h-5 w-5"
                    src="https://www.svgrepo.com/show/513008/twitter-154.svg"
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a
                  href="#"
                  class="w-full flex items-center justify-center px-8 py-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                >
                  <img
                    class="h-6 w-6"
                    src="https://www.svgrepo.com/show/506498/google.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginFrom;
