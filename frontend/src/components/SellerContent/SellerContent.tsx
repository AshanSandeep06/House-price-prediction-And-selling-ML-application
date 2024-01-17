import React from "react";
import Dashboard from "../Dashboard";
import Explore from "../Explore";
import MyListings from "../../pages/SellerPages/MyListings";

const SellerContent = () => {
  return (
    <>
      {/* ------------ House property Listings ------------ */}
      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF]">
        <MyListings title={"My Listings"} width="235px"/>
      </main>
    </>
  );
};

export default SellerContent;
