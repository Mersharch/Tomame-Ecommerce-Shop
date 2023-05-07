import Image from "next/image";
import React from "react";
import styles from '@/app/components/home/hero.module.css'
import Carousel from "./Carousel";

const Hero = () => {
  return (
    <main>
      <div className="w-[100%]">
              <Carousel />
        
      </div>
    </main>
  );
};

export default Hero;
