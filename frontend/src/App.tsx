import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <a href="#" id="scroll_up_btn">
        <ArrowUpwardIcon />
      </a>

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
