import React from "react";

import CuepriseLogoWhite from "../../assets/logos/cueprise-logo-white.svg";

export const Footer = () => {
  return (
    <footer
      data-testid="footer"
      className="px-10 py-20 lg:px-40 bg-[#2E213D] min-h-[425px] flex flex-col gap-8 lg:flex-row lg:items-center justify-between bg-footerBgLine bg-contain bg-left-bottom"
    >
      <div className="lg:text-[17px] text-[15px]">
        <img
          src={CuepriseLogoWhite}
          alt="a logo description of the cueprise franchise"
          className="mb-4 lg:mb-8"
        />
        <p className="text-[#F7795B] text-[27px] lg:text-[32px] mb-4 lg:mb-8">
          Want to give us a shot?
        </p>
        <span className="text-white opacity-50">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt.
        </span>
        <button className="btn-dark block mt-6 lg:mt-12">Get started</button>
      </div>

      <div className="flex flex-col gap-4">
        <span className="text-[#F7795B] text-[15px] lg:text-[17px]">
          Navigation
        </span>
        <span className="text-[12px] lg:text-[15px] text-white">
          <a href="#pricing">Benefits & Pricing</a>
        </span>
        <span className="text-[12px] lg:text-[15px] text-white">
          <a href="#features">Features</a>
        </span>
        <span className="text-[12px] lg:text-[15px] text-white">
          <a href="#newsletter">Contacts</a>
        </span>
      </div>
    </footer>
  );
};
