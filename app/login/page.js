import Image from "next/image";
import React from "react";
import flag from '../Images/india.webp';
import { IoMdMail } from "react-icons/io";
import google from '../Images/google.webp';
import Link from "next/link";

export default function Login() {
  return (
    <div className="w-11/12 m-auto p-1  ">
      <div className="w-11/12 m-auto ">
        <h1 className="text-center text-3xl  font-bold">Login</h1>
        <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
          <div className="flex justify-center items-center text-lg h-11/12 w-3/12 gap-2 ">
            <Image alt="" className="w-4/12 h-4/12 rounded-sm" src={flag} />
            <h2>
                +91
            </h2>

          </div>
          <div className="w-9/12 border-l-2 text-lg font-normal">
            <input placeholder="Phone" style={{outline:"none"}} className="w-11/12 pl-2" />
          </div>
        </div>

        
        {/* <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
          <div className="w-9/12 border-l-2 text-lg font-normal">
            <input placeholder="Phone" style={{outline:"none"}} className="w-11/12 pl-2" />
          </div>
        </div> */}

        <div className="w-full h-[40px] m-auto bg-[#ff4949] rounded-lg flex justify-center items-center mt-5 hover:bg-[red] ">
            <h1 className="text-[white]  font-bold " >
                Send OTP 
            </h1>

        </div>

        <h1 className="text-center text-xl font-normal pt-2">
            or
        </h1>

        <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-center items-center mt-5 gap-2">
        <IoMdMail size={22} color="red" />
        <h1 className="text-[grey]  font-semibold " >
                Continue with email
            </h1>
          
        </div>

        <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-center items-center mt-5 gap-2 ">
            <Image className="w-[35px] " src={google} />
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
  );
}
