import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { TbMenuDeep } from "react-icons/tb";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 text-white flex justify-between px-5 py-4">
      <div className="flex justify-center items-center text-3xl">
        <IoIosArrowBack />
      </div>
      <div className="flex flex-col justify-center items-center">
        <img
          className="w-14 h-14 rounded-full object-cover"
          src="https://th.bing.com/th/id/OIP.Iq0VL_3xvTvfFr6TDBOeNAHaD5?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
        <h1 className="font-bold text-xl pt-2">Juan Dela Cruz</h1>
      </div>
      <div className="flex justify-center items-center text-3xl">
        <TbMenuDeep />
      </div>
    </nav>
  );
};

export default Navigation;
