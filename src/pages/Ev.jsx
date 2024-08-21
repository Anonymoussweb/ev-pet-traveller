import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { IoSearchOutline } from "react-icons/io5";
import { PostAPI } from "../utilities/PostAPI";
import { toast } from "react-toastify";

const Ev = () => {
  const [selected, setSelected] = useState("EV Cars");
  const [car, setCar] = useState();
  console.log(car);
  const [tab, setTab] = useState([
    "EV Cars",
    "Plate No",
    "Compatible EV Charger",
  ]);
  const getallcars = async () => {
    let res = await PostAPI("user/getAllCars", {
      userId: "1",
    });
    if (res?.data?.status === "1") {
      setCar(res?.data?.data?.cars);
    }
  };
  useEffect(() => {
    getallcars();
  }, []);
  return (
    <>
      <Layout
        content={
          <>
            <div className="w-full pb-52 font-Inter">
              <div className="flex justify-center items-center bg-[#F4F4F5] py-1 px-2">
                {tab.map((item) => {
                  return (
                    <div
                      className={`${
                        selected === item
                          ? "text-black bg-white rounded-sm py-1"
                          : ""
                      } flex-1 text-center text-gray-600 font-semibold cursor-pointer`}
                      onClick={() => setSelected(item)}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              {selected === "EV Cars" ? (
                <div className="w-[500px] ml-2 mt-2 max-sm:w-full">
                  {car?.map((elem) => {
                    return (
                      <div className="flex justify-center items-center gap-5 border-gray-300 border-b-[2px] max-sm:border-none">
                        <img
                          className="max-sm:w-20"
                          src="/images/electric_cars.png"
                          alt=""
                        />
                        <div className="mt-4">
                          <p className="text-lg font-semibold text-gray-600">
                            {elem?.ev}
                          </p>
                          <p className="text-gray-600">
                            Active Tourer {elem?.plateNumber}
                          </p>
                          <button
                            className="bg-green-500 px-4 rounded-lg mt-2 text-white"
                            onClick={() => {
                              toast.error("Login to add car");
                            }}
                          >
                            + Add Car
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : selected === "Plate No" ? (
                <div className="w-1/2 mx-auto mt-8 max-sm:w-[90%]">
                  <div className="relative">
                    <input
                      className="w-full bg-gray-300 py-2 pl-2 pr-12 outline-none rounded-md"
                      type="text"
                      placeholder="Search car by plate number"
                    />
                    <div className="absolute top-2 right-5">
                      {" "}
                      <IoSearchOutline size={25} />
                    </div>
                  </div>
                </div>
              ) : selected === "Compatible EV Charger" ? (
                <div className="w-[500px] ml-auto mr-2 mt-4 max-sm:w-[90%]">
                  <div className="flex justify-center items-center">
                    <img
                      className="max-sm:w-20"
                      src="/images/electric_cars.png"
                      alt=""
                    />
                    <select className="w-[250px]" name="options" id="options">
                      <option value="All">All</option>
                      <option value="BMW Series">BMW Series</option>
                      <option value="Honda Series">Honda Series</option>
                    </select>
                  </div>
                  {/* ======================== */}
                  <div className="">
                    <div className="flex w-[80%] max-w-[350px] mx-auto justify-center items-center gap-5 max-sm:border-none bg-[#7671711a] border-gray-600 border-[1px] rounded-xl py-2">
                      <div className="relative">
                        <img className="" src="/images/thunder.png" alt="" />
                        <img
                          className="absolute bottom-0 right-0"
                          src="/images/tick.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <p className="text-lg font-semibold text-gray-600">
                          E4767576
                        </p>
                        <p className="text-gray-600">
                          Available . 22K - Ev Model:
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </>
        }
      />
    </>
  );
};

export default Ev;
