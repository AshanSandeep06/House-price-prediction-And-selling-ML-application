import React, { useState } from "react";
import HouseListing from "../../../components/HouseListing";
import { useMyContext } from "../../../config/ContextAPI";
import { StaticHousePropertyList } from "../../../types/StaticHouseProperties";
import { HouseListingDetails } from "../../../types/HouseListingDetails";
import house01 from "../../../assets/house-01.png";
import house02 from "../../../assets/img/house-03.jpg";
import house03 from "../../../assets/img/house-04.jpg";

const MyListings = (props: any) => {
  const { dashboardRef } = useMyContext();

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

  return (
    <main className="gap-2 w-full px-10 bg-[#FAFAFF]">
      <section className="w-full flex items-center flex-col px-4 pt-4">
        <div className="mb-2">
          <h1 className="relative pb-[8px]" id="foodMenuHeading">
            {props.title}
          </h1>
        </div>

        <div
          style={{ columnGap: "18px" }}
          className="flex justify-center flex-wrap px-5 w-full mt-3 bg-[#F5EEE9] pb-[15px]"
        >
          {/* <Food items={data.items} /> */}
          {houseDummyData.map((house, index) => (
            <HouseListing key={index} {...house} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyListings;
