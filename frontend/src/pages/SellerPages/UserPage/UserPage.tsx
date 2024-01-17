import React from "react";
import Home from "../Home";
import MyListings from "../MyListings";
import Footer from "../../../components/Footer";
import SellerContent from "../../../components/SellerContent";
import Header from "../../../components/Header";

const UserPage = () => {
  return (
    <>
      <Header
        buttons={["logout", "my_profile"]}
        links={["home", "predict_house_price", "sell_your_house"]}
      />
      <SellerContent />
      <Footer />
    </>
  );
};

export default UserPage;
