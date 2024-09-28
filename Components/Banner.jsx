"use client";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner2 from "../app/Images/foodbanner2.jpg";
import banner1 from "../app/Images/foodbanner1.webp";
import banner3 from "../app/Images/foodbanner4.jpg";
import banner4 from "../app/Images/foodbanner3.webp"; 
import Image from "next/image";

export default function Banner() {
  let arr = [banner1,banner2,banner3,banner4];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    adaptiveHeight: true,
    arrows:false
  };

  return (
    <Slider  {...settings}>
      {arr.map((items, index) => {
        return (
          <div key={index} className="outline-none border-none">
            <Image
            alt=""
              className="w-full h-[170px] md:h-[300px] sm:h-[280px] lg:h-[400px] rounded-xl object-fill object-right md:object-left-bottom "
              src={items}
              height={2000}
              width={2000}
            />
          </div>
        );
      })}
    </Slider>
  );
}
