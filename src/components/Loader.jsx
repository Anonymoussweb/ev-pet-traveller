import React from "react";
import { Bars } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Bars
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
