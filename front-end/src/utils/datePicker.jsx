import { useState } from "react";

const ResponsiveDatePickers = () => {
  return (
    <>
      <div>
        <label htmlFor="" className="text-gray-900 text-[10px]">
          Date of Birth
        </label>
        <input
          type="date"
          className="w-full border-b-2 focus:outline-none focus:ring-0 border-gray-300 text-gray-400"
        />
      </div>
    </>
  );
};
export default ResponsiveDatePickers;
