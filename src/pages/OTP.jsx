import React, { useState } from "react";

import { InputOtp } from "primereact/inputotp";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PostAPI } from "../utilities/PostAPI";
import { useLocation } from "react-router-dom";
import Loader from "../components/Loader";

const OTP = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { otp } = location.state || {};
  const customInput = ({ events, props }) => {
    return (
      <>
        <input
          {...events}
          {...props}
          type="text"
          className="w-[60px] h-[60px] text-center text-4xl rounded-md bg-gray-200 text-black border border-black max-[500px]:w-[40px] max-[500px]:h-[40px]"
        />
      </>
    );
  };
  const [token, setTokens] = useState();
  const [loader, setLoader] = useState(false);

  const OTPVerift = async () => {
    let res = await PostAPI("user/verifyEmail", {
      userId: localStorage.getItem("userId"),
      OTP: token,
    });
    if (res?.data?.status === "1") {
      navigate("/");
      toast.success(res?.data?.message);
    } else {
      toast.error(res?.data?.message);
    }
  };
  const sendOTP = async () => {
    if (!otp) {
      navigate("/");
      return toast.info("Write email to get OTP");
    }
    setLoader(true);
    let res = await PostAPI("user/forgetPasswordRequest", {
      email: otp,
    });
    if (res?.data?.status === "1") {
      setLoader(false);
      localStorage.setItem("userId", res?.data?.data?.userId);
      localStorage.setItem("forgetRequestId", res?.data?.data?.forgetRequestId);
      toast.success(res?.data?.message);
      navigate("/reset");
    } else {
      toast.error(res?.data?.message);
      setLoader(false);
    }
  };
  return loader ? (
    <Loader />
  ) : (
    <div className="w-full min-h-screen flex justify-center items-center bg-green-300 font-Inter">
      <div className="w-[70%] bg-white text-center px-4">
        <div className=" w-[300px] h-[210px] mx-auto max-[500px]:w-[150px]">
          <img
            className="w-full h-full object-contain"
            src="/images/otp.png"
            alt=""
          />
        </div>
        <div className="text-center pb-5">
          <h4 className="text-2xl font-bold max-[500px]:text-lg">
            Please verify account
          </h4>
          <p className="text-gray-500 max-w-[400px] mx-auto  mb-4 mt-2 max-[500px]:text-sm">
            Enter the six digit code we sent to your email address to verify
            your account
          </p>
          <div className="card flex justify-center">
            <InputOtp
              value={token}
              onChange={(e) => setTokens(e.value)}
              inputTemplate={customInput}
            />
          </div>
          <button
            className="bg-green-500 rounded-md px-4 py-2 text-white mt-8 mb-3 duration-150 hover:bg-gray-600 hover:text-white max-[500px]:text-sm"
            onClick={OTPVerift}
          >
            Verify & Continue
          </button>
          <button
            className="bg-gray-500 ml-3 rounded-md px-4 py-2 text-white mt-8 mb-3 duration-150 hover:bg-gray-600 hover:text-white max-[500px]:text-sm"
            onClick={sendOTP}
          >
            Resend OTP
          </button>
          <div>
            <button
              className="font-semibold rounded-md px-4 py-2 duration-150 hover:bg-gray-600 hover:text-white cursor-pointer max-[500px]:text-sm"
              onClick={() => {
                navigate("/");
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTP;