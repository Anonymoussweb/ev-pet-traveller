import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { toast } from "react-toastify";

const ProtectedRoutes = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (
      localStorage.getItem("loginStatus") ||
      localStorage.getItem("accessToken") ||
      localStorage.getItem("userId")
    ) {
      navigate("/home-page");
      setIsLoading(false);
    }
    if (
      !localStorage.getItem("loginStatus") ||
      !localStorage.getItem("accessToken")
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("loginStatus");
      localStorage.removeItem("userEmail");
      localStorage.removeItem("userId");
      navigate("/");
      toast.info("Please login first!");
      setIsLoading(false);
    }
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return <>{props.component}</>;
};

export default ProtectedRoutes;
