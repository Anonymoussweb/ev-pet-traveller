import React, { useState } from "react";
import Layout from "../components/Layout";
import { GoogleMap, LoadScript, Marker, InfoWindow, useJsApiLoader } from "@react-google-maps/api";
import Loader from "../components/Loader";

const containerStyle = {
  width: "100%",
  height: "700px"
};

const center = {
  lat: 37.7749, // Default latitude
  lng: -122.4194 // Default longitude
};

const Maps = () => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [activeMarker, setActiveMarker] = useState(null);
  const [showingInfoWindow, setShowingInfoWindow] = useState(false);

  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCYC3-gTg2XJFIeo9fura6PoNuQzzPeBlc",
    libraries: ["places", "maps"], // Load both libraries
  });
  

  const onMarkerClick = (place, marker) => {
    setSelectedPlace(place);
    setActiveMarker(marker);
    setShowingInfoWindow(true);
  };

  const onInfoWindowClose = () => {
    setActiveMarker(null);
    setShowingInfoWindow(false);
  };

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <Loader/> ;
  }

  const customIcon = {
    url: "/images/electric_cars.png", // Replace with the URL or path to your custom logo
    scaledSize: new window.google.maps.Size(100, 100) // Adjust the size as needed
  };

  return (
    <div>
      <Layout
        content={
          <div className="">
            <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={14}>
              <Marker
                position={center}
                icon={customIcon}
                onClick={() => onMarkerClick({ name: "Current location" }, { position: center })}
              />

              {showingInfoWindow && (
                <InfoWindow position={activeMarker.position} onCloseClick={onInfoWindowClose}>
                  <div>
                    <h1>{selectedPlace.name}</h1>
                  </div>
                </InfoWindow>
              )}
            </GoogleMap>
          </div>
        }
      />
    </div>
  );
};

export default Maps;
