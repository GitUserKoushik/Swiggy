"use client"
import Link from 'next/link'
import React from 'react'
import { IoMdHeartEmpty } from 'react-icons/io'
import { IoSearchOutline } from 'react-icons/io5'
import { PiShoppingCartSimpleLight } from 'react-icons/pi'

export default function LowHeader({setSearchPopup,isLoggedIn}) {
  return (
    <div className="w-11/12 flex justify-between items-center block lg:hidden md:hidden sm:hidden  m-auto mt-3 gap-3">
    <div onClick={()=> setSearchPopup(true)} className=" h-10 rounded-lg flex justify-between items-center block lg:hidden md:hidden sm:hidden">
      <IoSearchOutline size={20} />
    </div>
  {isLoggedIn()?  <div className="flex justify-between items-center gap-3">
      <Link href='favorites' className="block lg:hidden md:hidden sm:hidden">
        <IoMdHeartEmpty size={20} />
      </Link>
      <Link href='cart' className="block lg:hidden md:hidden sm:hidden">
        <PiShoppingCartSimpleLight size={20} />
      </Link>
    </div>:null}
  </div>
  )
}
