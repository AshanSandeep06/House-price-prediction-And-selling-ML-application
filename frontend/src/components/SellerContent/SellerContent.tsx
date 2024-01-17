import React from "react";
import Dashboard from "../Dashboard";
import Explore from "../Explore";

const SellerContent = () => {
  return (
    <>
      {/* ------------ House property Listings ------------ */}
      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF]">
        <Explore />
      </main>
    </>
  );
};

export default SellerContent;
