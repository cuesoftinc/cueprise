import React from "react";
import { Routes, Route } from "react-router-dom";

import "./App.css";
import { Footer } from "./components/footer/Footer";
import { Navbar } from "./components/navigation-bar/Navbar";

import { Homepage } from "./pages/Homepage";
import { NotFoundPage } from "./pages/NotFoundPage";

function App() {
  return (
    <div className="font-inter dark:bg-darkModeBg dark:text-white">
      <Navbar />
      <Routes>
        <>
          <Route path="/" element={<Homepage />} />
          <Route path="*" element={<NotFoundPage />} />
        </>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
