import Link from "next/link";
import React from "react";
import { CiSettings, CiUser } from "react-icons/ci";
import { GoInfo } from "react-icons/go";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { MdOutlinePrivacyTip } from "react-icons/md";
import { PiArrowLeftLight, PiHandshakeLight } from "react-icons/pi";
import { RiCustomerService2Line } from "react-icons/ri";
import { FiLogOut } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function ProfileSidePanel({
  setProfilePanelToggle,
  profilePanelToggle,
}) {

    //Logout
    const logOut = ()=>{
      localStorage.clear()
      
   }


  return (
    <>
      <div
        onClick={() => setProfilePanelToggle(false)}
        style={{ backdropFilter: "blur(5px)", overflow: "hidden" }}
        className={`w-full ${
          profilePanelToggle ? "block" : "hidden"
        } h-full bg-[#0101013f] fixed z-30`}
      >
        {" "}
      </div>
      <aside
        style={{ scrollbarWidth: "none" }}
        className={`${
          profilePanelToggle
            ? "translate-x-0 duration-200 ease-linear"
            : "translate-x-0 duration-100 ease-linear"
        } ${
          profilePanelToggle ? "w-[75%] sm:w-[50%] md:w-[40%] lg:w-[40%]" : "w-[0%]"
        } h-[100%] bg-[white] fixed z-30 overflow-auto scrollbar-hide`}
      >
        <div className="w-11/12 h-[35px]  m-auto flex justify-end items-center font-bold mt-3">
          <div
            onClick={() => setProfilePanelToggle(false)}
            className="border shadow-lg p-1.5 rounded-lg"
          >
            <PiArrowLeftLight size={25} />
          </div>
        </div>

        <div className="w-full h-full p-3  ">
          <div className="w-full flex flex-col justify-between items-baseline gap-4 text-[#545454]  ">
            <div className="w-[70px] h-[70px] shadow-lg m-auto border-2 border-[lightgrey] rounded-full flex justify-center items-center ">
              <CiUser size={45} />
            </div>
            <div className="font-bold m-auto">KOUSHIK CHAKRABORTY</div>

            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="myorders"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2  rounded-lg border-[lightgrey] flex items-center gap-4 cursor-pointer mt-5 "
            >
              <LiaShoppingBagSolid size={22} /> MY ORDERS
            </Link>
            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="myinfo"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey]  flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <GoInfo size={22} /> MY INFO{" "}
            </Link>

            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="settings"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              {" "}
              <CiSettings size={24} /> SETTINGS
            </Link>

            {/* <Link
              href="termscons"
              onClick={() => setProfilePanelToggle(false)}
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              <PiHandshakeLight size={22} /> TERMS & CONDITIONS{" "}
            </Link> */}
            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="privacypolicy"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              <IoMdNotificationsOutline size={22} /> NOTIFICATIONS
            </Link>
            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="helpsupport"
              className="w-full hover:bg-[#ffedd1] hover:text-[brown] p-2  rounded-lg  border-[lightgrey] flex items-center gap-4 cursor-pointer"
            >
              <RiCustomerService2Line size={22} /> HELP & SUPPORT
            </Link>
            <Link
              onClick={() => setProfilePanelToggle(false)}
              href="login"
              className="w-10z/12 hover:bg-[#ffedd1] hover:text-[brown] p-2 rounded-lg bg-[#ff5050] text-[white] border-[lightgrey] flex items-center justify-center gap-4 cursor-pointer"
            >
              <FiLogOut size={22}/> LOG OUT
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
