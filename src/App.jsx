import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurServices from "./pages/OurServices";
import PlanTrip from "./pages/PlanTrip";
import { ChakraProvider } from "@chakra-ui/react";
import Ev from "./pages/Ev";
import Maps from "./pages/Maps";
import ProtectedRoutes from "./components/ProtectedRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./pages/protected-routes/HomePage";
import PetProfile from "./pages/protected-routes/PetProfile";
import Payments from "./pages/protected-routes/Payments";
import Notification from "./pages/protected-routes/Notification";
import Profile from "./pages/protected-routes/Profile";
import EVCharger from "./pages/protected-routes/EVCharger";
import Test from "./Test";
import Tripdata from "./pages/protected-routes/Tripdata";
import OTP from "./pages/OTP";
import ResetOtp from "./pages/ResetOtp";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ChakraProvider>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about-us" element={<AboutUs />} />
            <Route exact path="/our-services" element={<OurServices />} />
            <Route exact path="/plan-trip" element={<PlanTrip />} />
            <Route exact path="/ev" element={<Ev />} />
            <Route exact path="/map" element={<Maps />} />
            <Route
              exact
              path="/home-page"
              element={<ProtectedRoutes component={<HomePage />} />}
            />
            <Route
              exact
              path="/pet-profile"
              element={<ProtectedRoutes component={<PetProfile />} />}
            />
            <Route
              exact
              path="/payments"
              element={<ProtectedRoutes component={<Payments />} />}
            />
            <Route
              exact
              path="/notifications"
              element={<ProtectedRoutes component={<Notification />} />}
            />
            <Route
              exact
              path="/profile"
              element={<ProtectedRoutes component={<Profile />} />}
            />
            <Route
              exact
              path="/ev-charger"
              element={<ProtectedRoutes component={<EVCharger />} />}
            />
            <Route exact path="/otp" element={<OTP />} />
            <Route exact path="/reset" element={<ResetOtp />} />
            <Route exact path="/trip-data" element={<Tripdata />} />
            <Route exact path="/test" element={<Test />} />
          </Routes>
        </Router>
        <ToastContainer />
      </ChakraProvider>
    </>
  );
}

export default App;
