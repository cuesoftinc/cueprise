import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

import { useWinstonLogger } from "winston-react";

const Home = () => {
  return (
    <div>
      <h1>Hello</h1>
    </div>
  );
};

function App() {
  const logger = useWinstonLogger();

  React.useEffect(() => {
    logger.debug("App Page");
  });

  return (
    <div className="font-poppins dark:bg-darkModeBg dark:text-white">
      <Routes>
        <>
          <Route path="/" element={<Home />} />
        </>
      </Routes>
    </div>
  );
}

export default App;
