import React from "react";
import { GoFileSubmodule } from "react-icons/go";
import { IoSend } from "react-icons/io5";

const MessageInput = () => {
  return (
    <div className="bg-gray-700 text-white fixed w-full h-auto flex justify-between items-center px-5 py-3">
      <div className="text-2xl">
        <GoFileSubmodule />
      </div>
      <div>
        <input
          className="rounded-md py-2 ps-3 pe-12 text-black"
          placeholder="Enter your message..."
          type="text"
        />
      </div>
      <div className="text-2xl">
        <IoSend />
      </div>
    </div>
  );
};

export default MessageInput;
