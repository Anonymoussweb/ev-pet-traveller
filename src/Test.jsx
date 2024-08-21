import React, { useState, useRef } from "react";
import {
  GoogleMap,
  Autocomplete,
  useJsApiLoader,
} from "@react-google-maps/api";
import Loader from "./components/Loader";

const defaultCenter = {
  lat: 37.7749, // Default latitude
  lng: -122.4194, // Default longitude
};

const Test = () => {
  return (
    <div className="w-full bg-red-400 h-screen flex items-center justify-center">
      <fieldset className="w-full border-gray-400 border-[2px] rounded-md py-[5px] outline-none px-2 mt-1">
        <legend className="ml-2">Email</legend>
        <input className="bg-transparent outline-none h-full w-full absolute top-2 left-0 px-2" type="text" placeholder="Type email here" />
      </fieldset>
    </div>
  );
};

export default Test;
