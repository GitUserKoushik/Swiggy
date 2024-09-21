"use client"
import Image from "next/image";
import React, { useState } from "react";
import flag from '../Images/india.webp';
import { IoMdMail } from "react-icons/io";
import google from '../Images/google.webp';
import Link from "next/link";
import { FaPhone } from "react-icons/fa6";
import { MdPhone } from "react-icons/md";
import { useRouter } from "next/navigation";

export default function Login() {

  const router = useRouter();

  //All states
  const [swicthEmailPhone,setSwitchEmailPhone] = useState(false);

  //All functions

  //Switching email and phone
  const handleSwicthEmailPhone =()=>{
    setSwitchEmailPhone(!swicthEmailPhone);
  }
  //Login 
  const handleLogin =()=>{
    localStorage.setItem("user_id",2);
    router.push("/")
    
  }

  //Firebase to be implemented for otp verification

  return (
    <div className='bg-[white] w-[100%] h-[100vh] md:bg-[#e8e8e8] lg:bg-[#e8e8e8] '>
    <div className='lg:h-[50px] h-[50px] sm:h-[100px] md:h-[100px] w-full bg-[white] md:bg-[#e8e8e8] lg:bg-[#e8e8e8] '>

        </div>
    <div className="w-11/12 m-auto p-2 md:p-4 lg:p-4 bg-[white]  md:border-2 lg:border-2 rounded-xl sm:w-8/12 md:w-8/12 lg:w-5/12 md:shadow-lg lg:shadow-lg">
    <div className="w-11/12 m-auto p-1 ">
      <div className="w-11/12 m-auto ">
        <h1 className="text-center text-3xl  font-bold">Login</h1>

        {swicthEmailPhone?  <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
        <div className="w-9/12 border-l-2 text-lg font-normal">
          <input placeholder="Email" style={{outline:"none"}} className="w-11/12 pl-2" />
        </div>
      </div>:  <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
          <div className="flex justify-center items-center text-lg h-11/12 w-3/12 gap-2 ">
            <Image alt="" className="w-[20px] h-[15px] rounded-sm" src={flag} />
            <h2>
                +91
            </h2>

          </div>
          <div className="w-9/12 border-l-2 text-lg font-normal">
            <input placeholder="Phone" style={{outline:"none"}} className="w-11/12 pl-2" />
          </div>
        </div>}
      

      

        
        {/* <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
          <div className="w-9/12 border-l-2 text-lg font-normal">
            <input placeholder="Phone" style={{outline:"none"}} className="w-11/12 pl-2" />
          </div>
        </div> */}

        <div onClick={handleLogin} className="w-full h-[40px] m-auto bg-[#ff4949] rounded-lg flex justify-center items-center mt-5 hover:bg-[red] cursor-pointer">
            <h1 className="text-[white]  font-bold " >
                Login
            </h1>

        </div>

        <h1 className="text-center text-xl font-normal pt-2">
            or
        </h1>

        <div onClick={handleSwicthEmailPhone} className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-center items-center mt-5 gap-2 cursor-pointer">
          {swicthEmailPhone?<MdPhone size={22} color="#0073ff" />:<IoMdMail size={22} color="red" />}
        
        <h1 className="text-[grey]  font-semibold " >
              {swicthEmailPhone?"Continue with Phone":"Continue with email"}
            </h1>
          
        </div>

        <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-center items-center mt-5 gap-2 cursor-pointer">
            <Image alt="" className="w-[35px] " src={google} />
            <h1 className="text-[grey]  font-semibold " >
                Sign in with Google
            </h1>
        </div>

        <div className="border-t-2 border-[lightgrey] w-full h-[50px] mt-10 ">
        <h1 className="text-[grey]  font-normal pt-5 " >
                New to Swiggy? <span className="text-[red] ">
                  <Link href="register">
                  Create Account
                  </Link>
                
                </span>
            </h1>
        </div>


      </div>
    </div>
    </div>
    </div>
  );
}
