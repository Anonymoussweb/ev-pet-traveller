import React from "react";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";

const Payments = () => {
  return (
    <Layout
      content={
        <>
          <div className="w-full min-h-screen bg-white flex font-Inter relative">
            <div className="w-[25%] absolute top-10 left-4 max-sm:top-0 max-sm:left-0">
              <div
                className="w-[75%] ml-auto flex items-center gap-1 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <IoIosArrowBack className="text-gray-500 max-sm:text-lg text-2xl" />
                <p className="text-lg text-gray-500 max-sm:text-sm">Back</p>
              </div>
            </div>
            <div className="w-[100%]">
              <p className="text-xl font-semibold text-center max-sm:text-sm">
                No payments available
              </p>

              <img
                className="w-1/5 mx-auto my-16"
                src="/images/bro.png"
                alt=""
              />
              <p className="text-xl font-medium text-center underline cursor-pointer underline-offset-[5px] max-sm:text-lg">
               Add new payment method
              </p>
            </div>
          </div>
        </>
      }
    />
  );
};

export default Payments;
