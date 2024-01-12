import React, { useEffect, useState } from "react";
import "./Explore.css";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import LiquorIcon from "@mui/icons-material/Liquor";
import SetMealIcon from "@mui/icons-material/SetMeal";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RiceBowlIcon from "@mui/icons-material/RiceBowl";
import IcecreamIcon from "@mui/icons-material/Icecream";
import {
  StaticHouseProperty,
  StaticHousePropertyList,
} from "../../types/StaticHouseProperties";
import DashboardDummyImages from "../DashboardDummyImages";
import HouseListing from "../HouseListing";
import { HouseListingDetails } from "../../types/HouseListingDetails";
import house01 from "../../assets/img/house-01.png";
import house02 from "../../assets/img/house-03.jpg";
import house03 from "../../assets/img/house-04.jpg";
import { useMyContext } from "../../config/ContextAPI";

const Explore = () => {
  const { exploreRef } = useMyContext();

  const [data, setData] = useState<StaticHousePropertyList>({
    houseProperties: [],
  });

  const houseDummyData: HouseListingDetails[] = [
    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house02,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house03,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house02,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house03,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house03,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house02,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house03,
    },

    {
      name: "Beautiful Villa",
      address: "123 Main Street",
      price: 500000,
      bedrooms: 4,
      bathrooms: 3,
      area: "4200",
      imageUrl: house02,
    },
  ];

  // const getAllItems = () => {
  //   axios
  //     .get("item")
  //     .then((res) => {
  //       let allItems: StaticFoodsList = { items: [] };
  //       let imagePath = "/img/uploads/itemImages/";

  //       for (let i = 0; i < res.data.response.length; i++) {
  //         allItems.items.push({
  //           _id: res.data.response[i].itemCode,
  //           title: res.data.response[i].itemName,
  //           description: res.data.response[i].description,
  //           price: res.data.response[i].unitPrice,
  //           imagePath: imagePath + res.data.response[i].itemImage,
  //         });
  //       }
  //       setData(allItems);
  //     })
  //     .catch((error) => {
  //       alert("Error is : " + error);
  //     });
  // };

  // useEffect(() => {
  //   getAllItems();
  // }, []);

  // const setClickStyles = () => {
  //   $("#container > div").on("click", function () {
  //     $("#container > div").css({
  //       background: "white",
  //     });

  //     $("#container > div> span:first-child").css({
  //       background: "rgb(232,0,19)",
  //     });

  //     $("#container > div> span:last-child").css({
  //       color: "rgb(81,81,81,0.8)",
  //     });

  //     $(this).css({
  //       background: "#f97316",
  //     });

  //     let lastSpan = $(this).children(":eq(1)");
  //     $(lastSpan).css({
  //       color: "white",
  //     });

  //     let firstSpan = $(this).children(":eq(0)");
  //     $(firstSpan).css({
  //       background: "#0c1b6e",
  //     });
  //   });
  // };

  return (
    <section ref={exploreRef} className="w-full flex items-center flex-col px-4 pt-4">
      <div className="mb-2">
        <h1 className="relative pb-[8px]" id="foodMenuHeading">
          Experience About Best Houses
        </h1>
      </div>

      <div
        style={{ columnGap: "18px" }}
        className="flex justify-center flex-wrap px-5 w-full mt-3 bg-[#F5EEE9] pb-[8px]"
      >
        {/* <Food items={data.items} /> */}
        {houseDummyData.map((house, index) => (
          <HouseListing key={index} {...house} />
        ))}
      </div>
    </section>
  );
};

export default Explore;
