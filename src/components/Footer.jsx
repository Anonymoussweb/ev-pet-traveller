import React from "react";
import { IoCallSharp } from "react-icons/io5";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaFacebook } from "react-icons/fa6";
import { IoIosSend, IoLogoWhatsapp } from "react-icons/io";
import { FaTwitter, FaFacebookF } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="flex font-Inter bg-[#4D4D4D] h-[550px] px-16 py-10 justify-between flex-wrap relative max-[713px]:pt-24 max-[713px]:px-6 max-sm:h-max max-sm:pb-28">
        <div className="absolute top-[-75px] left-[50%] translate-x-[-50%] w-[150px] h-[150px] bg-[url(/images/dog.png)] bg-cover bg-center bg-no-repeat rounded-full"></div>
        <div className="max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:items-center">
          <div>
            <img className="w-[240px] max-sm:w-[180px]" src="/images/WOOFWATTT.png" alt="" />
          </div>
          <div className="flex items-center gap-4 text-white mt-6 cursor-pointer">
            <IoCall size={25} />
            <p className="text-xl">+9265879879</p>
          </div>
          <div className="flex items-center gap-4 text-white mt-3 cursor-pointer">
            <MdOutlineMailOutline size={25} />
            <p className="text-xl">woofwatt@gmail.com</p>
          </div>
          <div className="flex gap-2 mt-6">
            <div className="w-10 h-10 rounded-full text-2xl bg-[#949494] flex justify-center items-center text-[#4D4D4D] hover:bg-white cursor-pointer duration-200">
              <FaFacebookF />
            </div>
            <div className=" w-10 h-10 rounded-full text-3xl bg-[#949494] flex justify-center items-center text-[#4D4D4D] hover:bg-white cursor-pointer duration-200">
              <IoIosSend />
            </div>
            <div className="w-10 h-10 rounded-full text-2xl bg-[#949494] flex justify-center items-center text-[#4D4D4D] hover:bg-white cursor-pointer duration-200">
              <FaTwitter />
            </div>
            <div className="text-[42px] flex justify-center items-center bg-[#4D4D4D] hover:text-white duration-200 cursor-pointer text-[#949494]">
              <IoLogoWhatsapp />
            </div>
            <div className="text-[42px] flex justify-center items-center bg-[#4D4D4D] hover:text-white duration-200 cursor-pointer text-[#949494]">
              <RiInstagramFill />
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center px-5 text-white w-[70%] max-[915px]:w-full max-[713px]:px-2 max-sm:flex-wrap max-h-screen mt-10 max-[360px]:gap-4">
          <div className="space-y-2">
            <p className="text-xl cursor-pointer">Home</p>
            <p>Pet</p>
            <p>Types of electric cars</p>
            <p>Charge stations</p>
            <p>Airbnb</p>
          </div>
          <div className="space-y-2">
            <p className="text-xl cursor-pointer">About us</p>
            <p>Press</p>
            <p>FAQs of electric cars</p>
            <p>Contact us</p>
            <p>Content Policy</p>
          </div>
          <div className="space-y-2 max-[493px]:mt-8 max-[360px]:mt-0">
            <p className="text-xl cursor-pointer">Blog</p>
            <p>Join community</p>
            <p>Tell us about a place</p>
            <p>Pet travel perks</p>
            <p>Write a review</p>
          </div>
          <div className="space-y-2 max-[493px]:mt-8 max-[360px]:mt-0">
            <p className="text-xl cursor-pointer">Sitemap</p>
            <p>Terms & Conditions</p>
            <p>Privacy policy</p>
            <p>Our services</p>
            <p>Learn more</p>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#4D4D4D]">
        <hr className="bg-[#ffffff3f] w-full h-[1px]" />
        <div className="flex gap-2 text-white justify-center py-4">
          &copy; <p>2009-2024 Woof Media, Inc,</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
