import React from "react";
import Navigation from "./components/Navigation";
import MessageGrid from "./components/MessageGrid";
import MessageInput from "./components/MessageInput";

const App = () => {
  return (
    <>
      <Navigation />
      <main>
        <MessageGrid />
      </main>
      <MessageInput />
    </>
  );
};

export default App;
