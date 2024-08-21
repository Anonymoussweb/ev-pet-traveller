import React from "react";
import Layout from "../components/Layout";
import { MdOutlineArrowDropDownCircle } from "react-icons/md";

const AboutUs = () => {
  return (
    <>
      <Layout
        content={
          <>
            <div>
              <div className="py-16 px-20 max-xl:px-6 bg-green-500 text-white">
                <h4 className="font-Inter font-semibold text-4xl text-center max-[600px]:text-2xl">About Us</h4>
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
                    <img  className="w-full h-full object-cover" src="/images/Rectangle 74.png" alt="" />
                  </div>
                </div>
              </div>
              {/* ====================== */}
              <p className="w-[76%] font-Inter mt-5 mx-auto text-2xl max-sm:w-[90%] max-sm:text-xl">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur
              </p>
              {/* ========================= */}
              <div className="py-16 px-20 max-xl:px-6">
                <div className="w-full max-w-[1300px] mx-auto py-10 flex gap-16 max-lg:flex-col max-lg:justify-center max-lg:items-center max-sm:px-4">
                  <div className="w-1/2 2xl:max-w-[600px] xl:h-[620px] max-lg:w-full">
                    <img className="w-full object-cover" src="/images/gdog.png" alt="" />
                  </div>
                  <div className="w-1/2 text-2xl max-xl:text-[30px] max-[1180px]:text-[1.8vw] max-lg:w-full max-lg:text-2xl max-sm:text-xl">
                    <p className="xl:w-[500px] max-lg:w-full 2xl:w-[80%] ">
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
                </div>
              </div>
              {/* ========================== */}
              <div className="my-20 font-Inter">
                <h4 className="text-4xl font-semibold text-center max-[600px]:text-2xl">
                  Meet Our Founders
                </h4>
                <div className="text-center mx-auto w-[450px] my-20 max-[500px]:w-[90%]">
                  <img
                    className="mx-auto mb-3"
                    src="/images/founder.png"
                    alt="founder image"
                  />
                  <p className="text-xl">FOUNDER & CEO</p>
                  <h4 className="text-2xl font-semibold max-[600px]:text-2xl">
                    MSU ALUMNI, DVM, MSC, PhD, CAWA
                  </h4>
                </div>
              </div>
              {/* =============================== */}
              <div>
                <h4 className="text-4xl font-Inter font-semibold text-center max-[600px]:text-2xl">
                  Team Members
                </h4>
                <div className="flex font-Inter justify-center gap-10 flex-wrap max-[500px]:gap-20">
                  <div className="text-center w-[200px] my-20 max-lg:my-5 max-[500px]:w-full">
                    <img
                      className="mx-auto mb-3 max-[500px]:w-[90%] max-[500px]:h-full max-[500px]:object-cover"
                      src="/images/team1.png"
                      alt="founder image"
                    />
                    <p className="text-lg">FOUNDER & CEO</p>
                    <h4 className="text-2xl font-semibold">CO SSHBXHB</h4>
                  </div>
                  <div className="text-center w-[200px] my-20 max-lg:my-5 max-[500px]:w-full">
                    <img
                      className="mx-auto mb-3 max-[500px]:w-[90%] max-[500px]:h-full max-[500px]:object-cover"
                      src="/images/team2.png"
                      alt="founder image"
                    />
                    <p className="text-lg">FOUNDER & CEO</p>
                    <h4 className="text-2xl font-semibold">CO SSHBXHB</h4>
                  </div>
                  <div className="text-center w-[200px] my-20 max-lg:my-5 max-[500px]:w-full">
                    <img
                      className="mx-auto mb-3 max-[500px]:w-[90%] max-[500px]:h-full max-[500px]:object-cover"
                      src="/images/team3.png"
                      alt="founder image"
                    />
                    <p className="text-lg">FOUNDER & CEO</p>
                    <h4 className="text-2xl font-semibold">CO SSHBXHB</h4>
                  </div>
                  <div className="text-center w-[200px] my-20 max-lg:my-5 max-[500px]:w-full">
                    <img
                      className="mx-auto mb-3 max-[500px]:w-[90%] max-[500px]:h-full max-[500px]:object-cover"
                      src="/images/team4.png"
                      alt="founder image"
                    />
                    <p className="text-lg">FOUNDER & CEO</p>
                    <h4 className="text-2xl font-semibold">CO SSHBXHB</h4>
                  </div>
                </div>
              </div>
              {/* ================================== */}
              <div className="w-full font-Inter bg-green-500 flex gap-8 px-14 mt-20 h-[450px] text-white max-lg:flex-col max-lg:h-max max-lg:gap-0 max-[500px]:px-2">
                <div className="bg-gradient-to-t from-green-500 to-[#114159] w-[40%] relative top-[-80px] h-[350px] pt-10 pl-10 pr-3 space-y-5 max-lg:w-[100%] max-[500px]:px-4">
                  <h4 className="font-bold text-3xl max-[600px]:text-2xl">Our Aims</h4>
                  <p className="text-lg max-[500px]:text-sm">
                    We ha vefc mnnec jnchjnec cnjnecjen mnjnjnnjcnhm njndcbhbcen
                    beb c g eheb ehbhbchb ehehb m cb b cn nc emc nec en enc ene
                    cn cnec en nce e n ec ech ch en nhbce
                    hecbehebekvdhebvjbejcbehc hevcbhebcebcecbecvehcehcbeheeceb
                    eec cev en ehb enc e behee he ec e ee ce hejegvejge wndunwd.
                  </p>
                </div>
                <div className="w-[60%] flex justify-center items-center pb-20 flex-wrap max-lg:w-full">
                  <div className="w-[25%] space-y-2 max-[1245px]:w-1/2 max-lg:w-1/4 max-lg:min-w-[200px] max-[500px]:w-full max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:text-center">
                    <p className="font-semibold text-lg">MAY 2022</p>
                    <MdOutlineArrowDropDownCircle size={50} />
                    <p>
                      Wenns jsnhbh shbshjn jnsjnjskkmkmkkmkmsk njnjnjsjkmkmsmkmk
                      snnnkmkkmk
                    </p>
                  </div>
                  <div className="w-[25%] space-y-2 max-[1245px]:w-1/2 max-lg:w-1/4 max-lg:min-w-[200px] max-[500px]:w-full max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:text-center">
                    <p className="font-semibold text-lg">MAY 2022</p>
                    <MdOutlineArrowDropDownCircle size={50} />
                    <p>
                      Wenns jsnhbh shbshjn jnsjnjskkmkmkkmkmsk njnjnjsjkmkmsmkmk
                      snnnkmkkmk
                    </p>
                  </div>
                  <div className="w-[25%] space-y-2 max-[1245px]:w-1/2 max-lg:w-1/4 max-lg:min-w-[200px] max-[500px]:w-full max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:text-center">
                    <p className="font-semibold text-lg">MAY 2022</p>
                    <MdOutlineArrowDropDownCircle size={50} />
                    <p>
                      Wenns jsnhbh shbshjn jnsjnjskkmkmkkmkmsk njnjnjsjkmkmsmkmk
                      snnnkmkkmk
                    </p>
                  </div>
                  <div className="w-[25%] space-y-2 max-[1245px]:w-1/2 max-lg:w-1/4 max-lg:min-w-[200px] max-[500px]:w-full max-[500px]:flex max-[500px]:flex-col max-[500px]:justify-center max-[500px]:items-center max-[500px]:text-center">
                    <p className="font-semibold text-lg">MAY 2022</p>
                    <MdOutlineArrowDropDownCircle size={50} />
                    <p>
                      Wenns jsnhbh shbshjn jnsjnjskkmkmkkmkmsk njnjnjsjkmkmsmkmk
                      snnnkmkkmk
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

export default AboutUs;
