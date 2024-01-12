import React, { RefObject, useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";
import { NavLink } from "react-router-dom";
import { useMyContext } from "./config/ContextAPI";

const App = () => {
  const homeRef = useRef<null>(null);
  const exploreRef = useRef<null>(null);
  const footerRef = useRef<HTMLElement | null>(null);

  const scrollToComponent = (ref: RefObject<any>) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  const { dashboardRef } = useMyContext();

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
      <Header
        buttons={["login", "sign up", "POST YOUR AD"]}
        links={["home", "explore", "contact"]}
      />
      <Content />
      <Footer />
    </div>
  );
};

export default App;
