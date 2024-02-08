import React, { useEffect, useState } from "react";
import HouseListing from "../../../components/HouseListing";
import { useMyContext } from "../../../config/ContextAPI";
import { StaticHousePropertyList } from "../../../types/StaticHouseProperties";
import { HouseListingDetails } from "../../../types/HouseListingDetails";
import house01 from "../../../assets/house-01.png";
import house02 from "../../../assets/img/house-03.jpg";
import house03 from "../../../assets/img/house-04.jpg";
import "./MyListings.css";
import axios from "../../../axios";

const MyListings = (props: any) => {
  const { dashboardRef } = useMyContext();

  useEffect(() => {
    loadAllSellerHouseListings();
    console.log("SSSSSSSSSSSSS");
  }, []);

  const [allSellerHouseListingsData, setAllSellerHouseListingsData] = useState<
    HouseListingDetails[]
  >([]);

  const loadAllSellerHouseListings = () => {
    axios
      .get("/selling_house/S00-001")
      .then((res) => {
        console.log(res.data.content);
        setAllSellerHouseListingsData(res.data.content);

        // for (let i = 0; i < allSellerHouseListings.length; i++) {
        //   let houseListing: HouseListingDetails = {
        //     selling_id: allSellerHouseListings[i].selling_id,
        //     seller_id: allSellerHouseListings[i].seller_id,
        //     name: allSellerHouseListings[i].name,
        //     description: allSellerHouseListings[i].description,
        //     address: allSellerHouseListings[i].address,
        //     price: allSellerHouseListings[i].price,
        //     bedrooms: allSellerHouseListings[i].bedrooms,
        //     bathrooms: allSellerHouseListings[i].bathrooms,
        //     area: allSellerHouseListings[i].area,
        //     location: {
        //       lat: allSellerHouseListings[i].location.lat,
        //       lng: allSellerHouseListings[i].location.lng
        //     },
        //     houseImages: allSellerHouseListings[i].houseImages,
        //     ownerName: allSellerHouseListings[i].ownerName,
        //     ownerContact1: allSellerHouseListings[i].ownerContact1,
        //     ownerContact2: allSellerHouseListings[i].ownerContact2,
        //     saleDate: allSellerHouseListings[i].saleDate,
        //     saleTime: allSellerHouseListings[i].saleTime
        //   };

        //   allSellerHouseListingsData.push(houseListing);
        // }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const houseDummyData: HouseListingDetails[] = [
  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house02,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house03,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house02,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house03,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house03,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house02,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house03,
  //   },

  //   {
  //     name: "Beautiful Villa",
  //     address: "123 Main Street",
  //     price: 500000,
  //     bedrooms: 4,
  //     bathrooms: 3,
  //     area: "4200",
  //     mainImageUrl: house02,
  //   },
  // ];

  return (
    <main className="gap-2 w-full px-10 bg-[#FAFAFF]">
      <section className="w-full flex items-center flex-col px-4">
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
          {allSellerHouseListingsData.map((house, index) => (
            <HouseListing key={index} {...house} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default MyListings;
