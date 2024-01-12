import { motion } from "framer-motion";
import React from "react";
// import deliveryPhoto from "../../assets/img/delivery.png";
import backgroundImage from "../../assets/img/hero-bg.png";
import DashboardDummyImages from "../DashboardDummyImages";
import { StaticHousePropertyList, StaticHouseProperty } from "../../types/StaticHouseProperties";
import redbull from "../../assets/img/redbull.png";
import houseSellingImg from "../../assets/img/house-01.png";
import HouseListing from "../DashboardDummyImages/DashboardDummyImages";
// import banana from "../../assets/img/banana.png";
// import strawberries from "../../assets/img/strawberries-01.png";
// import chicken from "../../assets/img/chicken-01.png";

const Dashboard = () => {
  const dashboardData: StaticHousePropertyList = {
    houseProperties: [
      {
        _id: "1",
        title: "Ice Cream",
        description: "Choclate & Vanilla",
        price: "350",
        imagePath: redbull,
      },

      {
        _id: "2",
        title: "Strawberries",
        description: "Fresh Strawberries",
        price: "800",
        imagePath: redbull,
      },

      {
        _id: "3",
        title: "Banana",
        description: "Fresh Banana",
        price: "400",
        imagePath: redbull,
      },

      {
        _id: "4",
        title: "Apple",
        description: "Fresh Apples",
        price: "200",
        imagePath: redbull,
      },
    ],
  };

  return (
    <>
      <div className="py-2 flex-1 flex flex-col items-start justify-center gap-3">
        <div className="flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full">
          <p className="text-base text-orange-500 font-bold">Ever Estate Platform</p>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-white drop-shadow-xl">
            <img
              src={houseSellingImg}
              alt="delivery"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <p className="text-[1.5rem] lg:text-[3.5rem] font-bold tracking-wide text-headingColor">
          The Best House Selling Platform in
          <span className="text-orange-600 text-[2.5rem] lg:text-[4.0rem]">
            {" "}
            Sri Lanka
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
        Revolutionize your house-selling experience with our platform.
        Sellers benefit from precise price predictions through advanced algorithms
        on our intuitive website. This strategic approach not only attracts buyers 
        but also ensures sellers optimize profits in the competitive real estate market.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="bg-gradient-to-br from-orange-400 to-orange-500 w-full 
          md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all 
          ease-in-out duration-100 !text-white"
        >
          Sell Now
        </motion.button>
      </div>

      <div className="py-2 flex-1 flex items-center relative mb-[35px] ">
        <img
          src={backgroundImage}
          alt=""
          className="ml-auto lg:h-[550px] h-[420px] w-full lg:w-auto md:h-full"
        />

        <DashboardDummyImages />

        {/* <DashboardDummyImages {...{houseProperties: dashboardData.houseProperties}} /> */}
        {/* <StaticImages items={staticData.items} /> */}
      </div>
    </>
  );
};

export default Dashboard;
