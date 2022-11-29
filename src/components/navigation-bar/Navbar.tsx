import React, { useState } from "react";

import CuepriseLogo from "../../assets/logos/cueprise-logo.svg";
import NavEllipse from "../../assets/vectors/nav-ellipse.svg";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [flex, setFlex] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    setHidden(!hidden);
    setFlex(!flex);
  };
  return (
    // <div>
    <nav
      data-testid="navbar"
      className="py-6 flex my-container w-full justify-between items-center relative"
    >
      <img
        src={CuepriseLogo}
        alt="The logo of the cueprise franchise"
        className="cursor-pointer"
      />

      <div className="hidden lg:flex justify-between w-[40%] text-textPrimary">
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>
            <a href="#features">Features</a>
          </h1>
        </div>
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>
            <a href="#pricing">Pricing</a>
          </h1>
        </div>
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>
            <a href="#newsletter">Contact</a>
          </h1>
        </div>
      </div>

      <button className="hidden lg:block btn">Get Started</button>

      {/* Mobile View */}

      <button
        id="menu-btn"
        className={`inline-block hamburger lg:hidden focus:outline-none ${
          open ? "open" : ""
        } `}
        onClick={handleClick}
      >
        <span className="hamburger-top dark:bg-white"></span>
        <span className="hamburger-middle dark:bg-white"></span>
        <span className="hamburger-bottom dark:bg-white"></span>
      </button>

      <div className="lg:hidden">
        <div
          id="menu"
          className={`absolute gap-8 flex-col ${hidden ? "hidden" : ""} ${
            flex ? "flex" : ""
          } items-center justify-center text-[15px] py-8 mt-10 space-y-6 font-bold bg-white w-full left-0 drop-shadow-md text-center z-50`}
        >
          <div className="flex gap-2 justify-between cursor-pointer">
            {/* <img
              src={NavEllipse}
              alt="a grey ellipse vector for navigation items"
            /> */}
            <h1>Features</h1>
          </div>
          <div className="flex gap-2 justify-between cursor-pointer">
            {/* <img
              src={NavEllipse}
              alt="a grey ellipse vector for navigation items"
            /> */}
            <h1>Pricing</h1>
          </div>
          <div className="flex gap-2 justify-between cursor-pointer">
            {/* <img
              src={NavEllipse}
              alt="a grey ellipse vector for navigation items"
            /> */}
            <h1>Contact</h1>
          </div>
        </div>
      </div>
    </nav>
    // </div>
  );
};
