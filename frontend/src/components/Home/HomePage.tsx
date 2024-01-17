import React from "react";
import Header from "../Header";
import Content from "../content";
import Footer from "../Footer";

const HomePage = () => {
  return (
    <>
      <Header
        buttons={["login", "sign up", "POST YOUR AD"]}
        links={["home", "explore", "contact"]} prefix="/" />
      <Content />
      <Footer />
    </>
  );
};

export default HomePage;
