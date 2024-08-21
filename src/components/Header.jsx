import React, { useState } from "react";
import ListItem from "./ListItem";
import LoginSignup from "../pages/LoginSignup";
import { Link } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import ProtectedHeader from "./ProtectedHeader";

const Header = () => {
  const [login, setLogin] = useState(false);
  let accessToken = localStorage.getItem("accessToken");
  const [swap, setSwap] = useState(false);
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {accessToken ? (
        <ProtectedHeader />
      ) : (
        <div className="w-full pb-5 bg-white max-sm:pb-6 font-Inter">
          <div className="flex justify-between items-center flex-wrap px-24 pt-10 max-[870px]:px-6">
            <Link to="/">
              <img src="/images/WOOFWATTT.png" alt="logo" />
            </Link>
            <div>
              <p className="text-[#00000073] text-[20px] font-Inter font-medium max-sm:hidden duration-200 cursor-pointer hover:text-black">
                Woofwatt@gmail.com
              </p>
              <HiMiniBars3
                size={30}
                className="hidden max-sm:block"
                onClick={() => setToggle(true)}
              />
            </div>
            <div className="flex gap-4 font-Inter font-semibold max-md:w-full max-md:justify-center max-md:mt-4 max-sm:hidden">
              <div
                className="border-black border-[1px] px-6 py-1 cursor-pointer duration-200 hover:bg-black hover:text-white"
                onClick={() => {
                  setLogin(true);
                  setSwap(true);
                }}
              >
                Sign Up
              </div>
              <div
                className="px-6 py-1 bg-green-500 text-white border-green-500 border-[1px] duration-200 cursor-pointer hover:bg-white hover:text-green-500"
                onClick={() => {
                  setLogin(true);
                  setSwap(false);
                }}
              >
                Login
              </div>
            </div>
            <div
              className={`w-full fixed ${
                toggle ? "top-0" : "top-[-100%]"
              }  left-0 py-6 z-20 bg-white duration-200`}
            >
              <div className="flex flex-col justify-center items-center w-full relative">
                <HiMiniBars3
                  size={20}
                  className="absolute top-0 right-4"
                  onClick={() => setToggle((prev) => !prev)}
                />
                <div>
                  <ListItem title="Home" to="/" />
                </div>
                <div>
                  <ListItem title="Plan trip" to="/plan-trip" />
                </div>
                <div>
                  <ListItem title="Map" to="/map" />
                </div>
                <div>
                  <ListItem title="About us" to="/about-us" />
                </div>
                <div>
                  <ListItem title="Our services" to="/our-services" />
                </div>
                <div>
                  <ListItem title="EV" to="/ev" />
                </div>
              </div>
              <div className="flex gap-2 w-full justify-center mt-2">
                <div
                  className="border-green-500 text-green-500 border-[1px] px-3 py-1 cursor-pointer"
                  onClick={() => {
                    setLogin(true);
                    setSwap(true);
                  }}
                >
                  Sign Up
                </div>
                <div
                  className="px-6 py-1 bg-green-500 text-white cursor-pointer"
                  onClick={() => {
                    setLogin(true);
                    setSwap(false);
                  }}
                >
                  Login
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center gap-14 font-bold text-[20px] pb-2 pt-10 max-md:gap-4 max-sm:hidden">
            <div>
              <ListItem title="Home" to="/" />
            </div>
            <div>
              <ListItem title="Plan trip" to="/plan-trip" />
            </div>
            <div>
              <ListItem title="Map" to="/map" />
            </div>
            <div>
              <ListItem title="About us" to="/about-us" />
            </div>
            <div>
              <ListItem title="Our services" to="/our-services" />
            </div>
            <div>
              <ListItem title="EV" to="/ev" />
            </div>
          </div>
        </div>
      )}
      {login && <LoginSignup setLogin={setLogin} swap={swap} />}
    </>
  );
};

export default Header;
