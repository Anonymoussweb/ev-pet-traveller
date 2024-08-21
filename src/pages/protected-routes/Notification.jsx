import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import Layout from "../../components/Layout";
import GetAPI from "../../utilities/GetAPI";
import MyDataTable from "../../components/MyDataTable";
import dayjs from "dayjs";
import Loader from "../../components/Loader";

const Notification = () => {
  const userId = localStorage.getItem("userId");
  const { data } = GetAPI(`user/getNotifications/${userId}`);
  console.log(data, "data");
  const columns = [
    { field: "id", header: "Id" },
    { field: "title", header: "Title" },
    {
      field: "body",
      header: "Body",
    },
    {
      field: "status",
      header: "Status",
    },
    {
      field: "createdAt",
      header: "Created at",
    },
    {
      field: "userId",
      header: "User Id",
    },
  ];
  const datas = [];
  data?.data?.noti?.map((item, idx) => {
    datas.push({
      id: <p className="text-medium text-lg">{item?.id}</p>,
      title: <p className="text-medium text-lg">{item?.title}</p>,
      body: <p className="text-medium text-lg">{item?.body}</p>,
      status: (
        <p className="text-medium text-lg">{item?.status ? "True" : "False"}</p>
      ),
      createdAt: (
        <p className="text-medium text-lg">
          {dayjs(item?.createdAt).format("YYYY-MM-DD")}
        </p>
      ),
      userId: <p className="text-medium text-lg">{item?.createdAt}</p>,
    });
  });
  return !data.status == "1" ? (
    <Loader />
  ) : (
    <Layout
      content={
        <>
          <div className="w-full min-h-screen bg-white flex font-Inter relative">
            <div className="w-[25%] absolute top-10 left-4">
              <div
                className="w-[75%] ml-auto flex items-center gap-1 cursor-pointer"
                onClick={() => window.history.back()}
              >
                <IoIosArrowBack className="text-gray-500 text-2xl" />
                <p className="text-lg text-gray-500">Back</p>
              </div>
            </div>
            <div className="w-[80%] ml-auto">
              <h4 className="text-xl font-bold my-5">Notifications</h4>
              {data?.data?.noti?.length > 0 ? (
                <div className="w-full grid gap-3 grid-cols-3 max-[810px]:grid-cols-2 max-[500px]:grid-cols-1">
                  {data?.data?.noti?.map((item, idx) => {
                    return (
                      <div className="bg-green-500 rounded-lg text-white py-2 px-4 w-[80%] cursor-pointer">
                        <p>Id: {item?.id} </p>
                        <p>Title: {item?.title}</p>
                        <p>Body: {item?.body}</p>
                        <p>Status: {item?.status ? "True" : "False"}</p>
                        <p>
                          Created At:{" "}
                          {dayjs(item?.createdAt).format("YYYY-MM-DDTHH")}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <p className="text-xl font-semibold text-center text-gray-500">
                  Sorry you have no notifications
                </p>
              )}
            </div>
          </div>
        </>
      }
    />
  );
};

export default Notification;
