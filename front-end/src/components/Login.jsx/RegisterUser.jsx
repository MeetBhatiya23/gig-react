import React, { useState } from "react";
import SideDegine from "./SideDegine";
import { FaAudioDescription, FaUser } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaMapLocationDot, FaSquarePhone } from "react-icons/fa6";
import SearchableSelector from "../../utils/SearchableSelector";
import ResponsiveDatePickers from "../../utils/datePicker";
import { RiLockPasswordFill } from "react-icons/ri";
import PhotoUpload from "../../utils/UserPhotoUpload";
import { useLoginContext } from "../../context/userDetailsContext/userContext";
function RegisterUser() {
  const { handleSubmit, handleInputChange, user } = useLoginContext();
  const [pageScroller, setPageScroller] = useState(0);

  return (
    <>
      <div className=" lg:grid lg:w-full lg:grid-cols-2 px-5 sm:px-0">
        <div className=" responsive-display justify-between hidden lg:flex">
          <SideDegine />
        </div>
        {/* -----------------LOGIN Form----------------- */}

        <div className="bg-white flex flex-col items-center justify-center md:px-10 w-full h-screen">
          <div
            className={`${
              pageScroller === 0
                ? "lg:border lg:border-gray-300 p-2 sm:p-10 lg:w-full rounded-md"
                : "p-2 sm:p-10 lg:w-full"
            }`}
          >
            <div className="lg:text-6xl text-5xl text-purple-700 font-semibold text-center h-20">
              Register
            </div>
            <div className="pt-4 lg:pt-8">
              <form
                action=""
                className="flex flex-col gap-5"
                onSubmit={handleSubmit}
              >
                {pageScroller === 0 && (
                  <>
                    <div className="flex items-center gap-3 ">
                      <FaUser className="text-2xl text-gray-700" />
                      <input
                        type="text"
                        placeholder="Enter Your Full Name..."
                        className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-full "
                        required
                        name="fullname"
                        value={user.fullname}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="flex items-center gap-3 ">
                      <MdMarkEmailUnread className="text-2xl text-gray-700" />
                      <input
                        type="email"
                        placeholder="Enter Your Email..."
                        className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-full"
                        name="email"
                        value={user.email}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div className="flex items-center gap-3 ">
                      <FaSquarePhone className="text-2xl text-gray-700" />
                      <input
                        type="tel"
                        placeholder="Enter Your Phone Number..."
                        className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-full"
                        name="phone"
                        value={user.phone}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="" className="text-gray-900 text-[10px]">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full border-b-2 focus:outline-none focus:ring-0 border-gray-300 text-gray-400"
                        name="dob"
                        value={user.dob}
                        onChange={handleInputChange}
                        required
                      />
                    </div>
                    <SearchableSelector />

                    <div className="flex 600 justify-between">
                      <div className="flex items-center">
                        <input
                          id="remember_me"
                          name="remember_me"
                          type="checkbox"
                          className="h-4 w-4 focus:ring-0 focus:ring-offset-0 bg-transparent uppercase tracking-wider text-[#5D4037] font-semibold cursor-pointer"
                          required
                        />
                        <label
                          for="remember_me"
                          className="ml-2 cursor-pointer select-none block  text-gray-900"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>
                    <div class="mt-5 max-w-lg container flex justify-end mx-auto">
                      <div class="flex !justify-end w-full">
                        <button
                          type="button"
                          class="bg-gray-800 text-white rounded-md py-2 border-l border-gray-200 hover:bg-purple-700 hover:text-white px-3"
                          onClick={() => {
                            if (pageScroller < 1) {
                              setPageScroller(pageScroller + 1);
                            }
                          }}
                        >
                          <div class="flex flex-row align-middle">
                            <span class="mr-2">Next</span>
                            <svg
                              class="w-5 ml-2"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  </>
                )}
                {pageScroller === 1 && (
                  <div className="w-full">
                    <div className="border p-5 relative mt-10">
                      <div className="absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-1/2">
                        <PhotoUpload />
                      </div>
                      <div className="flex flex-col mt-16 gap-5 ">
                        <div className="flex items-center gap-3 ">
                          <FaUser className="text-2xl text-gray-700" />
                          <input
                            type="text"
                            placeholder="Enter Your User Name..."
                            className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-full "
                            required
                            name="username"
                            value={user.username}
                            onChange={handleInputChange}
                          />
                        </div>
                        <div className="flex items-center gap-3 ">
                          <RiLockPasswordFill className="text-2xl text-gray-700" />
                          <input
                            type="password"
                            placeholder="Enter Your Password..."
                            className="p-2 focus:outline-none focus:ring-0 border-b-2 border-gray-300 w-full"
                            name="password"
                            value={user.password}
                            onChange={handleInputChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mt-5">
                        <FaAudioDescription className="text-2xl text-gray-700" />
                        <textarea
                          className="w-full focus:outline-none  focus:ring-0 border-b-2 border-gray-300"
                          placeholder="Enter Your Description..."
                          name="desc"
                          value={user.desc}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="flex 600 pt-6 pl-5  justify-between">
                        <div className="flex items-center">
                          <input
                            id="remember_me"
                            name="remember_me"
                            type="checkbox"
                            className="h-4 w-4 focus:ring-0 focus:ring-offset-0 bg-transparent uppercase tracking-wider text-[#5D4037] font-semibold cursor-pointer"
                          />
                          <label
                            for="remember_me"
                            className="ml-2 cursor-pointer select-none block  text-gray-900"
                          >
                            Remember me
                          </label>
                        </div>
                      </div>
                      <div class="mt-5 max-w-lg container flex justify-evenly mx-auto">
                        <div class="flex justify-between w-full">
                          <button
                            type="button"
                            class="bg-gray-800 text-white rounded-md border-r border-gray-100 py-2 hover:bg-purple-700 hover:text-white px-3"
                            onClick={() => {
                              if (pageScroller > 0) {
                                setPageScroller(pageScroller - 1);
                              }
                            }}
                          >
                            <div class="flex flex-row align-middle">
                              <svg
                                class="w-5 mr-2"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z"
                                  clip-rule="evenodd"
                                ></path>
                              </svg>
                              <p class="ml-2">Back</p>
                            </div>
                          </button>
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
                              Register
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterUser;
