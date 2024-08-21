import React, { useState } from "react";
import Layout from "../../components/Layout";
import GetAPI from "../../utilities/GetAPI";
import MyDataTable from "../../components/MyDataTable";
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
import { PostAPI } from "../../utilities/PostAPI";
import { toast } from "react-toastify";
import Loader from "../../components/Loader";
import { BASE_URL } from "../../utilities/URL";

const Tripdata = () => {
  const userId = localStorage.getItem("userId");
  const { reFetch, data } = GetAPI(`user/tripData/${userId}`);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(data, "data");
  const [selectedId, setSelectedId] = useState();

  let datas = [];
  data?.data?.addressData?.map((item) => {
    datas.push({
      id: item?.id,
      userId: item?.userId,
      address: item?.address,
      createdAt: item?.createdAt,
      location: (
        <p>
          {item?.lat} - {item?.lng}
        </p>
      ),
      action: (
        <button
          className="cursor-pointer px-3 py-1 rounded-lg bg-red-500 text-white"
          onClick={() => {
            onOpen();
            setSelectedId(item?.id);
          }}
        >
          Cancel
        </button>
      ),
    });
  });

  const handleDelete = async () => {
    let res = await PostAPI("user/cancelTrip", {
      tripId: selectedId,
    });
    if (res?.data?.status === "1") {
      toast.success(res?.data?.message);
      reFetch();
    } else {
      toast.error(res?.data?.message);
    }
  };
  return !data?.status == "1" ? (
    <Loader />
  ) : (
    <Layout
      content={
        <div className="font-Inter w-[80%] mx-auto min-h-screen pt-2 pb-20 max-[500px]:w-[95%]">
          <h4 className="text-xl font-bold my-5">Your Trips</h4>
          {data?.data?.addressData.length > 0 ? (
            <div className="w-full grid gap-4 grid-cols-2 max-[1000px]:grid-cols-1">
              {datas?.map((el) => {
                return (
                  <div className="w-full flex gap-3 items-center bg-green-500 rounded-lg text-white py-2 px-4 relative max-[500px]:flex-col">
                    <button
                      className="bg-red-500 px-2 rounded-lg absolute top-3 right-3"
                      onClick={() => {
                        setSelectedId(el?.id);
                        onOpen();
                      }}
                    >
                      Delete
                    </button>
                    <div className="rounded-full w-[100px] h-[100px] bg-white overflow-hidden max-[500px]:my-3">
                      <img
                        className="w-full h-full object-contain"
                        src={`${BASE_URL + data?.data?.petData?.image}`}
                        alt="pet image"
                      />
                    </div>
                    <div className="max-[500px]:text-center">
                      <p>Id: {el?.id}</p>
                      <p>Address: {el?.address}</p>
                      <p>Pet: {data?.data?.petData?.name}</p>
                      <p>Plan Trip: {data?.data?.planTripData[1]?.name}</p>
                      <p>Created At: {el?.createdAt}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-xl font-semibold text-center text-gray-500">
              Sorry you have no trips
            </p>
          )}
          <Modal onClose={onClose} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Profile Edit</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <div className="w-full font-Inter space-y-2">
                  <div>
                    <h3 className="text-lg">Are you sure to delete the trip</h3>
                  </div>
                </div>
              </ModalBody>
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
                    handleDelete();
                    onClose();
                  }}
                  backgroundColor="black"
                  textColor="white"
                >
                  Sure
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      }
    />
  );
};

export default Tripdata;
