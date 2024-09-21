"use client"
import React, { useState } from 'react';
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import { IoSearchOutline } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosMenu, IoMdHeartEmpty } from "react-icons/io";
import { CiMenuFries, CiUser } from "react-icons/ci";
import Link from 'next/link';
import SidePanel from './SidePanel';
import ProfileSidePanel from './ProfileSidePanel';
import SearchPopup from './SearchPopup';
import LowHeader from './LowHeader';

export default function Header({}) {

  const userId = localStorage.getItem("user_id");

  const isLoggedIn =()=>{
    if(userId !== "" && userId !== null && userId !== undefined){
      return true
    }
    else{
      return false
    }
  }

  //All states
  const [sideBarToggle,setSideBarToggle] = useState(false);
  const [profilePanelToggle,setProfilePanelToggle] = useState(false);
  const [searchPopupToggle,setSearchPopupToggle] = useState(false);

  return (
    <div>
       <div className="header">
        <div className="header_inner">
          <div className="logo">
            <h1>SWIGGY</h1>
          </div>
          <div className="profile_search">
            <div onClick={()=>setSearchPopupToggle(true)} className="hidden md:block sm:block">
              <IoSearchOutline size={20} />
            </div>
            {isLoggedIn()?<> <Link href='cart' className="hidden md:block sm:block">
              <PiShoppingCartSimpleLight size={20} />
            </Link>
            <Link href='favorites' className="hidden md:block sm:block">
              <IoMdHeartEmpty size={20} />
            </Link></>:null}
           

            {isLoggedIn()?  <div onClick={()=>{
              setProfilePanelToggle(!profilePanelToggle);
              setSideBarToggle(false)
            } } className="profile">
              <CiUser  size={20} />
            </div>:null}
          
            <div  onClick={()=>{
              setSideBarToggle(!sideBarToggle)
              setProfilePanelToggle(false);
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
          {isLoggedIn()?null:<>  <Link href='login' className="cursor-pointer hover:text-[orange] border-2  p-1 border-[brown] rounded-md ">LOGIN</Link>
            <Link href='register' className="cursor-pointer text-[white] bg-[brown] border-2 border-[brown] p-1 rounded-md hover:text-[orange]">SIGNUP</Link></>}
        
        </div>
      </div>
      <SidePanel sideBarToggle={sideBarToggle} setSideBarToggle={setSideBarToggle} />
       <ProfileSidePanel profilePanelToggle={profilePanelToggle} setProfilePanelToggle={setProfilePanelToggle}/>
        {searchPopupToggle?<SearchPopup setSearchPopup={setSearchPopupToggle} />:null}
        <LowHeader isLoggedIn={isLoggedIn} setSearchPopup={setSearchPopupToggle} />
    </div>
  )
}
