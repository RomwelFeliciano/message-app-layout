import React from "react";
import Message from "./Message";

const MessageGrid = () => {
  const messages = [
    {
      userID: 1,
      image:
        "https://th.bing.com/th/id/OIP.Iq0VL_3xvTvfFr6TDBOeNAHaD5?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Juan Dela Cruz",
      date: "November 24, 2023 - 3:00 P.M.",
      message: "Pedro penduko ilabas mo ang bakal na krus, itataob na kita",
    },
    {
      userID: 2,
      image:
        "https://alchetron.com/cdn/pedro-penduko-76282fd6-c57b-4801-9545-df717d1ad02-resize-750.jpeg",
      name: "Pedro Penduko",
      date: "November 24, 2023 - 3:01 P.M.",
      message:
        "Wala sakin ang bakal na krus, mga agimat lamang ang aking dala. Bato ng katarungan ipagtangol ang nasasaktan",
    },
    {
      userID: 1,
      image:
        "https://th.bing.com/th/id/OIP.Iq0VL_3xvTvfFr6TDBOeNAHaD5?w=302&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
      name: "Juan Dela Cruz",
      date: "November 24, 2023 - 3:02 P.M.",
      message: "FBJ Ang Probinsyano: Immortality Activated",
    },
    {
      userID: 2,
      image:
        "https://alchetron.com/cdn/pedro-penduko-76282fd6-c57b-4801-9545-df717d1ad02-resize-750.jpeg",
      name: "Pedro Penduko",
      date: "November 24, 2023 - 3:05 P.M.",
      message: "Hatdog",
    },
    {
      userID: 2,
      image:
        "https://alchetron.com/cdn/pedro-penduko-76282fd6-c57b-4801-9545-df717d1ad02-resize-750.jpeg",
      name: "Pedro Penduko",
      date: "November 24, 2023 - 3:05 P.M.",
      message: "Hatdog",
    },
    {
      userID: 2,
      image:
        "https://alchetron.com/cdn/pedro-penduko-76282fd6-c57b-4801-9545-df717d1ad02-resize-750.jpeg",
      name: "Pedro Penduko",
      date: "November 24, 2023 - 3:05 P.M.",
      message: "Hatdog",
    },
  ];

  return (
    <div className="w-full h-[540px] overflow-y-auto flex flex-col gap-4 px-5 py-8">
      <Message messages={messages} />
    </div>
  );
};

export default MessageGrid;
