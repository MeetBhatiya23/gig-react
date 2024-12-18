import React, { useEffect, useState } from "react";
import LoginFrom from "./LoginFrom";
import SideDegine from "./SideDegine";

function Backdesign() {
  return (
    <div>
      <div className="grid grid-cols-2">
        <div className="flex justify-between !overflow-x-hidden">
          <SideDegine />
        </div>
        {/* -----------------LOGIN Form----------------- */}

        <div className="bg-white flex flex-col items-center justify-center w-full h-screen">
          <LoginFrom />
        </div>
      </div>
    </div>
  );
}

export default Backdesign;
