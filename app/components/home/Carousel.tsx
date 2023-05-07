"use client";
import React, { useState } from "react";
import CarouselCard from "./CarouselCard";
import ArrowBackIosNewOutlinedIcon from "@mui/icons-material/ArrowBackIosNewOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import RadioButtonCheckedOutlinedIcon from "@mui/icons-material/RadioButtonCheckedOutlined";
import RadioButtonUncheckedOutlinedIcon from "@mui/icons-material/RadioButtonUncheckedOutlined";

const Carousel = () => {
  const imgs = [
    {
      img: "/images/hero1.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati?",
    },
    {
      img: "/images/hero2.jpg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati?",
    },
    {
      img: "/images/hero3.jpeg",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, obcaecati?",
    },
  ];
  const [active, setActive] = useState<number>(0);

  return (
    <div className="w-full overflow-hidden whitespace-nowrap items-center flex flex-col gap-3">
      <div className={`flex w-full flex-row ease-in-out duration-1000 gap-x-[2px] translate-x-[${-(active * 100)}%]`}>
        {imgs.map((item, index) => {
          return (
            <div key={index} className="w-full">
              <CarouselCard item={item} />
            </div>
          );
        })}
      </div>
      <div className="flex flex-row w-[80%] items-center justify-center gap-10">
        <ArrowBackIosNewOutlinedIcon
          onClick={() =>
            setActive((prev) => (prev === 0 ? imgs.length -1 : prev - 1))
          }
          className='text-sky-800'
                  
              />
              <div className="flex flex-row gap-4">
                  
        {active === 0 ? (
          <RadioButtonCheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(0)} />
        ) : (
          <RadioButtonUncheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(0)} />
        )}
        {active === 1 ? (
          <RadioButtonCheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(1)} />
        ) : (
          <RadioButtonUncheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(1)} />
        )}
        {active === 2 ? (
          <RadioButtonCheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(2)} />
        ) : (
          <RadioButtonUncheckedOutlinedIcon className="text-blue-400" onClick={() => setActive(2)} />
        )}
              </div>
        <ArrowForwardIosOutlinedIcon
          onClick={() => setActive((prev) => (prev === 2 ? 0 : prev + 1))}
          className='text-sky-800'
        />
      </div>
    </div>
  );
};

export default Carousel;
