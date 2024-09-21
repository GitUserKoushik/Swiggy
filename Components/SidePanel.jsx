"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  PiArrowLeftLight,
  PiBuildingOfficeThin,
  PiTagLight,
} from "react-icons/pi";
import { GoHome } from "react-icons/go";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import { MdOutlineLocalOffer } from "react-icons/md";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { CiLogin, CiMail } from "react-icons/ci";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { FiUserPlus } from "react-icons/fi";

export default function SidePanel({ setSideBarToggle, sideBarToggle }) {

  //All states
  const [openCategories, setOpenCategories] = useState(false);
  const [openPrice, setOpenPrice] = useState(false);


  return (
    <>
      <div
        onClick={() => setSideBarToggle(false)}
        style={{ backdropFilter: "blur(5px)" }}
        className={`w-full ${
          sideBarToggle ? "block" : "hidden"
        } h-full bg-[#0101013f] fixed z-30`}
      >
        {" "}
      </div>

      <aside
        style={{ scrollbarWidth: "none" }}
        className={`${
          sideBarToggle
            ? "translate-x-0 duration-200 ease-linear"
            : "translate-x-0 duration-100 ease-linear"
        } ${
          sideBarToggle ? "w-[75%] sm:w-[50%] md:w-[40%] lg:w-[40%]"  : "w-[0%]"
        }   h-[100%] bg-[white] block  fixed z-30 overflow-auto scrollbar-hide`}
      >
        <div className="w-11/12 h-[35px]  m-auto flex justify-end items-center font-bold mt-3">
          <div
            onClick={() => setSideBarToggle(false)}
            className="border shadow-lg p-1.5 rounded-lg"
          >
            <PiArrowLeftLight size={25} />
          </div>
        </div>
        <div className="w-full h-full p-3  ">
          <div className="w-full flex flex-col justify-between items-baseline gap-4 text-[#545454] ">
            <Link
              onClick={() => setSideBarToggle(false)}
              href="/"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2  rounded-lg border-[lightgrey] flex items-center gap-4 cursor-pointer "
            >
              {" "}
              <GoHome size={22} /> HOME
            </Link>
            <div
              onClick={() => setOpenCategories(!openCategories)}
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <HiOutlineSquares2X2 size={22} /> CATEGORIES{" "}
              {openCategories ? (
                <SlArrowUp size={13} />
              ) : (
                <SlArrowDown size={13} />
              )}{" "}
            </div>
            {openCategories ? (
              <div className=" w-8/12 m-auto flex flex-col items-baseline">
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  STARTERS
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  MAIN COURSE
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  SNACKS
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  DESSERTS
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  REFRESHERS
                </div>
              </div>
            ) : null}

            <Link
              onClick={() => setSideBarToggle(false)}
              href="deals"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <PiTagLight size={22} /> DEALS & OFFERS
            </Link>

            <div
              onClick={() => setOpenPrice(!openPrice)}
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <LiaRupeeSignSolid size={22} /> PRICE{" "}
              {openPrice ? <SlArrowUp size={13} /> : <SlArrowDown size={13} />}{" "}
            </div>
            {openPrice ? (
              <div className=" w-8/12 m-auto flex flex-col items-baseline">
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  UNDER 150{" "}
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  UNDER 300
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  UNDER 500{" "}
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  UNDER 600{" "}
                </div>
                <div className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center cursor-pointer">
                  UNDER 800
                </div>
              </div>
            ) : null}

            <Link
              onClick={() => setSideBarToggle(false)}
              href="login"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <CiLogin size={22} /> LOGIN
            </Link>
            <Link
              onClick={() => setSideBarToggle(false)}
              href="register"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2  rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <FiUserPlus size={22} /> REGISTER
            </Link>
          </div>
        </div>
        <div className="w-full h-[200px]  "></div>
      </aside>
    </>
  );
}
