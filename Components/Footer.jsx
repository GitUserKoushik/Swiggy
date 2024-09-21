import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function Footer() {
  return (
    <div className="w-full bg-[#ffe1cc] h-[30vh] md:h-[25vh] lg:h-[45vh] flex flex-column justify-center shadow-lg mt-10">
      <div className="h-[10%] w-[20%] ">
        <div className="h-[30%] w-full flex justify-center items-center text-[orange] font-semibold ">
        <HiOutlineBuildingOffice2 color="black" size={20} /> SWIGGY TECHNOLOGIES

        </div>
      </div>
      <div className="h-[85%] w-[80%]  ">
        <div className="h-[50%] w-[90%] m-auto flex justify-between items-center ">
        <div className="cursor-pointer">
            <div className="font-semibold">
            Company
            </div>
            <div className="text-[grey] font-normal ">
                About Us
            </div>
            <div className="text-[grey] font-normal ">
                Careers
            </div>
            <div className="text-[grey] font-normal ">
                Team
            </div>
        

        </div>
        <div className="cursor-pointer">
        <div className="font-semibold">
            Contact Us
            </div>
            <div className="text-[grey] font-normal ">
                Help & Support
            </div>
            <div className="text-[grey]  font-normal">
                Partner with Us
            </div>
            <div className="text-[grey] font-normal ">
                Ride with Us
            </div>
       
        </div>
        <div className="cursor-pointer">
        <div className="font-semibold">
        Available in
            </div>
            <div className="text-[grey] font-normal ">
               Hyderabad
            </div>
            <div className="text-[grey] font-normal ">
                Bangalore
            </div>
            <div className="text-[grey] font-normal ">
               Gurgaon
            </div>
        </div>
        <div className="cursor-pointer">
        <div className="font-semibold">
        Life at Swiggy
            </div>
            <div className="text-[grey] font-normal ">
                Explore
            </div>
            <div className="text-[grey] font-normal ">
               Swiggy News
            </div>
            <div className="text-[grey] font-normal ">
               Snackables
            </div>
        </div>
        </div>
        <div className="h-[50%] w-[90%] m-auto flex justify-between items-center " >
            <div>
            <div className="font-semibold">
            Legal
            </div>
            <div className="text-[grey] font-normal cursor-pointer">
              Terms & Conditions
            </div>
            <div className="text-[grey] font-normal cursor-pointer">
              Privacy Policy
            </div>
            <div className="text-[grey] font-normal cursor-pointer">
             Cookies Policy
            </div>
            </div>
            <div>
            <div className="font-semibold">
            Social Links
            </div>
            <div className="flex justify-between items-center gap-5 mt-5 cursor-pointer">
            <FaLinkedin size={20} />
            <FaInstagram size={20} />
            <FaFacebookF size={20} />
            <FaPinterest size={20} />
            <FaTwitter size={20} />
            </div>
            </div>

        </div>
     
      </div>
    </div>
  );
}
