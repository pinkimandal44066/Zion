import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      
  <div className=' bg-black  lg:p-14 md:p-10 sm:p-4 p-14 cursor-pointer'>
<div className=' text-white lg:flex md:flex  md:mx-10  sm:flex  sm:mx-10  justify-between items-center  lg:text-base
 lg:mx-6 mx-2 ' >
<p>
      &copy; <span id="currentYear"></span> All Rights Reserved. Design by
      Developer by Technofav
    </p>


    <div className='text-white flex gap-4  text-xl mx-10 mt-3 lg:mt-0 md:mt-0  sm:mt-0 lg:mx-0 md:mx-0 '>
    <FaFacebookF />
    <FaTwitter  />
    <TfiYoutube />
    <FaInstagram />
    </div>
</div>
</div>
    </>
  )
}

export default Footer
