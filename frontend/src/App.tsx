import React, { RefObject, useEffect, useRef } from "react";
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

const App = () => {
  const scrollToComponent = (ref: RefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { dashboardRef } = useMyContext();

  // useEffect(() => {
  //   handleBtnLoginClick();
  // }, [setCurrentComponent]);

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
        <Route path="/user/login" element={<UserPage />} />
      </Routes>
    </div>
  );
};

export default App;
