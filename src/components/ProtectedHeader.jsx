import React from "react";
import { BiSolidBell } from "react-icons/bi";
import { FaWallet } from "react-icons/fa6";
import { HiMiniUserCircle } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

const ProtectedHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="w-[87%] font-Inter flex justify-between items-center my-10 mx-auto max-[900px]:flex-col max-[900px]:gap-6">
      <Link className="max-[900px]:mr-auto" to="/home-page">
        <img src="/images/WOOFWATTT.png" alt="logo" />
      </Link>
      {/* <div className="flex items-center gap-10 w-[80%] justify-between max-[900px]:w-full"> */}
      <div className="w-1/2 max-[900px]:w-[80%]">
        <div className="relative">
          <input
            className="w-full bg-gray-200 py-2 pl-6 pr-12 outline-none rounded-full"
            type="text"
            placeholder="Search"
          />
          <div className="absolute top-2 right-5">
            <IoSearchOutline size={25} />
          </div>
        </div>
      </div>
      {/* =================== */}
      <div className="flex gap-5 justify-center items-center">
        <div
          className="flex flex-col justify-center items-center mt-1 cursor-pointer duration-200 hover:text-green-500"
          onClick={() => navigate("/payments")}
        >
          <FaWallet size={22} />
          <p className="text-gray-500 hover:text-green-500">Payment</p>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer duration-200 hover:text-green-500"
          onClick={() => navigate("/notifications")}
        >
          <BiSolidBell size={25} />

          <p className="text-gray-500 duration-200 hover:text-green-500">Notification</p>
        </div>
        <div
          className="flex flex-col items-center justify-center cursor-pointer duration-200 hover:text-green-500"
          onClick={() => navigate("/profile")}
        >
          <HiMiniUserCircle size={27} />
          <p className="text-gray-500 mt-[-1px] duration-200 hover:text-green-500">Profile</p>
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default ProtectedHeader;
