import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className=" bg-black  lg:p-14 md:p-10 sm:p-4 p-14 cursor-pointer">
        <div
          className=" text-white lg:flex md:flex  md:mx-10  sm:flex  sm:mx-10   justify-between items-center
 lg:text-base 
 lg:mx-6 mx-0"
        >
          <p className="lg:w-96 md:w-96 sm:w-80">
            ZIONTECH Address 22nd Floor, 26/1, BRIGADE GATEWAY, Dr Rajkumar Rd,
            Malleshwara, Bengaluru, Karnataka 560055
          </p>

          <div className="text-white flex flex-col items-center gap-4 mx-0 mt-6 lg:mt-0 md:mt-0 sm:mt-0 lg:mx-0 md:mx-0">
            <p className="sm:w-60 lg:w-full ">
              &copy; <span id=""></span> All Rights Reserved. Design by
              Developer by Technofav
            </p>
            <div className="flex gap-4 text-2xl lg:block md:block sm:block hidden lg:flex md:flex sm:flex">
              <FaFacebookF />
              <FaTwitter />
              <TfiYoutube />
              <FaInstagram />
            </div>
          </div>
          <div className="flex   gap-4 text-4xl  lg:hidden md:hidden sm:hidden block mt-4 mx-3">
            <FaFacebookF />
            <FaTwitter />
            <TfiYoutube />
            <FaInstagram />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
