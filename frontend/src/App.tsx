import React, { useRef } from "react";
import logo from "./logo.svg";
import "./App.css";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import Header from "./components/Header";
import Content from "./components/content";
import Footer from "./components/Footer";

const App = () => {
  const homeRef = useRef<null>(null);
  const exploreRef = useRef<null>(null);
  const footerRef = useRef<HTMLDivElement | null>(null);

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
      <Footer scrollToComponent={function (ref: any): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default App;
