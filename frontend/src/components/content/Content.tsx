import React from "react";
import Dashboard from "../Dashboard";
import Explore from "../Explore";

const Content = () => {
  return (
    <>
      <main className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-2 w-full py-6 px-10 bg-[#FAFAFF]">
        <Dashboard />
      </main>

      {/* ============================================================================ */}

      {/* ------------ House property Listings ------------ */}
      <main className="gap-2 w-full pt-6 px-10 bg-[#FAFAFF]">
        <Explore />
      </main>
    </>
  );
};

export default Content;
