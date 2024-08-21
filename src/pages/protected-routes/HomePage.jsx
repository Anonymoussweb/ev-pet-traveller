import React from "react";
import Layout from "../../components/Layout";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <Layout content={
        <>
          <div className="w-full font-Inter">
            <div className="w-[87%] mx-auto gap-4 flex text-white max-lg:flex-wrap cursor-pointer">
              <div className="w-[25%] min-w-[300px] h-[350px] bg-[url(/images/honda-dog-seat.jpg)] bg-no-repeat bg-center bg-cover rounded-3xl flex flex-col justify-between relative z-[1] overflow-hidden max-md:flex-auto group" onClick={() => navigate("/pet-profile")}>
                <div className="w-full h-full absolute z-[-1] bg-[#00000070]"></div>
                <h3 className="text-center mt-14 text-2xl font-bold">Pet Profile</h3>
                <IoIosArrowRoundForward className="text-6xl mb-6 ml-6 rotate-[-45deg] cursor-pointer duration-200 group-hover:rotate-[0deg]" />
              </div>
              <div className="w-[50%] h-[350px] bg-[url(/images/Rectangle83.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col justify-between z-[1] relative overflow-hidden max-lg:flex-auto group" onClick={() => navigate("/plan-trip")} >
                <div className="w-full h-full absolute z-[-1] bg-[#00000070]"></div>
                <img
                  className="w-[300px] object-cover mt-10 mx-auto"
                  src="/images/BWWOOFWATTS.png"
                  alt=""
                />
                <div className="flex justify-between px-8 pb-6 items-center">
                  <IoIosArrowRoundForward className="text-6xl cursor-pointer rotate-[-45deg] duration-200 group-hover:rotate-[0deg]" />
                  <h3 className="text-center text-2xl font-bold">Plan your trip now!</h3>
                </div>
              </div>
              <div className="w-[25%] h-[350px] bg-[url(/images/photobanner.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl flex justify-center items-center z-[1] relative overflow-hidden max-lg:w-full" onClick={() => navigate("/ev-charger")}>
                <div className="w-full h-full absolute z-[-1] bg-[#00000070]"></div>
                <h3 className="text-center mt-14 text-2xl font-bold">EV Cars</h3>
                {/* <button className="bg-green-500 whitespace-nowrap rounded-full px-2 py-1 border-green-500 duration-200 hover:bg-transparent hover:border-[1px] hover:text-green-500">
                  Request for a ride now!
                </button> */}
              </div>
            </div>
            <div className="w-[87%] mx-auto gap-4 flex mt-4 text-white max-md:flex-col">
              <div className="w-[35%] h-[350px] bg-[url(/images/electric-car-power-charging-1536x864.jpg)] bg-cover bg-center bg-no-repeat rounded-3xl flex flex-col justify-between z-[1] relative overflow-hidden max-md:w-full cursor-pointer group" onClick={() => navigate("/ev-charger")}>
                <div className="w-full h-full absolute z-[-1] bg-[#00000070]"></div>
                <h3 className="text-center mt-14 text-2xl font-bold">
                  EV Charger Station
                </h3>
                <IoIosArrowRoundForward className="text-6xl cursor-pointer mb-6 ml-6 rotate-[-45deg] duration-200 group-hover:rotate-[0deg]" />
              </div>
              <div className="w-[65%] h-[350px] bg-[url(/images/360_F_442275541_sQvlQSDzsCLPRyoC.jpg)] bg-cover bg-center bg-no-repeat  rounded-3xl flex flex-col justify-between z-[1] overflow-hidden relative max-md:w-full cursor-pointer" onClick={() => navigate("/plan-trip")}>
                <div className="w-full h-full absolute z-[-1] bg-[#00000070]"></div>
                <h3 className="text-2xl font-bold text-center mt-14">
                  Electirc Vehicle Pet Travel Planner
                </h3>
                <p className="mx-auto w-[80%] text-xl font-medium">
                  Provides integrating features to cater to the needs of pet owners
                  traveling with electric vehicles
                </p>
                <button className="bg-gray-700 w-[150px] ml-auto px-4 py-1 rounded-3lg flex items-center mb-10 mr-40 overflow-hidden group duration-300 hover:bg-white hover:text-black">
                  <span>
                    <IoIosArrowRoundForward className="rotate-[-45deg] text-3xl duration-200 group-hover:rotate-[0deg]" />
                  </span>
                  Learn More
                </button>
              </div>
            </div>
            {/* =============================== */}
            <p className="text-center mx-auto text-4xl tracking-widest font-bold leading-[50px] my-14 w-[600px] max-sm:w-[80%] max-sm:text-2xl">
              Discover more than 600,000 places to stay, play and dine while
              enjoying the company of your pets.
            </p>
            {/* =============================== */}
            <div className="flex flex-col w-full items-center gap-6">
              <img className="w-[181px]" src="/images/badge.png" alt="" />
              <h3 className="text-3xl font-semibold">Pet owner review</h3>
              <p className="text-center w-[550px] text-gray-400 max-sm:w-[90%]">
                Browse through countless reviews to uncover the top pet friendly
                hotels, restaurants and attractions across all 50 states <br /> and
                over 100 countries.
              </p>
            </div>
            <div className="flex flex-col w-full items-center gap-6 my-14">
              <img className="w-[181px]" src="/images/badge.png" alt="" />
              <h3 className="text-3xl font-semibold">Canine Concierge</h3>
              <p className="text-center w-[550px] text-gray-400 max-sm:w-[90%]">
                When booking a hotel, our Dog Friendly Concierge ensures you’re
                allocated pet friendly room, guaranteeing a seamless check in
                experience without any unexpected surprises.
              </p>
            </div>
            <div className="flex flex-col w-full items-center gap-6 my-14">
              <img className="w-[181px]" src="/images/badge.png" alt="" />
              <h3 className="text-3xl font-semibold">Emergency Assistance</h3>
              <p className="text-center w-[550px] text-gray-400 max-sm:w-[90%]">
                Get quality access to services such as pet care service and other
                quality services such as roadside assistance.
              </p>
            </div>
            <p className="bg-[#042925] py-2 text-xl font-semibold text-white w-[360px] cursor-pointer text-center mx-auto duration-200 hover:tracking-wider">
              Browse pet Friendly Hotels
            </p>
            {/* ============================== */}

            <div className="w-[85%] mx-auto">
              <h3 className="text-[40px] font-semibold mt-20">
                LATEST FROM THE BLOG
              </h3>
              <div>
                <img
                  className="w-full object-cover rounded-3xl overflow-hidden"
                  src="/images/hm1.png"
                  alt=""
                />
                <p className="text-3xl font-semibold my-5">
                  Tesla to double Supercharged network <br /> worldwide
                </p>
              </div>

              <div>
                <img
                  className="w-full object-cover rounded-3xl overflow-hidden"
                  src="/images/hm1.png"
                  alt=""
                />
                <p className="text-3xl font-semibold my-5">
                  EV charging stations in austin texas
                </p>
              </div>

              <div className="mb-32">
                <img
                  className="w-full object-cover rounded-3xl overflow-hidden"
                  src="/images/hm2.png"
                  alt=""
                />
                <p className="text-3xl font-semibold my-5">
                  Pet friendly attractions in austin texas
                </p>
              </div>
            </div>
          </div>
        </>
      } />
    </>
  );
};

export default HomePage;
