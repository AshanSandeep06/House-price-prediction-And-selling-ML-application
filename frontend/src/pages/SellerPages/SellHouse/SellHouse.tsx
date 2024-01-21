import React from "react";
import Header from "../../../components/Header";
import "./SellHouse.css";

const SellHouse = () => {
  return (
    <>
      <Header
        buttons={["logout", "my_profile"]}
        links={["my_listings", "predict_house_price", "sell_your_house"]}
        prefix="/user/"
      />

      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF] h-[calc(100vh-80px)]">
        <main className="gap-2 w-full px-10 bg-[#FAFAFF]">
          <h1
            className="text-center relative !pb-[8px] mb-[35px]"
            id="foodMenuHeading2"
          >
            Sell Your House
          </h1>
        </main>
      </main>
    </>
  );
};

export default SellHouse;
