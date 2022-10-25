import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";

const Home = () => {
  return (
    <div data-testid="homepage">
      <h1>Hello</h1>
    </div>
  );
};

function App() {
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
