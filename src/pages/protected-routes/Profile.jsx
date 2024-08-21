import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { IoIosArrowBack } from "react-icons/io";
import { HiMiniUserCircle } from "react-icons/hi2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PostAPI } from "../../utilities/PostAPI";
import { BASE_URL } from "../../utilities/URL";
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
import Loader from "../../components/Loader";

const Profile = () => {
  // ===================
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [profile, setProfile] = useState();
  const [updateProfile, setUpdateprofile] = useState({
    name: "",
    email: "",
    phone: "",
    userId: "",
  });
  const navigate = useNavigate();
  const getProfile = async () => {
    let res = await PostAPI("user/getProfile", {
      userId: localStorage.getItem("userId"),
    });
    if (res?.data?.status === "1") {
      setProfile(res?.data?.data?.userData);
    }
  };
  useEffect(() => {
    getProfile();
  }, []);
  // ==========Update============
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdateprofile({
      ...updateProfile,
      [name]: value,
    });
  };
  const update = async () => {
    let res = await PostAPI("user/updateUser", updateProfile);
    if (res?.data?.status === "1") {
      toast.success(res?.data?.message);
      onClose();
      getProfile();
    }
  };

  return !profile ? (
    <Loader />
  ) : (
    <Layout
      content={
        <>
          <div className="w-full h-screen bg-white flex font-Inter max-sm:flex-col">
            <div className="w-[25%] min-w-[250px] border-gray-400 border-r-[1px] max-sm:border-0">
              <div
                className="w-[75%] ml-auto flex items-center gap-1 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <IoIosArrowBack className="text-gray-500 text-2xl" />
                <p className="text-lg text-gray-500">Back</p>
              </div>
              <div className="w-[66%] ml-auto flex items-center gap-1 cursor-pointer my-10">
                <HiMiniUserCircle size={27} />{" "}
                <h4
                  className="text-gray-500 text-xl"
                  onClick={() => {
                    onOpen();
                    setUpdateprofile({
                      ...updateProfile,
                      name: profile?.name,
                      email: profile?.email,
                      phone: profile?.phone,
                      userId: profile?.id,
                    });
                  }}
                >
                  Profile edit
                </h4>
              </div>
              <div className="w-[66%] ml-auto">
                <ul className="text-lg text-gray-600">
                  <li className="cursor-pointer hover:underline underline-offset-4">
                    Type of post
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-4">
                    Name
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-4">
                    Email address
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-4">
                    Phone number
                  </li>
                  <li className="cursor-pointer hover:underline underline-offset-4">
                    Created Avatar
                  </li>
                </ul>
              </div>
              <p
                className="text-gray-500 font-semibold text-lg w-[66%] ml-auto mt-16 cursor-pointer duration-200 hover:text-red-500 hover:tracking-wider"
                onClick={() => {
                  localStorage.removeItem("accessToken");
                  navigate("/");
                  toast.success("Logged Out!");
                }}
              >
                Logout
              </p>
            </div>
            <div className="w-[75%] mx-auto">
              <div className="bg-gray-200 max-w-[300px] mx-auto mt-20 relative flex flex-col items-center rounded-md shadow-md">
                <img
                  className="w-[100px] rounded-full object-cover absolute top-[-50px] left-[50%] translate-x-[-50%]"
                  src={
                    profile?.image
                      ? `${BASE_URL + profile?.image}`
                      : `https://static.vecteezy.com/system/resources/thumbnails/005/129/844/small_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg`
                  }
                  alt=""
                />
                <div className="py-16 mx-auto text-center space-y-3">
                  <p className="text-lg font-Inter">Name: {profile?.name}</p>
                  <p className="text-lg font-Inter">Email: {profile?.email}</p>
                  <p className="text-lg font-Inter">
                    Phone #: {profile?.phone}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Profile Edit</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="w-full font-Inter space-y-2">
                  <div>
                    <label className="" htmlFor="">
                      Name
                    </label>
                    <input
                      className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                      type="text"
                      placeholder="Name"
                      value={updateProfile?.name}
                      onChange={handleChange}
                      name="name"
                    />
                  </div>
                  <div>
                    <label className="" htmlFor="">
                      Email
                    </label>
                    <input
                      className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                      type="text"
                      placeholder="Name"
                      value={updateProfile?.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                  <div>
                    <label className="" htmlFor="">
                      Phone #
                    </label>
                    <input
                      className="w-full border-gray-300 border-[2px] outline-none px-2 py-1 rounded-lg mt-1"
                      type="text"
                      placeholder="Name"
                      value={updateProfile?.phone}
                      onChange={handleChange}
                      name="phone"
                    />
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onClick={() => {
                    update();
                  }}
                  mr={2}
                >
                  Update
                </Button>
                <Button
                  onClick={onClose}
                  backgroundColor="black"
                  textColor="white"
                >
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </>
      }
    />
  );
};

export default Profile;
