import React from "react";
import Layout from "../components/Layout";
import { PiCarThin } from "react-icons/pi";

const OurServices = () => {
  return (
    <>
      <Layout
        content={
          <>
            <div>
              <div className="py-16 px-20 max-xl:px-6 bg-green-500 text-white">
                <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">Our Services</h4>
                <div className="w-full max-w-[1300px] mx-auto py-10 flex gap-16 max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:px-4">
                  <div className="w-1/2 text-2xl max-xl:text-3xl max-[1180px]:text-[1.8vw] max-lg:w-full max-lg:text-2xl max-sm:text-xl">
                    <p className="xl:w-[500px] max-lg:w-full 2xl:w-[80%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <p className="xl:w-[500px] mt-6 max-lg:w-full 2xl:w-[80%]">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                  <div className="w-1/2 bg-slate-500 shrink-0 2xl:max-w-[600px] xl:h-[620px] max-lg:w-full">
                    <img  className="w-full h-full object-cover" src="/images/ourservices.png" alt="" />
                  </div>
                </div>
              </div>
              {/* ============================= */}

              <p className="text-xl font-Inter w-[70%] mx-auto my-5 max-xl:w-[85%]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
              <div className="w-full font-Inter flex justify-around items-center gap-10 my-28 px-32 max-lg:px-10 flex-wrap">
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="border-green-500 border-[1px] rounded-md px-6 py-1 text-green-500 text-lg mt-4 duration-200 hover:bg-green-500 hover:text-white">
                    Learn more
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="bg-green-500 rounded-md px-6 py-1 border-green-500 border-[1px] duration-200 text-white text-lg mt-4 hover:text-green-500 hover:bg-white">
                    Learn more
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="border-green-500 border-[1px] rounded-md px-6 py-1 text-green-500 text-lg mt-4 duration-200 hover:bg-green-500 hover:text-white">
                    Learn more
                  </button>
                </div>
              </div>
              <div className="w-full font-Inter flex justify-around items-center gap-10 my-28 px-32 max-lg:px-10 flex-wrap">
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="border-green-500 border-[1px] rounded-md px-6 py-1 text-green-500 text-lg mt-4 duration-200 hover:bg-green-500 hover:text-white">
                    Learn more
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="bg-green-500 rounded-md px-6 py-1 border-green-500 border-[1px] duration-200 text-white text-lg mt-4 hover:text-green-500 hover:bg-white">
                    Learn more
                  </button>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <PiCarThin size={80} />
                  <ul className="text-xl mb-4 whitespace-nowrap" style={{ listStyle: "square" }}>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                    <li>Lorem ipsum generator</li>
                  </ul>
                  <button className="border-green-500 border-[1px] rounded-md px-6 py-1 text-green-500 text-lg mt-4 duration-200 hover:bg-green-500 hover:text-white">
                    Learn more
                  </button>
                </div>
              </div>
              {/* =================================== */}

              <div className="py-10 px-20 max-xl:px-0 font-Inter">
                <div className="w-full max-w-[1300px] mx-auto px-20 py-10 flex gap-12 xl:justify-between max-xl:px-4 max-lg:flex-col max-lg:items-center">
                  <div className="w-1/2 relative max-lg:w-[90%] max-lg:h-[80vw] lg:w-[100%] lg:h-[35vw] max-w-[600px] max-h-[600px]">
                    <div className="bg-[url(/images/ddiv.png)] bg-no-repeat bg-cover bg-center w-[350px] h-[350px] rounded-2xl max-lg:w-[60%] max-lg:h-[60%] lg:w-[65%] lg:h-[66%]"></div>
                    <div className="bg-[url(/images/ddiv.png)] bg-no-repeat bg-cover bg-center w-[400px] h-[400px] rounded-2xl absolute bottom-0 right-0 max-lg:w-[70%] max-lg:h-[70%] lg:w-[65%] lg:h-[66%]"></div>
                  </div>
                  <div className="w-1/2 text-xl min-h-[100px] space-y-6 max-lg:w-[90%]">
                    <p className="w-[500px] max-lg:w-full xl:mx-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                    <p className="w-[500px] max-lg:w-full xl:mx-auto">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur
                    </p>
                  </div>
                </div>
              </div>
              {/* ============================================ */}
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
                      <button className="bg-green-500 rounded-xl py-2 w-[70%] mx-auto text-white my-8 text-xl duration-200 border-green-500 border-[1px] hover:bg-white hover:text-green-500">
                        Subscribe
                      </button>
                      <p className="text-gray-500 text-[12px]0">
                        By entering my email address, I consent to its
                        newsletters on a regular basis. I understand that I can
                        withdraw my consent at any time.
                      </p>
                    </div>
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

export default OurServices;
