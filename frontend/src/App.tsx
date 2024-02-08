import React, { RefObject, useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";
import { NavLink, Route, Routes } from "react-router-dom";
import { useMyContext } from "./config/ContextAPI";
import Home from "./components/Home";
import HomePage from "./components/Home/HomePage";
import UserPage from "./pages/SellerPages/UserPage";
import PricePrediction from "./pages/SellerPages/PricePrediction";
import SellHouse from "./pages/SellerPages/SellHouse";
import SellerProfile from "./pages/SellerPages/SellerProfile";
import MyListings from "./pages/SellerPages/MyListings";
import ViewPropertyDetails from "./components/ViewPropertyDetails";
import axios from "./axios";
import Swal from "sweetalert2";

import houseImage1 from "./assets/img/house-02.jpg";
import houseImage2 from "./assets/img/house-03.jpg";
import houseImage3 from "./assets/img/house-04.jpg";

const App = () => {
  const [openGallery, setOpenGallery] = useState<boolean>(true);

  const handleGalleryOpen = () => {
    setOpenGallery(true);
  };

  const handleGalleryClose = () => {
    setOpenGallery(false);
  };

  const scrollToComponent = (ref: RefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { dashboardRef } = useMyContext();

  // useEffect(() => {
  //   handleBtnLoginClick();
  // }, [setCurrentComponent]);

  const connectWithBackEnd = () => {
    axios
      .get("/")
      .then((res) => {
        console.log(res);
        Swal.fire({
          title: "Success",
          text: `Connect With Backend Successfully - ${res.data.Hello}`,
          icon: "success",
          confirmButtonText: "Ok",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: "Error",
          text: `Connection Failed - ${error.message}`,
          icon: "error",
          confirmButtonText: "Ok",
        });
      });
  };

  useEffect(() => {
    connectWithBackEnd();
  }, []);

  return (
    <div className="App">
      <NavLink
        to={"/home"}
        id="scroll_up_btn"
        onClick={() => scrollToComponent(dashboardRef)}
      >
        <ArrowUpwardIcon />
      </NavLink>

      {/* ========== Home Page ========== */}
      {/* ========== User Page ========== */}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/explore" element={<HomePage />} />
        <Route path="/contact" element={<HomePage />} />
        <Route path="/user/home" element={<UserPage />} />
        <Route path="/user/login" element={<UserPage />} />
        <Route path="/user/my_listings" element={<UserPage />} />
        <Route path="/user/predict_house_price" element={<PricePrediction />} />
        <Route path="/user/sell_your_house" element={<SellHouse />} />
        <Route path="/user/my_profile" element={<SellerProfile />} />
        <Route
          path="/user/myListings/viewProperty"
          element={
            <ViewPropertyDetails
              name={"Beautiful House"}
              description={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, unde delectus aspernatur veniam architecto ex labore itaque quo quod hic officiis eum laboriosam deleniti accusamus error quas modi, sequi illo."
              }
              address={"123 Main Street"}
              price={50000}
              bedrooms={3}
              bathrooms={5}
              area={4200}
              ownerName="Kasun Bandara"
              saleDate="21-01-2024"
              selling_id={""}
              seller_id={""}
              location={{
                lat: 0,
                lng: 0,
              }}
              houseImages={[houseImage1, houseImage2, houseImage3, houseImage2]}
              ownerContact1={""}
              ownerContact2={""}
              saleTime={""}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
