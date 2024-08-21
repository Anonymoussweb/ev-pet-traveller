import React, { useState, useRef } from "react";
import Layout from "../components/Layout";
import { SlArrowUp, SlArrowRight } from "react-icons/sl";
import { IoIosSend } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { MdOutlinePets } from "react-icons/md";
import { PiClockClockwise, PiClockBold, PiMoneyFill } from "react-icons/pi";
import { RiPinDistanceFill } from "react-icons/ri";
import { FaChargingStation } from "react-icons/fa6";
import {
  GoogleMap,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
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
import { PostAPI } from "../utilities/PostAPI";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";

const PlanTrip = () => {
  const navigate = useNavigate();
  const defaultCenter = {
    lat: 37.7749, // Default latitude
    lng: -122.4194, // Default longitude
  };

  const [showmenu, setShowMenu] = useState(false);
  const [showcontent, setShowContent] = useState(false);
  const [swap, setSwap] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const autocompleteRef = useRef(null);
  const autocompleteRef1 = useRef(null);
  const [trip, setTrip] = useState({
    planTrip: "Lodging",
    chargeCost: "50.00",
    energyUsed: "25.00",
    stayFor: "120",
    distanceFromCharger: "10.5",
    pickupLat: "",
    pickupLng: "",
    dropoffLat: "",
    dropoffLng: "",
    carId: "1",
    destinationAddress: "",
    planTrpickAddressip: "",
    petId: "1",
    stopId: "1",
    userId: localStorage.getItem("userId") || "1",
  });
  console.log(trip, "trip");
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc",
    libraries: ["places", "maps"], // Load both libraries
  });

  const handlePlaceChange = () => {
    const place = autocompleteRef.current?.getPlace();
    console.log(place);
    if (place?.geometry) {
      const { lat, lng } = place.geometry.location;
      const latLng = {
        lat: lat(),
        lng: lng(),
      };
      setTrip({
        ...trip,
        pickupLat: latLng?.lat,
        pickupLng: latLng?.lng,
        planTrpickAddressip: place?.formatted_address,
      });
    } else {
      console.error("Place not found");
    }
  };
  const handlePlaceChange1 = () => {
    const place = autocompleteRef1.current?.getPlace();
    if (place?.geometry) {
      const { lat, lng } = place.geometry.location;
      const latLng = {
        lat: lat(),
        lng: lng(),
      };

      setTrip({
        ...trip,
        dropoffLat: latLng?.lat,
        dropoffLng: latLng?.lng,
        destinationAddress: place?.formatted_address,
      });
    } else {
      console.error("Place not found");
    }
  };

  const PlanTrip = async () => {
    let res = await PostAPI("user/addTrip", trip);
    console.log(res);
    if (res?.data?.status === "1") {
      toast.success("Trip has been planned successfully!!");
    }
  };
  return (
    <Layout
      content={
        <>
          <div className="w-full px-20 max-[1170px]:px-5">
            <hr className="w-full bg-gray-300 h-[2px] mx-auto" />
            <div className="flex gap-6 mt-16 max-lg:flex-wrap">
              {/* ============1st Section================ */}
              <div className="h-72 font-Inter w-[20%] border-gray-300 border-r-[2px] max-md:border-none max-[600px]:w-full">
                <SlArrowRight
                  className={`cursor-pointer duration-150 ${
                    showmenu ? "rotate-90" : ""
                  }`}
                  size={30}
                  onClick={() => setShowMenu((prev) => !prev)}
                />
                <ul
                  className={`font-semibold text-lg mt-4 ml-4 ${
                    showmenu ? "" : "hidden"
                  }`}
                >
                  <li className="hover:underline cursor-pointer">Park</li>
                  <li className="hover:underline cursor-pointer">Beach</li>
                  <li className="hover:underline cursor-pointer">Playground</li>
                  <li className="hover:underline cursor-pointer">Hotels</li>
                  <li className="hover:underline cursor-pointer">Airbnb</li>
                  <li className="hover:underline cursor-pointer">
                    Vet clinics
                  </li>

                  <li
                    className="hover:underline cursor-pointer"
                    onClick={() => navigate("/trip-data")}
                  >
                    Your trips
                  </li>
                </ul>
              </div>
              {/* ==============Mid Section================== */}
              <div className="flex flex-col items-center justify-center w-[60%] font-Inter relative max-lg:mx-auto max-md:w-full">
                <div className="w-[80%]">
                  <div className="w-[80%] h-10 mx-auto rounded-2xl overflow-hidden bg-gray-300 relative">
                    {!isLoaded ? (
                      <input
                        className="w-full h-full bg-transparent outline-none px-4"
                        placeholder="Location"
                        type="text"
                      />
                    ) : (
                      <Autocomplete
                        onLoad={(autocomplete) =>
                          (autocompleteRef.current = autocomplete)
                        }
                        onPlaceChanged={handlePlaceChange}
                      >
                        <input
                          type="text"
                          placeholder="Location"
                          className="w-full h-10 bg-transparent outline-none px-4"
                        />
                      </Autocomplete>
                    )}
                    <div className="absolute top-[50%] right-8 bg-gray-200 p-2 rounded-md shadow-md translate-y-[-50%] max-sm:right-4">
                      <IoIosSend />
                    </div>
                  </div>
                  <div className="w-[80%] h-10 mx-auto rounded-2xl overflow-hidden bg-gray-300 relative mt-2">
                    {!isLoaded ? (
                      <input
                        className="w-full h-full bg-transparent outline-none px-4"
                        placeholder="Search for a destination"
                        type="text"
                      />
                    ) : (
                      <Autocomplete
                        onLoad={(autocomplete) =>
                          (autocompleteRef1.current = autocomplete)
                        }
                        onPlaceChanged={handlePlaceChange1}
                      >
                        <input
                          type="text"
                          placeholder="Search for a destination"
                          className="w-full h-10 bg-transparent outline-none px-4"
                        />
                      </Autocomplete>
                    )}
                    <div className="absolute top-[50%] right-10  translate-y-[-50%] max-sm:right-4">
                      <IoSearchSharp />
                    </div>
                  </div>
                  <div className="w-[80%] h-10 mx-auto rounded-2xl overflow-hidden bg-gray-300 relative mt-2">
                    <input
                      className="w-full h-full bg-transparent outline-none px-4"
                      placeholder="My pet"
                      type="text"
                    />
                    <div className="absolute top-[50%] right-10  translate-y-[-50%] max-sm:right-4">
                      <MdOutlinePets />
                    </div>
                  </div>
                  <div className="flex gap-4 justify-center mt-8">
                    <button className="px-28 py-1 border-green-500 border-[1px] rounded-2xl text-green-500 text-xl max-sm:px-10 hover:text-white hover:bg-green-500">
                      Cancel
                    </button>{" "}
                    <button
                      className="px-28 py-1 bg-green-500 text-xl rounded-2xl text-white border-green-500 border-[1px] whitespace-nowrap max-sm:px-10 hover:bg-white hover:text-green-500"
                      onClick={onOpen}
                    >
                      Plan trip
                    </button>
                  </div>
                  <div className="w-full my-16">
                    <div
                      className={`w-[80%] mx-auto text-lg font-semibold text-gray-600 ${
                        showcontent ? "" : "invisible"
                      }`}
                    >
                      <ul className="space-y-2">
                        <li className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <PiClockClockwise size={20} />
                            <p>Stop after</p>
                          </div>
                          <p className="underline">2h</p>
                        </li>
                        <li className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <PiClockBold size={20} />
                            <p>Stay for</p>
                          </div>
                          <p className="underline">1h</p>
                        </li>
                        <li className="flex justify-between items-center">
                          <div className="flex items-center gap-2">
                            <RiPinDistanceFill size={20} />
                            <p>Distance from charger</p>
                          </div>
                          <p className="underline">200m</p>
                        </li>
                      </ul>
                      <div className="flex justify-center gap-12 text-3xl my-8">
                        <FaChargingStation />
                        <FaChargingStation />
                        <FaChargingStation />
                        <FaChargingStation />
                        <FaChargingStation />
                        <FaChargingStation />
                        <FaChargingStation />
                      </div>
                      <div className="h-[25px] bg-gradient-to-r from-[#750707] via-[#278AD2]  to-[#64D03E] relative rounded-2xl">
                        .
                        <img
                          className="absolute top-[-13px] left-3"
                          src="/images/electriccar.png"
                          alt=""
                        />
                      </div>
                      <div className="flex justify-between items-center gap-2 mt-4">
                        <p>Start</p>
                        {/* <hr className="h-[2px] bg-gray-400 w-full" /> */}
                        <input className="w-full" type="range" />
                        <p>Finish</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute top-0 left-10 pointer-events-none text-gray-500 max-[900px]:left-0">
                  <p>Hotels</p>
                </div>
                <div className="absolute top-68 left-0">
                  {" "}
                  <SlArrowRight
                    className={`cursor-pointer duration-150 ${
                      showcontent ? "" : "rotate-[-90deg]"
                    }`}
                    size={30}
                    onClick={() => setShowContent((prev) => !prev)}
                  />
                </div>
              </div>
              {/* ==============3rd Section============== */}
              <div className="h-72 font-Inter border-gray-300 border-l-[2px] text-white px-4 shrink-0 max-lg:border-none max-lg:p-0">
                <div className="bg-black rounded-xl flex justify-center items-center gap-2 px-2 cursor-pointer">
                  <div className="h-[35px] relative top-[-12px] ">
                    <img
                      width="100%"
                      height="100%"
                      src="/images/electriccar.png"
                      alt="electriccar image"
                    />
                  </div>
                  <p className="whitespace-nowrap">BMW series 2</p>
                </div>
                <p className="text-black font-semibold">Change car</p>
              </div>
            </div>
            <p className="text-center font-Inter text-lg mb-40">
              Note you have two free trial before you need to create an account
              to continue planning your trip
            </p>
          </div>

          {/* =================Modal====================== */}
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader></ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {swap ? (
                  <div className="text-lg font-semibold flex justify-center flex-col items-center gap-6 mb-10">
                    <div className="bg-black text-white rounded-xl flex justify-center items-center gap-2 px-2 cursor-pointer">
                      <div className="h-[35px] relative top-[-12px] ">
                        <img
                          width="100%"
                          height="100%"
                          src="/images/electriccar.png"
                          alt="electriccar image"
                        />
                      </div>
                      <p>BMW series 2</p>
                    </div>
                    <div className="text-center text-base mt-4 space-y-2">
                      <p className="text-green-500">
                        Your trip has been planned succesfully
                      </p>
                      {/* <p>.......</p> */}
                      {/* <p>Hold on a minute while it connects</p> */}
                    </div>
                  </div>
                ) : (
                  <div className="text-lg font-semibold flex justify-center flex-col items-center gap-6 mb-10">
                    <div className="bg-black text-white rounded-xl flex justify-center items-center gap-2 px-2 cursor-pointer">
                      <div className="h-[35px] relative top-[-12px] ">
                        <img
                          width="100%"
                          height="100%"
                          src="/images/electriccar.png"
                          alt="electriccar image"
                        />
                      </div>
                      <p>BMW series 2</p>
                    </div>
                    <div className="text-center text-base mt-4 space-y-2">
                      <p>Your trip is about to plan</p>
                      <p>connecting.......</p>
                      <p>Click Plan trip to confirm</p>
                    </div>
                  </div>
                )}
              </ModalBody>

              {swap ? (
                ""
              ) : (
                <ModalFooter textAlign="center">
                  <Button
                    colorScheme="white"
                    textColor="green"
                    border="1px"
                    borderRadius="15px"
                    paddingRight="10"
                    paddingLeft="10"
                    mr={3}
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    textColor="white"
                    border="1px"
                    colorScheme="green"
                    borderRadius="15px"
                    onClick={() => {
                      if (
                        !localStorage.getItem("accessToken") ||
                        !localStorage.getItem("userId")
                      ) {
                        return toast.error("Please Login to plan a trip");
                      } else if (
                        trip?.pickupLat === "" ||
                        trip?.dropoffLat === ""
                      ) {
                        return toast.error("Please complete the input fields");
                      } else {
                        setSwap((prev) => !prev);
                        PlanTrip();
                        setTimeout(() => {
                          setSwap((prev) => !prev);
                          onClose();
                        }, 3000);
                      }
                    }}
                  >
                    Plan Trip
                  </Button>
                </ModalFooter>
              )}
            </ModalContent>
          </Modal>
        </>
      }
    />
  );
};

export default PlanTrip;
