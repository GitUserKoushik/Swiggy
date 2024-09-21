"use client"
import React from 'react';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMenu, IoMdHeartEmpty } from "react-icons/io";
import { CiMenuFries, CiUser } from "react-icons/ci";
import Link from 'next/link';

export default function Header({sideBarToggle,setSideBarToggle,profilePanel,setProfilePanel,setSearchPopup}) {

  return (
    <div>
       <div className="header">
        <div className="header_inner">
          <div className="logo">
            <h1>SWIGGY</h1>
          </div>
          <div className="profile_search">
            <div onClick={()=>setSearchPopup(true)} className="hidden md:block sm:block">
              <IoSearchOutline size={20} />
            </div>
            <Link href='cart' className="hidden md:block sm:block">
              <PiShoppingCartSimpleLight size={20} />
            </Link>
            <Link href='favorites' className="hidden md:block sm:block">
              <IoMdHeartEmpty size={20} />
            </Link>

            <div onClick={()=>{
              setProfilePanel(!profilePanel);
              setSideBarToggle(false)
            } } className="profile">
              <CiUser  size={20} />
            </div>
            <div  onClick={()=>{
              setSideBarToggle(!sideBarToggle)
              setProfilePanel(false);
            }} className="block lg:hidden  flex justify-center items-center ">
              <CiMenuFries size={20} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full hidden lg:block  h-12 mx-auto bg-[#ffe6cd]">
        <div className="w-6/12 lg:w-8/12 md:w-8/12 h-full mx-auto text-sm flex justify-between items-center text-[brown] font-semibold">
          <Link href='/' className="cursor-pointer hover:text-[orange]">HOME</Link>
          <select style={{outline:"none"}} className="cursor-pointer hover:text-[orange] bg-[#ffe6cd] ">
            <option value="">CATEGORIES</option>
            <option value="">STARTERS</option>
            <option value="">MAIN COURSE</option>
            <option value="">SNACKS</option>
            <option value="">DESSERTS</option>
            <option value="">REFRESHERS</option>
          </select>
          <select className="cursor-pointer hover:text-[orange] bg-[#ffe6cd]">
          <option value="">PRICE</option>
            <option value="">UNDER 150</option>
            <option value="">UNDER 300</option>
            <option value="">UNDER 500</option>
            <option value="">UNDER 600</option>
            <option value="">UNDER 800</option>
          </select>
          <Link href='deals' className="cursor-pointer hover:text-[orange]">DEALS & OFFERS</Link>
          <Link href='aboutus' className="cursor-pointer hover:text-[orange]">ABOUT</Link>
          <Link href='contactus' className="cursor-pointer hover:text-[orange]">CONTACT</Link>
        </div>
      </div>

     
    </div>
  )
}
