import React, { useState, useEffect } from "react";

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
import { CustomModal } from "../components/custom-modal/CustomModal";
import logger from "../libs/logger";

export const Homepage = () => {
  const [mChecked, setMChecked] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const [email, setEmail] = useState("");

  const [formStatus, setFormStatus] = useState("");
  const [formError, setFormError] = useState("");
  const [formLoading, setFormLoading] = useState(false);

  const handleClick = () => {
    setMChecked((prev) => !prev);
  };

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (formLoading) return;

    const table_id = process.env.REACT_APP_AIRTABLE_TABLE_ID_WAITING_LIST;
    const base_id = process.env.REACT_APP_AIRTABLE_BASE_ID;
    const api_key = process.env.REACT_APP_AIRTABLE_API_KEY;

    const myHeaders_ = {
      Authorization: `Bearer ${api_key}`,
      "Content-Type": "application/json"
    };

    const data = {
      fields: {
        Email: email
      }
    };

    setFormLoading(true);

    fetch(`https://api.airtable.com/v0/${base_id}/${table_id}`, {
      method: "POST",
      headers: myHeaders_,
      body: JSON.stringify(data)
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        logger.info(data);

        if (data.error) {
          setFormLoading(false);
          logger.error(data.error);
          setFormStatus("Error");
          setFormError(data.error.message);
        } else {
          setEmail("");
          setFormLoading(false);
          setFormError("");
          setFormStatus("Success");
        }
      })
      .catch((error) => {
        logger.error(error);
        setFormLoading(false);
        setFormError(error.message);
      });
  };

  useEffect(() => {
    const timerId = setTimeout(() => {
      if (formError !== "" || formStatus !== "") {
        setFormError("");
        setFormStatus("");
      }
    }, 5000);

    return () => {
      clearTimeout(timerId);
    };
  }, [formLoading, formError, formStatus]);

  return (
    <main data-testid="homepage">
      <div className="text-transparent pointer-events-none  w-[10%] h-[100] top-[35%] left-[10%] absolute rounded-full shadow-[0_0_600px_60px_#CDB0EF]"></div>
      <div className="text-transparent pointer-events-none  w-[10%] h-[100] bottom-[35%] right-[5%] absolute rounded-full shadow-[0_0_600px_60px_#CDB0EF]"></div>

      <section id="hero" className="my-container py-12">
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
              Manage your inventory, accept payments, generate transaction
              reports, pay employees and respond to customer inquiries in one
              click!.
            </p>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4 lg:gap-8 lg:justify-between">
              <div
                className="flex gap-4 items-center"
                onClick={handleOpenModal}
              >
                <img
                  src={HeroPlayIcon}
                  alt="A play button Icon"
                  className="w-[30px] h-[30px] lg:w-[45px] lg:h-[45px] cursor-pointer"
                />
                <span className="text-[12px] lg:text-[16px] text-bgPrimary cursor-pointer">
                  Watch A Demo
                </span>
              </div>

              <a href="#newsletter">
                <button className="btn text-[12px] lg:text-[16px] flex justify-center gap-2 items-center">
                  <p>Get Started</p>
                  <img
                    src={HeroGetStartedArrowIcon}
                    alt="A directional arrow for the get started button"
                    className="inline"
                  />
                </button>
              </a>
            </div>
          </div>
          <div className="w-[20%] hidden lg:flex">
            <img
              src={HeroTwistArrowRight}
              alt="An aesthetic vector for design purposes only, a squiggly line"
            />
          </div>
        </div>

        <CustomModal openModal={openModal} closeModal={handleCloseModal} />
      </section>

      <section id="customer-companies" className="lg:my-8 relative">
        <div className="lg:bg-screenSectionBg bg-center overflow-x-hidden">
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
            <div className="my-container text-center my-12 lg:my-32 lg:bg-none">
              <h3 className="text-[16px] lg:text-[32px] text-textHeader font-bold">
                Trusted by reputable companies
              </h3>
              <div className="flex justify-around items-center min-h-full py-6 lg:py-12">
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

      <section id="features" className="">
        <div className="my-container w-full my-12 lg:my-24">
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
                For managing your inventory, you can use the inventory
                management module to keep track of your products, track stock
                levels, and automate ordering processes.
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
                You can use the resource management module to manage your
                resources effectively. This can help you schedule tasks, assign
                team members to projects, and track progress.
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
                To manage your payroll effectively, you can use payroll
                software. This can help you calculate and manage employee
                salaries, automate tax calculations, and generate reports.
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
                To manage your customer relationships, you can use CRM (Customer
                Relationship Management) module. This can help you track
                customer interactions, manage leads, and automate communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="bg-[#FAF6FF]">
        <div className="md:flex items-center justify-between pl-[5%] hidden">
          <div className="relative">
            <div className="w-[65%]">
              <span className="font-bold text-[30px] xl:text-[52px] xl:leading-[78px] text-[#0C0047]">
                What makes us different from our competitors?
              </span>
              <p className="text-[14px] text-[#969696] mt-4">
                We are a better solution in terms of privacy, local compliance,
                and data prevention.
              </p>
              <div className="flex mt-4">
                <div className="w-fit relative flex">
                  <img
                    src={Mask1}
                    alt="Avatar"
                    className=" w-[40px] h-[40px] lg:w-[24px] lg:h-[24px]"
                  />
                  <img
                    src={Mask2}
                    alt="Avatar"
                    className="relative -left-4 lg:-left-2 w-[40px] h-[40px] lg:w-[24px] lg:h-[24px]"
                  />
                  <img
                    src={Mask3}
                    alt="Avatar"
                    className="relative -left-10 lg:-left-4 w-[40px] h-[40px] lg:w-[24px] lg:h-[24px]"
                  />
                  <img
                    src={Mask4}
                    alt="Avatar"
                    className="relative -left-14 lg:-left-6 w-[40px] h-[40px] lg:w-[24px] lg:h-[24px]"
                  />
                </div>
                <span className="font-semibold text-[14px] text-[#343434]">
                  More than 10.000 people have tried
                </span>
              </div>
              <a href="#newsletter">
                <button className="btn mt-8">Try for free</button>
              </a>
            </div>
            <div className="absolute right-[30%] -bottom-6 xl:right-[35%] xl:-bottom-16">
              <img
                src={TwistLeftVector}
                alt="a twist like vector for design purposes"
                className="w-[150px] h-[100px] xl:w-[200px] xl:h-[200px]"
              />
            </div>
            <div className="absolute -right-[60%] -top-1 lg:-right-[40%] lg:-top-4 xl:-top-16 xl:-right-[30%]">
              <img
                src={LaptopScreen}
                alt="A laptop screen showing the product"
                className="w-[400px] h-[250px] xl:w-[650px] xl:h-[400px]"
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
        <div className="flex justify-between md:hidden">
          <div className="p-12 pr-0  w-[60%] relative">
            <div className="w-[80%]">
              <span className="font-bold text-[16px] text-[#0C0047]">
                What makes us different from our competitors?
              </span>
            </div>
            <p className="text-[12px] text-[#969696] mt-2">
              We are a better solution in terms of privacy, local compliance,
              and data prevention.{" "}
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
            <a href="#newsletter">
              <button className="rounded-md bg-bgPrimary text-white lg:py-3 lg:px-5 py-2 px-2 text-center mt-4 text-[12px] w-full">
                Try for free
              </button>
            </a>

            <div className="mt-8 relative min-h-fit">
              <img
                src={TwistUpVector}
                alt="A twisted arrow vector for design purpose"
                className="absolute right-6"
              />
            </div>

            <div className="relative">
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

      <section id="pricing" className="bg-pricingWavyBg">
        <div className="my-container py-8 lg:py-32">
          <div>
            <h3 className="text-[16px] lg:text-[36px] text-textPrimary font-bold text-center">
              Get Yourself A Cueprise Plan And Level Up!
            </h3>
            <p className="text-[12px] lg:text-[16px] text-[#64748B] font-medium lg:w-[80%] text-center mx-auto mt-8">
              Spend a quarter as much as you would with our Competitors.
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
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $0
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <a href="#newsletter">
                  <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                    Select Plan
                  </button>
                </a>
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
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $5
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <a href="#newsletter">
                  <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                    Select Plan
                  </button>
                </a>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] lg:text-[14px]">
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
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $10
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Users/Month
                  </span>
                </div>
                <a href="#newsletter">
                  <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                    Select Plan
                  </button>
                </a>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] lg:text-[14px]">
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
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $20
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Month
                  </span>
                </div>
                <a href="#newsletter">
                  <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                    Select Plan
                  </button>
                </a>
              </div>

              <div className="mt-10 text-[11px] lg:text-[#475569] lg:text-[14px]">
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
                <div className="flex items-baseline justify-center mt-6">
                  <span className="text-[36px] lg:text-[56px] text-bgPrimary font-bold">
                    $*****
                  </span>
                  <span className="text-[#64748B] font-semibold text-[11px] lg:text-[16px]">
                    {" "}
                    /Month
                  </span>
                </div>
                <a href="#newsletter">
                  <button className="rounded-md bg-bgPrimary text-white py-3 px-5 text-center w-full mt-6 text-[11px]">
                    Select Plan
                  </button>
                </a>
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
        <div className="my-container py-14 lg:py-24">
          <div className="relative text-center w-full">
            <h3 className="text-[#475569] text-[16px] lg:text-[32px] font-semibold w-[60%] mx-auto">
              What our users are saying about Cueprise
            </h3>

            <div className="absolute right-5 top-0 lg:-top-16 lg:right-28">
              <img
                src={RedStarGroup}
                alt="A group of stars"
                className="w-[48px] h-[48px] lg:w-[123px] lg:h-[123px]"
              />
            </div>
          </div>

          <div className="flex gap-4 py-20 w-full overflow-x-scroll">
            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative flex flex-col justify-between">
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
                  Cueprise has greatly eased my entrepreneurial journey by
                  assisting with paying the salaries of my employees and
                  accepting payments from customers
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6 ">
                <img
                  src={Mask1}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Ore Solabomi
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    CEO, Tames Clothing
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative flex flex-col justify-between">
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
                  Cueprise has relieved me of the constant end-of-month hassle
                  of paying the salaries of my employees.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={Mask2}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    Bola Victor
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Human Resource Manager
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative flex flex-col justify-between">
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
                  Managing my resources used to be a nightmare, but since I
                  started using Cueprise, it's been a breeze. The software helps
                  me schedule tasks, assign team members, and track progress -
                  which has allowed me to stay on top of everything and avoid
                  any bottlenecks.
                </p>
              </div>
              <div className="border-t flex items-center mt-4 px-4 py-2 lg:px-8 lg:py-4 gap-6">
                <img
                  src={Mask4}
                  alt="An avatar for the reviewer"
                  className="w-[24px] h-[24px] lg:w-[36px] lg:h-[36px]"
                />

                <div className="flex flex-col justify-between">
                  <span className="text-[8px] lg:text-[14px] text-[#64748B] font-semibold">
                    James Deen
                  </span>
                  <span className="text-[8px] lg:text-[14px] text-[#94A3B8]">
                    Product Designer
                  </span>
                </div>
              </div>
            </div>

            <div className="min-w-[206px] lg:min-w-[375px] border border-[#EDEDED] relative flex flex-col justify-between">
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
                  I started using Cueprise to manage my inventory and it has
                  completely transformed the way I do business. The automated
                  ordering processes have saved me so much time, and the ability
                  to track stock levels in real-time has helped me avoid
                  stockouts.
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

      <section id="newsletter" className="">
        <div className="bg-[#B888F1] bg-opacity-[12%] py-20 lg:py-0">
          <div className="my-container lg:flex items-center justify-end lg:min-h-screen relative">
            <div className="bg-[#634D7C] border-none rounded-[15px] absolute lg:left-0 lg:top-[30%] left-10 -top-16">
              <div className="relative">
                <img
                  src={NewsletterSmall}
                  alt="Another pattern design"
                  className="w-[255px] lg:w-[539px] lg:h-[100%]"
                />
                <div className="absolute lg:w-inherit lg:h-inherit top-0 left-0 w-full h-full lg:p-8 p-4 ">
                  <div className="flex flex-col gap-2 lg:gap-4 relative">
                    <span className="text-[10px] lg:text-[16px] text-white">
                      JOIN THE WAITING LIST
                    </span>
                    <p className="text-[12px] lg:text-[32px] lg:w-[90%] text-white ">
                      Get exciting updates about Cueprise and Productivity.
                    </p>

                    <form
                      className="mt-2 lg:mt-4 flex"
                      onSubmit={handleFormSubmit}
                    >
                      <input
                        type="text"
                        placeholder="YOUR EMAIL ADDRESS"
                        className="py-2 lg:py-4 px-4 lg:px-6 placeholder:text-[#1B1C31] placeholder:opacity-40 text-[8px] lg:text-[14px] w-[70%] bg-white bg-opacity-60 rounded-l-lg focus:outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <button
                        type="submit"
                        className="flex items-center justify-center text-[8px] lg:text-[14px] text-white bg-bgPrimary text-center p-2 lg:py-4 lg:px-6 rounded-r-lg hover:bg-[#B491FB]"
                      >
                        {formLoading ? (
                          <svg
                            className="w-5 h-5 mr-3 -ml-1 text-white animate-spin"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              stroke-width="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                        ) : null}
                        SUBSCRIBE
                      </button>
                    </form>

                    {formStatus === "Error" && formError ? (
                      <div className="bg-white border border-red-500 rounded-sm p-2 mt-4">
                        <span className="text-red-500 text-sm">
                          {formError}
                        </span>
                      </div>
                    ) : formStatus === "Success" ? (
                      <div className="mt-4 bg-white border border-green-500 rounded-sm p-2">
                        <span className="text-green-500 text-sm">
                          Added Successfully
                        </span>
                      </div>
                    ) : null}
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
