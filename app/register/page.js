import Image from 'next/image'
import React from 'react';
import google from '../Images/google.webp';

export default function Register() {
  return (
    <div className='bg-[white] w-[100%] h-[100vh] md:bg-[#e8e8e8] lg:bg-[#e8e8e8] '>
        <div className='lg:h-[20px] md:h-[100px] w-full bg-[#e8e8e8] hidden md:block lg:block '>

        </div>
 <div className="w-11/12 m-auto p-2 md:p-4 lg:p-4 bg-[white]  md:border-2 lg:border-2 rounded-xl sm:w-8/12 md:w-8/12 lg:w-5/12 md:shadow-lg lg:shadow-lg">
    <div className="w-11/12  m-auto ">
      <h1 className="text-center text-3xl  font-bold">Sign Up</h1>
      <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
        <div className="w-9/12 border-l-2 text-lg font-normal">
          <input placeholder="Full Name" style={{outline:"none"}} className="w-11/12 pl-2" />
        </div>
      </div>
      <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
        <div className="w-9/12 border-l-2 text-lg font-normal">
          <input placeholder="Email" style={{outline:"none"}} className="w-11/12 pl-2" />
        </div>
      </div>

      <div className='flex justify-center items-center gap-2 mt-5'> 
        <input type='checkbox' style={{outline:"none"}}  />
        <h1 className='text-sm'>
            I hereby accept Swiggys <span className='text-[red] '>
                Terms & Conditions
            </span>
        </h1>

      </div>

      
      {/* <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-between items-center mt-5 ">
        <div className="w-9/12 border-l-2 text-lg font-normal">
          <input placeholder="Phone" style={{outline:"none"}} className="w-11/12 pl-2" />
        </div>
      </div> */}

      <div className="w-full h-[40px] m-auto bg-[#ff4949] rounded-lg flex justify-center items-center mt-5 hover:bg-[red] ">
          <h1 className="text-[white]  font-bold " >
             Create Account 
          </h1>

      </div>

      <h1 className="text-center text-xl font-normal pt-2">
          or
      </h1>


      <div className="w-full h-[40px] m-auto border-2 border-[lightgrey] rounded-lg flex justify-center items-center mt-5 gap-2 ">
          <Image className="w-[35px] " src={google} />
          <h1 className="text-[grey]  font-semibold " >
              Sign in with Google
          </h1>
      </div>

      <div className="border-t-2 border-[lightgrey] w-full h-[50px] md:mt-5 lg:mt-5 mt-10 ">
      <h1 className="text-[grey] text-center font-normal md:pt-3 lg:pt-3 pt-5 " >
              Already have an account? <span className="text-[red] ">
                Login
              </span>
          </h1>
      </div>


    </div>
  </div>
    </div>
   
  )
}
