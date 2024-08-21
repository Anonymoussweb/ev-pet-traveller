import { useState } from "react";
import Layout from "../components/Layout";
import { FaBed } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { GrLinkNext } from "react-icons/gr";
import { PiChargingStationFill } from "react-icons/pi";
import { MdPeople, MdPets } from "react-icons/md";
import { FaCarAlt, FaApple, FaUserLock } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";

import LogoSlider from "../components/LogoSlider";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState("coffee");

  return (
    <>
      <Layout
        content={
          <>
            <div className="relative w-full h-screen min-h-[500px] bg-[url(/images/photobanner.jpg)] bg-cover bg-center bg-no-repeat text-white">
              <div className="flex flex-col items-center py-[10vh]">
                <h4 className="text-[40px] font-Inter font-semibold max-md:text-[5vw]">
                  Hit the road with
                </h4>
                <h2 className="text-[60px] tracking-widest font-bold font-Inter text-[#15984a] max-md:text-[8vw]">
                  Woof <span className="text-[#023850]">Watts</span>
                </h2>
              </div>
              <div className="w-[60%] h-14 bg-[#59575681] mx-auto rounded-full flex overflow-hidden max-md:w-[90%] max-[600px]:h-14 2xl:h-20">
                <div className="text-green-500 w-16 flex justify-center items-center">
                  <FaBed size={30} />
                </div>

                <input
                  type="text"
                  className="w-full outline-none px-2 bg-transparent"
                  placeholder="Search for dog friendly location"
                />
                <button className="bg-green-500 w-36 text-4xl flex justify-center items-center max-[600px]:text-2xl">
                  <IoSearchOutline />
                </button>
              </div>
              <div className="text-center my-[7vh]">
                <h3 className="text-[30px] font-Inter font-semibold max-[600px]:text-xl">
                  Electric vehicles pet travel planner
                </h3>
                <h4 className="text-xl font-Inter font-semibold max-[600px]:text-lg">
                  Charge anytime, anywhere while you travel with your pet
                </h4>
              </div>
              <div className="ml-28 absolute bottom-10 max-md:ml-10  max-md:mt-[16vh] max-[500px]:mt-40 max-[500px]:m-0 max-[500px]:flex max-[500px]:justify-center max-[500px]:items-center max-[500px]:w-full">
                <Link
                  className="bg-green-500 font-Inter flex w-[340px] py-[1vh] rounded-xl px-5 items-center gap-4 border-green-500 border-[1px] text-2xl duration-200 hover:bg-transparent hover:text-green-500"
                  to=""
                >
                  <p>Find charging stations</p>
                  <GrLinkNext />
                </Link>
              </div>
            </div>
            {/* ==================== */}
            <div className="bg-white w-full px-16 py-8 flex justify-around max-[550px]:px-2 max-[550px]:flex-wrap">
              <div className="text-lg font-bold font-Inter inline-flex flex-col items-center max-lg:text-sm">
                <MdPeople className="mb-2 text-[100px]  max-lg:text-[50px] cursor-pointer" />
                <p>+120,0000</p>
                <p>Users</p>
              </div>
              <div className="text-lg font-bold font-Inter  inline-flex flex-col items-center max-lg:text-sm">
                <FaCarAlt className="mb-2 text-[100px] max-lg:text-[50px] cursor-pointer" />
                <p>+20,0000</p>
                <p>Charging Stations</p>
              </div>
              <div className="text-lg font-bold font-Inter  inline-flex flex-col items-center max-lg:text-sm">
                <PiChargingStationFill className="mb-2 text-[100px] max-lg:text-[50px] cursor-pointer" />
                <p>+73,0000</p>
                <p>Chargers</p>
              </div>

              <div className="text-lg font-bold font-Inter inline-flex flex-col items-center max-lg:text-sm">
                <MdPets className="mb-2 text-[100px] max-lg:text-[50px] cursor-pointer" />
                <p>+2,0000</p>
                <p>Pets Friendly Locations</p>
              </div>
            </div>
            <hr className="bg-gray-400 mx-auto w-[80%] h-[2px]" />
            {/* =========================== */}

            <div className="py-16 px-20 max-xl:px-6">
              <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">
                About Us
              </h4>
              <div className="w-full max-w-[1300px] mx-auto py-10 flex gap-16 max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:px-4">
                <div className="w-1/2 text-2xl max-xl:text-2xl max-[1180px]:text-[1.5vw] max-lg:w-full max-lg:text-2xl max-sm:text-xl">
                  <p className="xl:w-[500px] max-lg:w-full 2xl:w-[80%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <p className="xl:w-[500px] mt-6 max-lg:w-full 2xl:w-[80%]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur
                  </p>
                  <p className="max-xl:text-2xl mt-2 max-[1180px]:text-[1.5vw] max-[1180px]:mt-10 max-lg:text-xl xl:mt-10">
                    Learn More
                  </p>
                  <div>
                    <hr className="bg-black h-[2px] w-[300px] mt-2" />
                  </div>
                </div>
                <div className="w-1/2 bg-slate-500 shrink-0 2xl:max-w-[600px] xl:h-[620px] max-lg:w-full">
                  <img
                    className="w-full h-full object-cover"
                    src="/images/Rectangle 74.png"
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className="px-14">
              <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">
                Pet friendly attractions on your route
              </h4>
              <div className="flex flex-wrap gap-4 justify-center my-16 font-Inter">
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 75.png"
                    alt="image"
                  />
                  <p>Hotels</p>
                </div>
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 77.png"
                    alt="image"
                  />
                  <p>Airbnb</p>
                </div>
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 75.png"
                    alt="image"
                  />
                  <p>Beach</p>
                </div>
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 75.png"
                    alt="image"
                  />
                  <p>Park</p>
                </div>
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 75.png"
                    alt="image"
                  />
                  <p>Play Ground</p>
                </div>
                <div className="w-[150px] text-center space-y-2 font-semibold text-lg text-gray-500 max-[400px]:w-[90%]">
                  <img
                    className="max-[400px]:w-full"
                    src="/images/Rectangle 75.png"
                    alt="image"
                  />
                  <p>Play Ground</p>
                </div>
              </div>
            </div>
            {/* =========================== */}
            <div className="">
              <h4 className="text-5xl text-center font-Inter font-semibold max-[600px]:text-2xl">
                EV charging stations in austin texas
              </h4>
              <div className="overflow-hidden w-[80%] h-[550px] rounded-2xl my-20 mx-auto max-[600px]:w-[90%] max-[600px]:h-[400px]">
                <img
                  className="w-full h-full object-cover"
                  src="/images/charging station.jpg"
                  alt=""
                />
              </div>
            </div>
            {/* =========================== */}
            <div>
              <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">
                Check out our mobile app
              </h4>
              <div className="flex gap-20 justify-center my-16 max-sm:flex-col max-sm:items-center max-sm:gap-10">
                <div className="bg-black rounded-lg w-[240px] h-[70px] text-white flex justify-center items-center gap-4 cursor-pointer">
                  <div className="text-5xl">
                    <FaApple />
                  </div>
                  <div className="text-center">
                    <p>Download on the</p>
                    <p className="text-lg">App Store</p>
                  </div>
                </div>
                <div className="bg-black rounded-lg w-[240px] h-[70px] text-white flex justify-center items-center gap-4 cursor-pointer">
                  <div className="">
                    <img className="w-10" src="/images/gplay.png" alt="" />
                  </div>
                  <div className="text-center">
                    <p>Get it on</p>
                    <p className="text-lg">Google play</p>
                  </div>
                </div>
              </div>
              <div className=" w-[70%] mx-auto max-sm:w-[95%]">
                <h4 className="font-Inter font-semibold tracking-wider text-3xl text-center max-[600px]:text-2xl">
                  Compatible payment networks
                </h4>
                <p className="text-xl font-Inter font-semibold text-center tracking-wider my-10">
                  No need to download dozens of applications to pay for your
                  sessions anymore. Pay <br /> directly from the Woofwatt app at
                  more than20,000 charging stations across the following
                  compatible networks.
                </p>
              </div>
              <div className="my-20 mx-20 max-[600px]:mx-4">
                <LogoSlider />
              </div>

              {/* ========================= */}

              <div className="my-20 py-20 bg-[#ececec]">
                <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">
                  Testimonials
                </h4>

                <div className="mx-24 font-Inter font-semibold mt-14 max-lg:mx-10">
                  <div className="flex gap-16 max-lg:gap-4 max-md:flex-wrap">
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        John
                      </h5>
                    </div>
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        Victoria
                      </h5>
                    </div>
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        Michael
                      </h5>
                    </div>
                  </div>
                  <div className="flex gap-16 mt-14 max-lg:gap-4 max-md:flex-wrap">
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        John
                      </h5>
                    </div>
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        John
                      </h5>
                    </div>
                    <div className="space-y-4 max-md:text-center">
                      <div className="text-green-500 text-3xl text-center">
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                        <span>&#9733;</span>
                      </div>
                      <p>
                        This all-in-one app for EVs will help you find every
                        charging station that exists. Thank you to the Devs for
                        creating such an app. You can even filter to show only
                        the free chargers! What more do you need?
                      </p>
                      <h5 className="text-center font-Inter font-semibold">
                        John
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ========================= */}
            <div className="px-20 max-md:px-0">
              <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">
                Our Services
              </h4>
              <div className="my-10 flex flex-col gap-[10vh]">
                <div className="flex justify-around max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:gap-y-10">
                  <div>
                    <img src="/images/badge.png" alt="" />
                    <p className="text-xl font-Inter font-semibold text-center mt-4">
                      Pet Owner Review
                    </p>
                  </div>
                  <div>
                    <img src="/images/badge.png" alt="" />
                    <p className="text-xl font-Inter font-semibold text-center mt-4">
                      Trip planner
                    </p>
                  </div>
                </div>
                <div className="flex mb-[5vh] justify-around max-[500px]:mt-10 max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:gap-y-10">
                  <div>
                    <img src="/images/badge.png" alt="" />
                    <p className="text-xl font-Inter font-semibold text-center mt-4">
                      Emergency Assistance
                    </p>
                  </div>
                  <div>
                    <img src="/images/badge.png" alt="" />
                    <p className="text-xl font-Inter font-semibold text-center mt-4">
                      Easy payment plan
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* ========================= */}
            <div className="relative w-full h-max py-10 px-10 bg-[url(/images/Rectangle83.jpg)] bg-cover bg-center bg-no-repeat text-white">
              <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70 pointer-events-none"></div>
              <div className="relative z-[2] px-20 max-lg:px-2">
                <h3 className="text-[30px] font-Inter font-semibold text-center max-[550px]:text-xl">
                  EV pet travel planner made easy
                </h3>
                <h4 className="text-xl font-InterMedium text-center max-[550px]:text-lg">
                  We have our mobile app within your reach!
                </h4>
                <div className="flex justify-between items-center w-full h-[400px] max-[944px]:flex-col max-[944px]:h-[600px] max-[944px]:my-[50px] max-[517px]:h-[750px]">
                  <div className="flex-1 text-2xl max-lg:text-xl max-[550px]:text-lg">
                    <ul
                      className="space-y-3 font-Inter"
                      style={{ listStyle: "square" }}
                    >
                      <li>Pay directly from the app</li>
                      <li>Find your compatible charging station</li>
                      <li>Plan EV journeys with your pet</li>
                      <li>Create avatars to represent your pet</li>
                      <li>Share your trip with your friends</li>
                      <li>Browse throughh the community of EV owners</li>
                    </ul>
                  </div>
                  <div className="flex-1 font-Inter grid grid-cols-2 gap-5 max-[517px]:grid-cols-1">
                    <div className=" bg-[#ffffff71] border-white border-[1px] flex flex-col items-center justify-center shrink-0  text-2xl min-h-[100px] min-w-[210px] max-[517px]:w-[280px]">
                      <span className="text-green-500 text-3xl">&#9733;</span>
                      <p className="w-max">5star rating</p>
                    </div>
                    <div className=" bg-[#ffffff71] border-white border-[1px] flex flex-col items-center justify-center shrink-0 text-2xl min-h-[100px] min-w-[210px]">
                      <span className="text-green-500">
                        <MdPets />
                      </span>
                      <p className="w-max">Travel with your pet</p>
                    </div>
                    <div className=" bg-[#ffffff71] border-white border-[1px] flex flex-col items-center justify-center shrink-0  text-2xl min-h-[100px] min-w-[210px]">
                      <span className="text-green-500 text-3xl">
                        <FaUserLock />
                      </span>
                      <p className="w-max">Data protection</p>
                    </div>
                    <div className=" bg-[#ffffff71] border-white border-[1px] flex flex-col items-center justify-center shrink-0  text-2xl min-h-[100px] min-w-[210px]">
                      <span className="text-green-500 text-3xl">
                        <CiMobile3 />
                      </span>
                      <p className="w-max">Track location</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-20 justify-center max-sm:flex-col max-sm:items-center max-sm:gap-5">
                  <div className="bg-black rounded-lg w-[240px] h-[70px] text-white flex justify-center items-center gap-4">
                    <div className="text-5xl">
                      <FaApple />
                    </div>
                    <div className="text-center">
                      <p>Download on the</p>
                      <p className="text-lg">App Store</p>
                    </div>
                  </div>
                  <div className="bg-black rounded-lg w-[240px] h-[70px] text-white flex justify-center items-center gap-4">
                    <div className="">
                      <img className="w-10" src="/images/gplay.png" alt="" />
                    </div>
                    <div className="text-center">
                      <p>Get it on</p>
                      <p className="text-lg">Google play</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* ================= */}
            <div className="w-full bg-white h-max px-28 py-20 max-md:px-6">
              <h4 className="text-[30px] font-Inter font-semibold text-center mb-10 max-[600px]:text-2xl">
                EV Guides
              </h4>
              <p className="text-xl font-Inter text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis. Cras adipiscing enim eu turpis egestas pretium. Sit
                amet risus nullam eget felis eget nunc lobortis. Felis eget
                velit aliquet sagittis id consectetur. Leo a diam sollicitudin
                tempor id. Tempor id eu nisl nunc mi ipsum. Diam sit amet nisl
                suscipit adipiscing. Morbi tristique senectus et netus et
                malesuada fames ac. Non consectetur a erat nam at lectus urna
                duis convallis. Tortor condimentum lacinia quis vel eros donec
                ac. Erat velit scelerisque in dictum non consectetur a.
              </p>
              <p className="mt-8 text-xl font-Inter text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Lorem dolor sed viverra ipsum nunc aliquet bibendum enim
                facilisis. Cras adipiscing enim eu turpis egestas pretium. Sit
                amet risus nullam eget felis eget nunc lobortis. Felis{" "}
              </p>
            </div>
            {/* =================== */}
            <div className="w-full font-Inter bg-[#4caf4f81] pt-12 pb-40">
              <div className="w-[50%] bg-white rounded-xl mx-auto py-10 px-16 max-xl:px-10 max-md:w-[90%] max-[450px]:px-4 2xl:w-[900px]">
                <div>
                  <p className="font-semibold text-xl">
                    Sign up for our emails
                  </p>
                  <p>Get top information on EV communities and updates</p>
                  <div className="flex flex-col w-[90%] mx-auto mt-10 max-xl:w-full">
                    <label htmlFor="">Email</label>
                    <input
                      type="text"
                      className="outline-none border-black border-[1px] p-2 rounded-lg"
                    />
                    <button className="bg-green-500 rounded-xl py-2 w-[70%] border-green-500 border-[1px] duration-200 mx-auto text-white my-8 text-xl  hover:text-green-500 hover:bg-transparent">
                      Subscribe
                    </button>
                    <p className="text-gray-500 text-[12px]">
                      By entering my email address, I consent to its newsletters
                      on a regular basis. I understand that I can withdraw my
                      consent at any time.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </>
        }
      />
    </>
  );
};

export default Home;
