import React, { useState } from "react";

import HeroTwistArrowLeft from "../assets/vectors/hero-twist-arrow-vector-left.svg";
import HeroTwistArrowRight from "../assets/vectors/hero-twist-arrow-vector-right.svg";
import HeroTwistLeft from "../assets/vectors/hero-twist-vector-left.svg";
import HeroTwistRight from "../assets/vectors/hero-twist-vector-right.svg";
import HeroCrown from "../assets/vectors/hero-crown-vector.svg";
import HeroPlayIcon from "../assets/icons/hero-play-demo-icon.svg";
import HeroGetStartedArrowIcon from "../assets/icons/hero-get-started-arrow-icon.svg";
import CuepriseScreenLaptop from "../assets/imgs/cueprise-laptop-screen-img.png";
import PersonelOverviewScreen from "../assets/imgs/personel-overview-screen-img.svg";

import Umobile from "../assets/logos/umobile.svg";
import Sycamore from "../assets/logos/sycamore.svg";
import Finchglow from "../assets/logos/finchglow.svg";

import ArchiveIcon from "../assets/icons/archive-icon.svg";
import MonitorIcon from "../assets/icons/monitor-icon.svg";
import ReceiptIcon from "../assets/icons/receipt-icon.svg";
import HandshakeIcon from "../assets/icons/handshake-icon.svg";

import Mask1 from "../assets/imgs/mask1.svg";
import Mask2 from "../assets/imgs/mask2.svg";
import Mask3 from "../assets/imgs/mask3.svg";
import Mask4 from "../assets/imgs/mask4.svg";

import PurpleBgCurve from "../assets/others/ellipse-purple-bg.svg";
import PurpleBgCurveMobile from "../assets/others/ellipse-purple-bg-mobile.svg";

import TwistLeftVector from "../assets/vectors/twist-left-vector.svg";
import TwistUpVector from "../assets/vectors/twist-up-vector.svg";

import LaptopScreen from "../assets/imgs/cueprise-screen-small.png";
import LaptopScreenMobile from "../assets/imgs/cueprise-laptop-screen-img-mobile.png";

import CheckIconActive from "../assets/icons/check-icon-active.svg";
import CheckIconInactiveHover from "../assets/icons/check-icon-inactive-hover.svg";
import CheckIconInactive from "../assets/icons/check-icon-inactive.svg";

import PricingStar from "../assets/icons/star-icon.svg";
import RedStarGroup from "../assets/others/star-group-red.svg";
import QuotesIcon from "../assets/icons/quotes-white.svg";

import StarRatingActive from "../assets/icons/star-rating-active.svg";
import StarRatingInactive from "../assets/icons/star-rating-inactive.svg";

import AyAvatar from "../assets/imgs/ay-avatar.svg";

import NewsletterBig from "../assets/others/newsletter-subscribe-large-bg.svg";
import NewsletterSmall from "../assets/others/newsletter-subscribe-small-mask.svg";

export const Homepage = () => {
  const [mChecked, setMChecked] = useState(false);

  const handleClick = () => {
    setMChecked((prev) => !prev);
  };
  return (
    <main data-testid="homepage">
      <div className="text-transparent pointer-events-none  w-[10%] h-[100] top-[35%] left-[10%] absolute rounded-full shadow-[0_0_600px_60px_#CDB0EF]"></div>
      <div className="text-transparent pointer-events-none  w-[10%] h-[100] bottom-[35%] right-[5%] absolute rounded-full shadow-[0_0_600px_60px_#CDB0EF]"></div>

      <section className="my-container py-12">
        <div className="flex justify-between">
          <div className="w-[20%] lg:w-[20%] flex justify-end ">
            <img
              src={HeroTwistLeft}
              alt="An aesthetic vector for design purposes only, a squiggly line"
              className="self-start"
            />
          </div>
          <div className="w-[10%] lg:w-[20%] ">
            <img
              src={HeroCrown}
              alt="A vector representation of a crown for aesthetics only"
            />
          </div>
          <div className="w-[20%] lg:w-[20%] ">
            <img
              src={HeroTwistRight}
              alt="An aesthetic vector for design purposes only, a squiggly line"
            />
          </div>
        </div>

        <div className="mx-auto w-[80%] lg:w-[55%] mt-4 text-center flex justify-between items-center">
          <div className="w-[20%] flex justify-end lg:hidden">
            <img
              src={HeroTwistArrowLeft}
              alt="An aesthetic vector for design purposes only, a squiggly line"
              className=""
            />
          </div>

          <h2 className="w-[50%] lg:w-[100%] text-[24px] lg:text-[60px] text-textPrimary leading-tight font-semibold">
            One <span className="text-bgPrimary">Platform</span> to rule all
            your business needs
          </h2>

          <div className="w-[20%] lg:hidden">
            <img
              src={HeroTwistArrowRight}
              alt="An aesthetic vector for design purposes only, a squiggly line"
            />
          </div>
        </div>

        <div className="flex justify-between mt-4 lg:mt-8">
          <div className="w-[20%] lg:flex justify-end hidden">
            <img
              src={HeroTwistArrowLeft}
              alt="An aesthetic vector for design purposes only, a squiggly line"
            />
          </div>
          <div className=" lg:w-[55%] flex flex-col gap-12 items-center">
            <p className="text-center text-[12px] lg:text-[18px] text-textPrimary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor,
              odio sagittis, diam tincidunt neque velit nec cras. Et convallis
              pellentesque et, tellus et feugiat in metus sed. Quis turpis nunc
              nulla vel facilisi metus. Arcu.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 lg:justify-between">
              <div className="flex gap-4 items-center">
                <img
                  src={HeroPlayIcon}
                  alt="A play button Icon"
                  className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px]"
                />
                <span className="text-[12px] lg:text-[16px] text-bgPrimary">
                  Checkout DEMO
                </span>
              </div>

              <button className="btn text-[12px] lg:text-[16px] flex justify-center gap-2 items-center">
                <p>Get Started</p>
                <img
                  src={HeroGetStartedArrowIcon}
                  alt="A directional arrow for the get started button"
                  className="inline"
                />
              </button>
            </div>
          </div>
          <div className="w-[20%] hidden lg:flex">
            <img
              src={HeroTwistArrowRight}
              alt="An aesthetic vector for design purposes only, a squiggly line"
            />
          </div>
        </div>
      </section>

      <section className="my-8 relative">
        {/* <div className="bg-[#F1F5F9] bg-opacity-100 w-screen h-[0px] absolute bottom-[30%] shadow-[0_0_700px_140px_#F1F5F9]"></div> */}

        <div className="lg:bg-screenSectionBg bg-center">
          <div className="my-container flex justify-between ">
            <img
              src={CuepriseScreenLaptop}
              alt="some screens from the cueprise app"
              className="w-[280px] h-[165px] lg:w-full lg:h-full"
            />
            <img
              src={PersonelOverviewScreen}
              alt="some screens from the cueprise app"
              className="w-[280px] h-[165px] lg:w-full lg:h-[650px]"
            />
          </div>

          <div>
            <div className="my-container text-center my-32 bg-screenSectionBg lg:bg-none">
              <h3 className="text-[16px] lg:text-[32px] text-textHeader font-bold">
                Trusted by reputable companies
              </h3>
              <div className="flex justify-around items-center min-h-full py-12">
                <div>
                  <img
                    src={Umobile}
                    alt="Umobile Logo"
                    className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
                  />
                </div>

                <div>
                  <img
                    src={Finchglow}
                    alt="Finchglow Logo"
                    className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
                  />
                </div>

                <div>
                  <img
                    src={Sycamore}
                    alt="Sycamore Logo"
                    className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
                  />
                </div>

                <div>
                  <img
                    src={Umobile}
                    alt="Umobile Logo"
                    className="w-[60px] h-[30px] lg:w-[150px] lg:h-[90px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="my-container w-full my-24">
          <h3 className="text-[16px] lg:text-[36px] text-textPrimary font-bold text-center">
            Cueprise Solutions for your business
          </h3>

          <div className="flex flex-col lg:flex-row items-center justify-between my-8 lg:my-12 gap-4">
            <div className="w-[80%] lg:w-[23%] h-80 lg:h-96 border border-[#F7795B] border-opacity-20 pt-8 px-8 rounded-xl">
              <div className="bg-[#F7795B] bg-opacity-10 rounded-xl w-fit p-4 mb-6">
                <img src={ArchiveIcon} alt="archive icon" />
              </div>
              <span className="text-[14px] lg:text-[16px] text-[#F7795B] block font-semibold">
                Inventory
              </span>
              <p className="text-[12px] lg:text-[14px] text-[#94A3B8] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat arcu, non senectus integer. Risus morbi nec varius neque
                nunc, ut. Justo elementum potenti sed tempor. Egestas duis.
              </p>
            </div>

            <div className="w-[80%] lg:w-[23%] h-80 lg:h-96 border border-[#B888F1] border-opacity-20 pt-8 px-8 rounded-xl">
              <div className="bg-[#B888F1] bg-opacity-20 rounded-xl w-fit p-4 mb-6">
                <img src={MonitorIcon} alt="archive icon" />
              </div>
              <span className="text-[14px] lg:text-[16px] text-[#B888F1] block font-semibold">
                Resources
              </span>
              <p className="text-[12px] lg:text-[14px] text-[#94A3B8] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat arcu, non senectus integer. Risus morbi nec varius neque
                nunc, ut. Justo elementum potenti sed tempor. Egestas duis.
              </p>
            </div>

            <div className="w-[80%] lg:w-[23%] h-80 lg:h-96 border border-[#B1A8B9] border-opacity-20 pt-8 px-8 rounded-xl">
              <div className="bg-[#B1A8B9] bg-opacity-10 rounded-xl w-fit p-4 mb-6">
                <img src={ReceiptIcon} alt="archive icon" />
              </div>
              <span className="text-[14px] lg:text-[16px] text-[#B1A8B9] block font-semibold">
                Payroll
              </span>
              <p className="text-[12px] lg:text-[14px] text-[#94A3B8] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat arcu, non senectus integer. Risus morbi nec varius neque
                nunc, ut. Justo elementum potenti sed tempor. Egestas duis.
              </p>
            </div>

            <div className="w-[80%] lg:w-[23%] h-80 lg:h-96 border border-[#006E5E] border-opacity-20 pt-8 px-8 rounded-xl">
              <div className="bg-[#006E5E] bg-opacity-10 rounded-xl w-fit p-4 mb-6">
                <img src={HandshakeIcon} alt="archive icon" />
              </div>
              <span className="text-[14px] lg:text-[16px] text-[#006E5E] block font-semibold">
                CRM
              </span>
              <p className="text-[12px] lg:text-[14px] text-[#94A3B8] mt-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus
                feugiat arcu, non senectus integer. Risus morbi nec varius neque
                nunc, ut. Justo elementum potenti sed tempor. Egestas duis.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#FAF6FF]">
        <div className="lg:flex items-center justify-between pl-[5%] hidden">
          <div className="relative">
            <div className="w-[70%]">
              <span className="font-bold text-[52px] leading-[78px] text-[#0C0047]">
                Eleifend ac consectetur diam.
              </span>
              <p className="text-[14px] text-[#969696] mt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sagittis aenean id ut est, in. Cursus in varius cras arcu.{" "}
              </p>
              <div className="flex mt-4">
                <div className="w-fit relative flex">
                  <img src={Mask1} alt="Avatar" />
                  <img src={Mask2} alt="Avatar" className="relative -left-2" />
                  <img src={Mask3} alt="Avatar" className="relative -left-4" />
                  <img src={Mask4} alt="Avatar" className="relative -left-6" />
                </div>
                <span className="font-semibold text-[14px] text-[#343434]">
                  More than 10.000 people have tried
                </span>
              </div>
              <button className="btn mt-8">Try for free</button>
            </div>
            <div className="absolute right-[20%] bottom-0">
              <img
                src={TwistLeftVector}
                alt="a twist like vector for design purposes"
              />
            </div>
            <div className="absolute -right-[65%] -top-16">
              <img
                src={LaptopScreen}
                alt="A laptop screen showing the product"
                className="w-[650px] h-[400px]"
              />
            </div>
          </div>
          <div>
            <img
              src={PurpleBgCurve}
              alt="A purple background shape for design purpose"
              height={"100%"}
            />
          </div>
        </div>
        <div className="flex justify-between lg:hidden">
          <div className="p-12 pr-0  w-[60%] relative">
            <div className="w-[80%]">
              <span className="font-bold text-[16px] text-[#0C0047]">
                Eleifend ac consectetur diam.
              </span>
            </div>
            <p className="text-[12px] text-[#969696] mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sagittis
              aenean id ut est, in. Cursus in varius cras arcu.{" "}
            </p>
            <div className="flex mt-2 items-center">
              <div className="w-fit flex">
                <img src={Mask1} alt="Avatar" className=" w-[14px] h-[15px]" />
                <img
                  src={Mask2}
                  alt="Avatar"
                  className="relative -left-2 w-[14px] h-[15px]"
                />
                <img
                  src={Mask3}
                  alt="Avatar"
                  className="relative -left-4 w-[14px] h-[15px]"
                />
                <img
                  src={Mask4}
                  alt="Avatar"
                  className="relative -left-6 w-[14px] h-[15px]"
                />
              </div>
              <span className="font-semibold text-[8px] text-[#343434]">
                More than 10.000 people have tried
              </span>
            </div>
            <button className="rounded-md bg-bgPrimary text-white lg:py-3 lg:px-5 py-2 px-2 text-center mt-4 text-[12px] w-full">
              Try for free
            </button>

            <div className="bg-red-500 mt-8 relative min-h-fit">
              <img
                src={TwistUpVector}
                alt="A twisted arrow vector for design purpose"
                className="absolute right-6 "
              />
            </div>

            <div className="bg-blue-400 relative">
              <img
                src={LaptopScreenMobile}
                alt="A laptop screen showing the product"
                className="absolute -right-12 top-24"
              />
            </div>
          </div>
          <div className="">
            <img
              src={PurpleBgCurveMobile}
              alt="A purple curve as background for design purposes"
            />
          </div>
        </div>
      </section>

      <section className="bg-pricingWavyBg">
        <div className="my-container py-32">
          <div>
            <h3 className="text-[16px] lg:text-[36px] text-textPrimary font-bold text-center">
              Our Pricing
            </h3>
            <p className="text-[12px] lg:text-[16px] text-[#64748B] font-medium lg:w-[80%] text-center mx-auto mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget at
              risus lorem nec eu libero elementum. Orci, sed laoreet cursus
              lobortis auctor nulla lobortis viverra. Lobortis fusce ac magnis
              velit viverra. Id imperdiet orci molestie adipiscing pretium.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mt-12 lg:mt-28 gap-10">
              <span className="text-[12px] lg:text-[16px] text-[#475569] font-semibold">
                Monthly Billing
              </span>
              <label
                htmlFor="theme-toggle"
                className="flex items-center cursor-pointer relative "
                onClick={handleClick}
              >
                <input type="checkbox" id="theme-toggle" className="sr-only" />
                <div
                  className={`toggle-bg bg-[#f7795b0d] h-9 w-20 rounded-full ${
                    mChecked
                      ? "before:hidden after:block"
                      : "before:block after:hidden"
                  }`}
                ></div>
              </label>
              <span className="text-[12px] lg:text-[16px] text-[#94A3B8] ">
                Annual Billing
              </span>
            </div>
          </div>

          <div className="mt-20 flex flex-col lg:flex-row flex-wrap lg:items-stretch items-center justify-center gap-12 ">
            <div className="w-[80%] lg:w-[30%] bg-[#56436C] rounded-2xl py-10 px-4 shadow-[0_10px_56px_#0000000d]">
              <div className="text-center ">
                <span className="text-[21px] lg:text-[32px] font-extrabold text-[#F1F5F9]">
                  FREE
                </span>
                <p className="w-[80%] mx-auto text-[11px] lg:text-[16px] text-[#CBD5E1] mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  sit.
                </p>
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $0
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                  Select Plan
                </button>
              </div>

              <div className="mt-10 text-[11px] lg:text-[14px] text-[#F1F5F9]">
                <div className="flex items-center gap-4">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Mobile Platform</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactiveHover}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    {" "}
                    Web & Desktop
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactiveHover}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Pay bills and salary directly on the platform{" "}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactiveHover}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Login to view assigned tasks
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactiveHover}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Request Leave
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactiveHover}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Access to complete features
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[80%] lg:w-[30%] rounded-2xl py-10 px-4 bg-white shadow-[0_10px_56px_#0000000d]">
              <div className="text-center ">
                <span className="text-[21px] lg:text-[32px] font-extrabold text-[#475569]">
                  BASIC
                </span>
                <p className="w-[80%] mx-auto text-[11px] lg:text-[16px] text-[#969696] mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  sit.
                </p>
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $5
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                  Select Plan
                </button>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] text-[14px]">
                <div className="flex items-center gap-4">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Hassle Free</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold"> Mobile, Web & Desktop</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">View assigned tasks</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Request Leave</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Pay bills and salary directly on the platform{" "}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Access to complete features
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[80%] lg:w-[30%] rounded-2xl py-10 px-4 bg-white shadow-[0_10px_56px_#0000000d]">
              <div className="text-center ">
                <span className="text-[21px] lg:text-[32px] font-extrabold text-[#475569]">
                  STANDARD
                </span>
                <p className="w-[80%] mx-auto text-[11px] lg:text-[16px] text-[#969696] mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  sit.
                </p>
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $10
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                  Select Plan
                </button>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] text-[14px]">
                <div className="flex items-center gap-4">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Hassle Free</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold"> Mobile, Web & Desktop</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">View assigned tasks</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Request Leave</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Pay bills and salary directly on the platform{" "}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconInactive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold line-through">
                    Access to complete features
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[80%] lg:w-[30%] rounded-2xl py-10 px-4 bg-white shadow-[0_10px_56px_#0000000d] relative">
              <div className="absolute -top-2 -right-2">
                <img src={PricingStar} alt="a star icon" />
              </div>

              <div className="text-center ">
                <span className="text-[21px] lg:text-[32px] font-extrabold text-[#475569]">
                  PRO
                </span>
                <p className="w-[80%] mx-auto text-[11px] lg:text-[16px] text-[#969696] mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  sit.
                </p>
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $20
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Month
                  </span>
                </div>
                <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                  Select Plan
                </button>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] text-[14px]">
                <div className="flex items-center gap-4">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Hassle Free</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold"> Mobile, Web & Desktop</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">View assigned tasks</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Request Leave</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Pay bills and salary directly on the platform{" "}
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Access to complete features
                  </span>
                </div>
              </div>
            </div>

            <div className="w-[80%] lg:w-[30%] rounded-2xl py-10 px-4 bg-white shadow-[0_10px_56px_#0000000d] relative">
              <div className="absolute -top-2 -right-2">
                <img src={PricingStar} alt="a star icon" />
              </div>

              <div className="text-center ">
                <span className="text-[21px] lg:text-[32px] font-extrabold text-[#475569]">
                  ENTERPRISE
                </span>
                <p className="w-[80%] mx-auto text-[11px] lg:text-[16px] text-[#969696] mt-6">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim
                  sit.
                </p>
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $*****
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Month
                  </span>
                </div>
                <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                  Select Plan
                </button>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] lg:text-[14px]">
                <div className="flex items-center gap-4">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Customer Servers + Databases
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Purchase 1 Year Renewable License
                  </span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">Mobile, Desktop & Web</span>
                </div>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={CheckIconActive}
                    alt="check circle icon that serves as bullet"
                  />
                  <span className="text-semibold">
                    Access to complete features
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="reviews"
        className="flex items-center md:min-h-screen bg-[#FDF7F6] bg-opacity-[44%]"
      >
        <div className="my-container py-24">
          <div className="relative text-center w-full">
            <h3 className="text-[#475569] text-[16px] lg:text-[32px] font-semibold w-[60%] mx-auto">
              What our users are saying about Cueprise
            </h3>
            <p className="text-[10px] lg:text-[14px] text-[#64748B] w-[70%] mx-auto mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis
              proin est sed nunc non sed odio odio. Cursus turpis aliquam neque
              varius sed.
            </p>

            <div className="absolute right-5 top-0 lg:-top-16 lg:right-28">
              <img
                src={RedStarGroup}
                alt="A group of stars"
                className="w-[48px] h-[48px] lg:w-[123px] lg:h-[123px]"
              />
            </div>
          </div>

          <div className="flex gap-4 py-20 w-full overflow-hidden">
            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative">
              <div className="w-[29px] h-[29px] lg:w-[54px] lg:h-[54px] bg-bgPrimary flex items-center justify-center rounded-full absolute lg:-top-8 -top-4 left-3 lg:left-5">
                <img
                  src={QuotesIcon}
                  alt="A quotation mark icon"
                  className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]"
                />
              </div>
              <div className="pt-6 lg:pt-12 px-4 lg:px-8">
                <div className="flex">
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An inactive rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                </div>
                <p className="text-[10px] lg:text-[16px] text-[#797979] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tristique tellus nisi feugiat porttitor. At
                  potenti vel id.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={AyAvatar}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Owoetoni Ayodele
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative">
              <div className="w-[29px] h-[29px] lg:w-[54px] lg:h-[54px] bg-bgPrimary flex items-center justify-center rounded-full absolute lg:-top-8 -top-4 left-3 lg:left-5">
                <img
                  src={QuotesIcon}
                  alt="A quotation mark icon"
                  className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]"
                />
              </div>
              <div className="pt-6 lg:pt-12 px-4 lg:px-8">
                <div className="flex">
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An inactive rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                </div>
                <p className="text-[10px] lg:text-[16px] text-[#797979] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tristique tellus nisi feugiat porttitor. At
                  potenti vel id.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={AyAvatar}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Owoetoni Ayodele
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative">
              <div className="w-[29px] h-[29px] lg:w-[54px] lg:h-[54px] bg-bgPrimary flex items-center justify-center rounded-full absolute lg:-top-8 -top-4 left-3 lg:left-5">
                <img
                  src={QuotesIcon}
                  alt="A quotation mark icon"
                  className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]"
                />
              </div>
              <div className="pt-6 lg:pt-12 px-4 lg:px-8">
                <div className="flex">
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An inactive rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                </div>
                <p className="text-[10px] lg:text-[16px] text-[#797979] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tristique tellus nisi feugiat porttitor. At
                  potenti vel id.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={AyAvatar}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Owoetoni Ayodele
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative">
              <div className="w-[29px] h-[29px] lg:w-[54px] lg:h-[54px] bg-bgPrimary flex items-center justify-center rounded-full absolute lg:-top-8 -top-4 left-3 lg:left-5">
                <img
                  src={QuotesIcon}
                  alt="A quotation mark icon"
                  className="w-[13px] h-[13px] lg:w-[17px] lg:h-[17px]"
                />
              </div>
              <div className="pt-6 lg:pt-12 px-4 lg:px-8">
                <div className="flex">
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingActive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An active rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                  <img
                    src={StarRatingInactive}
                    alt="An inactive rating start"
                    className="w-[9px] h-[9px] lg:w-[17px] lg:h-[17px]"
                  />
                </div>
                <p className="text-[10px] lg:text-[16px] text-[#797979] mt-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque tristique tellus nisi feugiat porttitor. At
                  potenti vel id.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={AyAvatar}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Owoetoni Ayodele
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="">
        {/* <div className="bg-[#B888F1] bg-[length:100%_50vh] bg-opacity-[12%]"> */}
        <div className="bg-[#B888F1] bg-opacity-[12%] pt-20 lg:pt-0">
          <div className="my-container lg:flex items-center justify-end min-h-screen relative">
            <div className="bg-[#634D7C] border-none rounded-[15px] absolute lg:left-0 lg:top-[37%] left-10 -top-16">
              <div className="relative">
                <img
                  src={NewsletterSmall}
                  alt="Another pattern design"
                  className="w-[255px] lg:w-[539px] lg:h-[312px]"
                />
                <div className="absolute lg:w-inherit lg:h-inherit top-0 left-0 w-full h-full lg:p-8 p-4">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <span className="text-[10px] lg:text-[16px] text-white">
                      SUBSCRIBE TO OUR NEWSLETTER
                    </span>
                    <p className="text-[12px] lg:text-[32px] lg:w-[90%] text-white ">
                      Get exciting updates about Cueprise and Productivity.
                    </p>

                    <div className="mt-2 lg:mt-4">
                      <input
                        type="text"
                        placeholder="YOUR EMAIL ADDRESS"
                        className="py-2 lg:py-4 px-4 lg:px-6 placeholder:text-[#1B1C31] placeholder:opacity-40 text-[8px] lg:text-[14px] w-[70%] bg-white bg-opacity-60 rounded-l-lg focus:outline-none"
                      />
                      <button className="text-[8px] lg:text-[14px] text-white bg-bgPrimary text-center p-2 lg:py-4 lg:px-6 rounded-r-lg">
                        SUBSCRIBE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <img src={NewsletterBig} alt="A pattern design" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
