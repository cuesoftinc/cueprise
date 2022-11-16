import React from "react";

import CuepriseLogo from "../../assets/logos/cueprise-logo.svg";
import NavEllipse from "../../assets/vectors/nav-ellipse.svg";

export const Navbar = () => {
  return (
    // <div>
    <nav
      data-testid="navbar"
      className="py-6 flex my-container w-full justify-between items-center"
    >
      <img
        src={CuepriseLogo}
        alt="The logo of the cueprise franchise"
        className="cursor-pointer"
      />

      <div className="flex justify-between w-[40%] text-textPrimary">
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>Features</h1>
        </div>
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>Pricing</h1>
        </div>
        <div className="flex gap-2 justify-between cursor-pointer">
          <img
            src={NavEllipse}
            alt="a grey ellipse vector for navigation items"
          />
          <h1>Contact</h1>
        </div>
      </div>

      <button className="btn">Get Started</button>
    </nav>
    // </div>
  );
};
