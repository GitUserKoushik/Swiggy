import Image from 'next/image'
import React from 'react'

export default function TrendingCards({image,title,priceFrom}) { 
  return (
    <div className='w-[48%] h-[220px] sm:h-[310px] md:h-[265px] p-[5px] lg:h-[300px] border border-[lightgrey] rounded-xl shadow-xl '>
        <Image className='rounded-lg object-fill h-[40%] sm:h-[50%] md:h-[50%] lg:h-[55%]  ' src={image}/>
        <div className='w-11/12 m-auto text-[brown] text-lg font-bold mt-3'>
            <h1>
             {title}
            </h1>
        </div>
        <div className='w-11/12 m-auto text-xs sm:text-lg md:text-sm lg:text-base mt-2 md:mt-1 lg:mt-1  '>
            <h1>
            Starts from <span className='font-extrabold text-[green] '>{" "} ₹{priceFrom}</span>
            </h1>
        </div>
        <div className='w-11/12 m-auto h-[45px] mt-3 lg:mt-3 md:mt-3 flex  items-center '>
           <div className='bg-[red] w-full sm:w-2/4 md:w-[60%] lg:w-[50%]  p-[5px] py-1 rounded-md flex justify-center items-center text-sm sm:text-sm md:text-sm lg:text-sm font-semibold text-[white] hover:bg-[brown] '>
           Order Now

           </div>
        </div>
      
    </div>
  )
}
