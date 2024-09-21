import React, { useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

export default function SearchPopup({ setSearchPopup }) {

    const [searchInput,setSearchInput] = useState("");


  return (
    <div>
      <div
        onClick={() => setSearchPopup(false)}
        style={{ backdropFilter: "blur(5px)" }}
        className="w-full h-screen bg-[#0101013f] fixed z-20 overflow-hidden  "
      >
        {" "}
      </div>
      <div className="w-full fixed flex justify-center items-center z-20 p-4 gap-3">
        <div className="w-[80%] lg:w-[50%] md:w-[60%] sm:w-[70%] h-[50px] bg-[white] rounded-lg flex  items-center  ">
            <input value={searchInput} onChange={(e)=>setSearchInput(e.target.value)} style={{outline:"none"}}  type="text" className="mx-2 w-11/12" placeholder="Search" />
        </div>
        <div  onClick={() => setSearchPopup(false)} className=" w-[15%] sm:w-[15%] md:w-[10%] lg:w-[10%] bg-[#2b2b2b] rounded-lg h-[50px] flex justify-center items-center">
        <IoSearchOutline color="white" size={23} />
        </div>
      </div>
    </div>
  );
}
