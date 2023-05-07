"use client";

import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

const Navbar = () => {
  return (
    <nav className="bg-white w-full h-16 flex flex-row p-3 items-center justify-between">
      <div className="flex flex-row items-center gap-2">
        <MenuIcon className="md:hidden text-sky-800" />
        {/* <Image
          alt="logo"
          src="/images/tomame-high-resolution-logo-color-on-transparent-background.png"
          width={100}
          height={100}
          className="w-20 h-10"
        /> */}
      </div>
      <div className="center"></div>
          <div className="right">
              {/* Searchbar */}
              {/* profile */}
              {/* cart */}
              <ShoppingBagOutlinedIcon className="text-sky-800" />
              
      </div>
    </nav>
  );
};

export default Navbar;
