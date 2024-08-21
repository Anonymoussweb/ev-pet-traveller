import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";
import { PostAPI } from "../../utilities/PostAPI";
import dayjs from "dayjs";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { toast } from "react-toastify";

const EVCharger = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [tab, setTab] = useState("EV");
  const [car, setCar] = useState();
  const [modType, setModType] = useState("");
  const [delCarId, setDelCarId] = useState();
  const [addCar, setAddCar] = useState({
    ev: "",
    plateNumber: "",
    hybrid: "",
    userId: localStorage.getItem("userId"),
  });

  const getallcars = async () => {
    let res = await PostAPI("user/getAllCars", {
      userId: localStorage.getItem("userId"),
    });
    if (res?.data?.status === "1") {
      setCar(res?.data?.data?.cars);
    }
  };
  useEffect(() => {
    getallcars();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddCar({
      ...addCar,
      [name]: value,
    });
  };
  const addCarSubmit = async () => {
    let res = await PostAPI("user/addCar", addCar);
    console.log(res, "resaddcar");
    if (res?.data?.status === "1") {
      toast.success(res?.data?.message);
      getallcars();
    } else {
      toast.error(res?.data?.message);
    }
  };
  const delCar = async () => {
    let res = await PostAPI("user/removeCar", {
      carId: delCarId,
    });
    console.log(res, "decarres");
    if (res?.data?.status === "1") {
      toast.success(res?.data?.message);
      getallcars();
    } else {
      toast.error(res?.data?.message);
    }
  };
  return (
    <Layout
      content={
        <>
          <div className="w-full min-h-screen bg-white flex font-Inter max-sm:flex-col">
            <div className="w-[25%] border-gray-400 border-r-[1px] max-[900px]:border-0">
              <div
                className="w-[75%] ml-auto flex items-center gap-1 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <IoIosArrowBack className="text-gray-500 text-2xl" />
                <p className="text-lg text-gray-500">Back</p>
              </div>
              <div className="w-[66%] ml-auto flex flex-col justify-center gap-1 cursor-pointer my-10">
                <div>
                  <img
                    className="w-[150px]"
                    src="/images/Group 39.png"
                    alt=""
                  />
                  <select className="w-[120px] text-gray-500" name="" id="">
                    <option value="">Type of car</option>
                    <option value="">Car1</option>
                    <option value="">Car2</option>
                  </select>
                </div>
                <p
                  className="mt-5 w-[100px] text-center text-white font-semibold bg-gray-500 rounded-lg border-gray-500 px-3 py-1 duration-200 hover:text-black border-[1px] hover:bg-white"
                  onClick={() => {
                    setModType("add");
                    onOpen();
                  }}
                >
                  Add Car
                </p>
              </div>
            </div>
            {/* ==============2=============== */}
            <div className="w-[75%] px-6 flex max-lg:flex-col max-lg:gap-10 max-sm:w-full">
              <div className="w-1/2 max-lg:w-full">
                <h4
                  className={` ${
                    tab === "EV Charger/Station"
                      ? "text-black underline"
                      : "text-gray-400"
                  } text-2xl font-semibold text-center cursor-pointer underline-offset-[5px] whitespace-nowrap`}
                  onClick={() => setTab("EV Charger/Station")}
                >
                  Available EV Charger/Station
                </h4>
                {/* ================= */}
                {tab == "EV Charger/Station" && (
                  <div className="space-y-2 mt-5">
                    <div className="flex w-[80%] max-w-[360px] mx-auto justify-center items-center gap-5 max-sm:border-none bg-[#7671711a] border-gray-600 border-[1px] rounded-xl py-2 max-[500px]:w-full">
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
                          Available . 22kw - Ev Model:54787
                        </p>
                      </div>
                    </div>
                    {/* ===========second row============= */}
                    <div className="flex w-[80%] max-w-[360px] mx-auto justify-center items-center gap-5 max-sm:border-none bg-[#7671711a] border-gray-600 border-[1px] rounded-xl py-2 max-[500px]:w-full">
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
                          Available . 22kw - Ev Model:54787
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-1/2 max-lg:w-full">
                <h4
                  className={` ${
                    tab === "EV" ? "text-black underline" : "text-gray-400"
                  } text-2xl font-semibold text-center cursor-pointer underline-offset-[5px]`}
                  onClick={() => setTab("EV")}
                >
                  EV
                </h4>
                {tab == "EV" && (
                  <div className="w-full font-Inter py-10 space-y-2">
                    {car?.map((item) => {
                      return (
                        <div className="flex items-center justify-center gap-3 border-gray-500 border-[1px] rounded-xl p-2 relative">
                          <button
                            className="text-white text-sm bg-red-500 rounded-lg px-2 absolute top-5 left-5 cursor-pointer"
                            onClick={() => {
                              setModType("delete");
                              setDelCarId(item?.id);
                              onOpen();
                            }}
                          >
                            Delete
                          </button>
                          <div>
                            <img
                              className="w-[150px]"
                              src="/images/Group 39.png"
                              alt=""
                            />
                          </div>
                          <div>
                            <p className="text-base">EV: {item?.ev}</p>
                            <p className="text-base">
                              Plat Number: {item?.plateNumber}
                            </p>
                            <p className="text-base">Hybrid: {item?.hybrid}</p>
                            <p className="text-base">
                              Created At:{" "}
                              {dayjs(item?.createdAt).format("YYYY-MM-DD")}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Profile Edit</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                {modType === "add" ? (
                  <div className="w-full font-Inter space-y-2">
                    <div>
                      <label className="" htmlFor="">
                        EV
                      </label>
                      <input
                        className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                        type="text"
                        placeholder="Ev system"
                        value={addCar?.name}
                        onChange={handleChange}
                        name="ev"
                      />
                    </div>
                    <div>
                      <label className="" htmlFor="">
                        Plate Number
                      </label>
                      <input
                        className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                        type="text"
                        placeholder="SDF-3123"
                        value={addCar?.plateNumber}
                        onChange={handleChange}
                        name="plateNumber"
                      />
                    </div>
                    <div>
                      <label className="" htmlFor="">
                        Hybrid
                      </label>
                      <input
                        className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                        type="text"
                        placeholder="BMW"
                        value={addCar?.hybrid}
                        onChange={handleChange}
                        name="hybrid"
                      />
                    </div>
                  </div>
                ) : (
                  <div className="w-full font-Inter space-y-2">
                    <div>
                      <h3 className="text-lg">
                        Are you sure to delete the trip
                      </h3>
                    </div>
                  </div>
                )}
              </ModalBody>
              {modType === "add" ? (
                <ModalFooter>
                  <Button
                    onClick={() => {
                      addCarSubmit();
                      onClose();
                    }}
                    mr={2}
                  >
                    Add
                  </Button>
                  <Button
                    onClick={onClose}
                    backgroundColor="black"
                    textColor="white"
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              ) : (
                <ModalFooter>
                  <Button
                    onClick={() => {
                      onClose();
                    }}
                    mr={2}
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => {
                      delCar();
                      onClose();
                    }}
                    backgroundColor="black"
                    textColor="white"
                  >
                    Delete
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

export default EVCharger;
