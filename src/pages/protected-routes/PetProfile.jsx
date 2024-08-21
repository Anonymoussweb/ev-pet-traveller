import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";
import { PostAPI } from "../../utilities/PostAPI";
import GetAPI from "../../utilities/GetAPI";
import { BASE_URL } from "../../utilities/URL";
import dayjs from "dayjs";
import Loader from "../../components/Loader";

const PetProfile = () => {
  const { data } = GetAPI("user/getPets/1");
  const [petData, setPetData] = useState();

  console.log(data, "data");

  return !data?.status == "1" ? (
    <Loader />
  ) : (
    <Layout
      content={
        <>
          <div className="w-full min-h-screen pb-20 bg-white flex font-Inter max-sm:flex-col gap-10">
            <div className="w-[25%] border-gray-400 min-w-[200px] border-r-[1px] max-sm:border-0">
              <div
                className="w-[75%] ml-auto flex items-center gap-1 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <IoIosArrowBack className="text-gray-500 text-2xl" />
                <p className="text-lg text-gray-500">Back</p>
              </div>
              <div className="w-[66%] ml-auto flex items-center gap-1 cursor-pointer mt-10">
                <h4 className="text-gray-500 text-lg">Pet Profile</h4>
              </div>
            </div>
            <div className="w-[75%] flex gap-5 min-w-[350px] flex-wrap justify-center mx-auto">
              {data?.data?.pets?.map((el) => {
                return (
                  <div className="bg-gray-200 w-[45%] h-max min-w-[350px] flex flex-col items-center rounded-md shadow-md">
                    <div className="w-[100px] h-[100px] rounded-full overflow-hidden mt-4">
                      <img
                        className="w-full h-full object-cover"
                        src={
                          el?.image
                            ? `${BASE_URL + el?.image}`
                            : `https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg`
                        }
                        alt=""
                      />
                    </div>
                    <div className="my-8 text-center space-y-2">
                      <p className="text-lg font-Inter">
                        Name: {el?.name}
                      </p>
                      <p className="text-lg font-Inter">Age: {el?.age}</p>
                      <p className="text-lg font-Inter">
                        Medical Reports: {el?.medicalReport}
                      </p>
                      <p className="text-lg font-Inter">
                        Pet Type: {el?.petType}
                      </p>
                      <p className="text-lg font-Inter">
                        Temperature: {el?.temperature}
                      </p>
                      <p className="text-lg font-Inter">
                        Created at: {dayjs(el?.createdAt).format("YYYY-MM-DD")}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      }
    />
  );
};

export default PetProfile;
