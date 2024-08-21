import React, { useState } from "react";
import { FaCarAlt, FaApple, FaUserLock } from "react-icons/fa";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { PostAPI } from "../utilities/PostAPI";
import * as Yup from "yup";
import { loginSchema } from "../schemas/index";
import Loader from "../components/Loader";

const LoginSignup = ({ setLogin, swap }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState();
  const [otp, setOtp] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [errors, setErrors] = useState({
    email: "Enter email",
    password: "Enter password",
    p1: "Enter password",
    name: "Enter name",
    phone: "Enter phone",
  });
  console.log(errors, "errors");
  const [reset, setReset] = useState(false);
  const [loader, setLoader] = useState(false);
  // =========Login=============
  const HandleLogin = async (e) => {
    setLoader(true);
    let res = await PostAPI("user/login", {
      email: email,
      password: password,
    });
    console.log(res, "resLogin");
    if (res?.data?.status === "1") {
      setLoader(false);
      localStorage.setItem("accessToken", res?.data?.data?.accessToken);
      localStorage.setItem("loginStatus", true);
      localStorage.setItem("userId", res?.data?.data?.userId);
      navigate("/home-page");
      toast.success("Login Successfull");
    } else {
      setLoader(false);
      navigate("/");
      toast.error(res?.data?.message);
    }
  };

  // =========SignUp=========
  const handleSignUp = async (e) => {
    try {
      await loginSchema.validate({ email, password });
      setLoader(true);
      let res = await PostAPI("user/registration", {
        name,
        email,
        password,
        phone,
      });

      if (res?.data?.status === "1") {
        setLoader(false);
        toast.success(res?.data?.message);
        localStorage.setItem("userId", res?.data?.data?.userId);
        setLogin(false);
        navigate("/otp", { state: { otp } });
      } else {
        setLoader(false);
        toast.error(res?.data?.message);
        setLogin(false);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  const valData = async () => {
    try {
      await loginSchema.validate({ email, password }, { abortEarly: false });
      setErrors({ email: "", password: "" }); // Clear errors if validation passes
    } catch (validationErrors) {
      const newErrors = { email: "", password: "" };
      validationErrors.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });
      setErrors(newErrors);
    }
  };

  const minLength = (e) => {
    const { name, value } = e.target;
    let error = "";
  
    if (name === "name") {
      error = value.length < 5 ? "Name must contain at least 5 characters" : "";
    } else if (name === "phone") {
      error = value.length < 11 ? "Phone must contain at least 11 characters" : "";
    } else if (name === "password") {
      error = value.length < 6 ? "Password must contain at least 6 characters" : "";
    }else if(name === "p1"){
      error = value.length < 6 ? "Password must contain at least 6 characters" : "";
    }
  
    setErrors({
      ...errors,
      [name]: error,  // Dynamically set the error for the correct input field
    });
  };
  
  const sendOTP = async () => {
    setLoader(true);
    let res = await PostAPI("user/forgetPasswordRequest", {
      email: otp,
    });
    if (res?.data?.status === "1") {
      setLoader(false);
      localStorage.setItem("userId", res?.data?.data?.userId);
      localStorage.setItem("forgetRequestId", res?.data?.data?.forgetRequestId);
      toast.success(res?.data?.message);
      navigate("/reset", { state: { otp } });
    } else {
      toast.error(res?.data?.message);
      setLoader(false);
    }
  };
  return (
    <>
      {swap ? (
        <div className="w-full h-screen fixed top-0 z-50 flex justify-center items-center font-Inter">
          <div className="w-[895px] h-[460px] overflow-auto flex relative z-50 max-lg:w-[90%]">
            <div className="w-[35%] bg-[url(/images/sdog.webp)] bg-cover bg-center bg-no-repeat flex justify-center items-center max-md:hidden"></div>
            <div className="w-[65%] h-full rounded-r-[15px] bg-white flex flex-col items-center justify-center max-md:w-full">
              {loader ? (
                <Loader />
              ) : (
                <>
                  <img
                    className="object-cover mb-[5px]"
                    src="/images/WOOFWATTT.png"
                    alt="logo"
                  />
                  <h4 className="text-lg mb-[8px] font-InterMedium">
                    Create your account
                  </h4>
                  <div className="w-[70%] relative">
                    <input
                      className="w-full border-gray-400 border-[1px] rounded-lg py-[5px] outline-none px-2"
                      type="text"
                      placeholder="Email..."
                      name="email"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        valData();
                      }}
                    />
                    <p className="text-red-500 text-[10px]  absolute top-[-12px] right-2 max-[400px]:text-[5px] max-[400px]:top-[-10px]">
                      {errors.email}
                    </p>
                  </div>
                  <div className="w-[70%] relative mt-3">
                    <input
                      className="w-full border-gray-400 border-[1px] rounded-lg py-[5px] outline-none px-2"
                      type="text"
                      name="name"
                      placeholder="Username..."
                      onChange={(e) => {
                        setName(e.target.value);
                        minLength(e);
                      }}
                    />
                    <p className="text-red-500 text-[10px]  absolute top-[-12px] right-2">
                      {errors.name}
                    </p>
                  </div>
                  <div className="w-[70%] relative mt-3">
                    <input
                      className="w-full border-gray-400 border-[1px] rounded-lg py-[5px] outline-none px-2"
                      type="text"
                      name="phone"
                      placeholder="Phone number..."
                      onChange={(e) => {
                        setPhone(e.target.value);
                        minLength(e);
                      }}
                    />
                    <p className="text-red-500 text-[10px]  absolute top-[-12px] right-2">
                      {errors.phone}
                    </p>
                  </div>
                  <div className="w-[70%] relative mt-3">
                    {/* <label className="font-semibold text-base" htmlFor="">
                      Password
                    </label> */}
                    <input
                      className="w-full border-gray-400 border-[1px] rounded-lg py-[5px] outline-none px-2"
                      type="password"
                      name="password"
                      placeholder="Password..."
                      onChange={(e) => {
                        setPassword(e.target.value);
                        valData();
                      }}
                    />
                    <p className="text-red-500 text-[10px] absolute top-[-12px] right-2 max-[400px]:text-[5px] max-[400px]:top-[-10px]">
                      {errors.password}
                    </p>
                  </div>
                  <button
                    className="bg-[#4caf50] text-white py-[5px] text-base w-1/2 rounded-lg mt-4 duration-200 border-green-500 border-[1px] hover:bg-white hover:text-green-500 "
                    onClick={handleSignUp}
                  >
                    Sign Up
                  </button>
                  <div className="relative my-[20px] w-full">
                    <hr className="w-1/3 bg-gray-500 h-[2px] mx-auto rounded-xl" />
                    <p className="absolute top-[-13px] px-2 left-[50%] translate-x-[-50%]  bg-white font-semibold text-lg">
                      Or
                    </p>
                  </div>
                  <div className="w-[70%] border-gray-400 border-[1px] py-[5px] rounded-lg flex justify-center gap-2 items-center relative cursor-pointer duration-200 hover:bg-black hover:text-white">
                    <img
                      className="w-6 h-6 object-cover max-[600px]:left-6"
                      src="/images/glogo.png"
                      alt="google logo"
                    />
                    <p className="font-semibold text-base">Google</p>
                  </div>
                  <div className="w-[70%] my-3 border-gray-400 border-[1px] py-[5px] rounded-lg flex gap-2 justify-center items-center relative cursor-pointer duration-200 hover:bg-black hover:text-white">
                    <div className="text-2xl relative top-[-2px] max-[600px]:left-6">
                      <FaApple />
                    </div>
                    <p className="font-semibold text-base">Apple</p>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 z-10 bg-[#00000047]"
            onClick={() => setLogin(false)}
          ></div>
        </div>
      ) : (
        <div className="w-full h-screen fixed top-0 z-50 flex justify-center items-center">
          <div className="w-[895px] h-[460px] flex relative z-50 max-lg:w-[90%]">
            <div className="w-[35%] bg-[#4caf50] flex justify-center items-center max-md:hidden">
              <img
                className="object-cover"
                src="/images/WOOFWATTT.png"
                alt="logo"
              />
            </div>
            <div className="w-[65%] h-full rounded-r-[15px] bg-white flex flex-col items-center justify-center pb-6 max-md:w-full">
              {loader ? (
                <Loader />
              ) : (
                <>
                  {" "}
                  <h4 className={`text-2xl mt-[12px] font-semibold`}>
                    Welcome Back
                  </h4>
                  <div className="w-[70%] relative">
                    <label
                      className={`${
                        reset ? "text-sm" : "tesxt-lg"
                      } font-semibold`}
                      htmlFor=""
                    >
                      Email Address
                    </label>
                    <input
                      className="w-full border-gray-400 border-[2px] rounded-lg py-[5px] outline-none px-2 mt-1"
                      type="text"
                      onChange={(e) => {
                        setEmail(e.target.value);
                        valData();
                      }}
                    />
                    <p
                      className={`text-red-500 text-[10px] absolute top-[15px]  right-2`}
                    >
                      {errors.email}
                    </p>
                  </div>
                  <div
                    className={`w-[70%] ${reset ? "mt-1" : "mt-2"} relative`}
                  >
                    <label
                      className={`${
                        reset ? "text-sm" : "tesxt-lg"
                      } font-semibold`}
                      htmlFor=""
                    >
                      Password
                    </label>
                    <input
                      className="w-full border-gray-400 border-[2px] rounded-lg py-[5px] outline-none px-2 mt-1"
                      type="password"
                      name="p1"
                      onChange={(e) => {
                        setPassword(e.target.value);
                        minLength(e);
                      }}
                    />
                    <p
                      className={`text-red-500 text-[10px] absolute  top-[15px]  right-2`}
                    >
                      {errors.p1}
                    </p>
                  </div>
                  <p
                    className="text-right w-[70%] text-red-500 font-semibold cursor-pointer"
                    onClick={() => setReset((prev) => !prev)}
                  >
                    {!reset ? "Reset password" : "Cancel"}
                  </p>
                  {reset && (
                    <div className="w-[70%] relative">
                      <input
                        className="w-full border-gray-400 border-[2px] rounded-lg py-[5px] outline-none px-2"
                        type="text"
                        placeholder="Type email here..."
                        onChange={(e) => {
                          setOtp(e.target.value);
                        }}
                      />
                      <p
                        className="text-red-500 text-sm absolute top-[5px] font-semibold right-[2px] cursor-pointer bg-white pt-[3px] h-[30px] px-4 rounded-xl"
                        onClick={sendOTP}
                      >
                        Send OTP
                      </p>
                    </div>
                  )}
                  <button
                    className="bg-[#4caf50] text-white border-green-500 border-[1px] py-[5px] duration-200 w-1/2 rounded-lg mt-2 hover:bg-white hover:text-green-500"
                    onClick={HandleLogin}
                  >
                    Login
                  </button>
                  <div className="relative my-[20px] w-full">
                    <hr className="w-1/3 bg-gray-500 h-[2px] mx-auto rounded-xl" />
                    <p className="absolute top-[-13px] px-2 left-[50%] translate-x-[-50%] bg-white font-semibold text-lg">
                      Or
                    </p>
                  </div>
                  <div className="w-[70%] border-gray-400 border-[2px] py-[5px] rounded-lg flex justify-center items-center relative cursor-pointer gap-3 duration-200 hover:bg-black hover:text-white">
                    <img
                      className="w-6 h-6 object-cover max-[600px]:left-6"
                      src="/images/glogo.png"
                      alt="google logo"
                    />
                    <p className="font-semibold text-xl">Google</p>
                  </div>
                  <div className="w-[70%] border-gray-400 border-[2px] my-[15px] py-[5px] rounded-lg flex justify-center items-center gap-3 relative cursor-pointer duration-200 hover:bg-black hover:text-white">
                    <div className="text-2xl max-[600px]:left-6">
                      <FaApple />
                    </div>
                    <p className="font-semibold text-xl">Apple</p>
                  </div>{" "}
                </>
              )}
            </div>
          </div>
          <div
            className="w-full h-full absolute top-0 left-0 z-10 bg-[#00000047]"
            onClick={() => setLogin(false)}
          ></div>
        </div>
      )}
    </>
  );
};

export default LoginSignup;
