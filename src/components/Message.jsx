import React from "react";

const Message = ({ messages }) => {
  return (
    <>
      {messages &&
        messages.map((msg) => (
          <div
            className={`flex gap-3 justify-start ${
              msg.userID !== 1 ? "flex-row-reverse" : ""
            }`}
          >
            <div className="flex flex-col gap-1 justify-center items-center">
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
              <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            </div>
            <div className="bg-gray-300 w-[75%] p-3 rounded-md">
              <div className="flex items-center gap-3 mb-1">
                <img
                  className="w-9 h-9 rounded-full object-cover"
                  src={msg.image}
                  alt=""
                />
                <div className="flex flex-col">
                  <h1 className="font-bold text-lg">{msg.name}</h1>
                  <span className="text-xs text-gray-500">{msg.date}</span>
                </div>
              </div>
              <p className="text-sm">{msg.message}</p>
            </div>
          </div>
        ))}
    </>
  );
};

export default Message;
