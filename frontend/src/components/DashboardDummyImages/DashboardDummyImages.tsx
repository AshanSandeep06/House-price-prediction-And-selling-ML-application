import React from "react";
import { motion } from "framer-motion";
import {
  StaticHousePropertyList,
  StaticHouseProperty,
} from "../../types/StaticHouseProperties";
import "./DashboardDummyImages.css";
import house01 from "../../assets/img/house-02.jpg";
import house02 from "../../assets/img/house-03.jpg";
import house03 from "../../assets/img/house-04.jpg";

// const DashboardDummyImages = (props: StaticHousePropertyList) => {
//   return (
//     <div
//       id="foodsImagesContainer"
//       className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-5 md:gap-8 flex-wrap text-[#4a4343] xl:-translate-x-2"
//     >
//       {props.houseProperties?.map((item, index) => (
//         <div
//           key={item._id}
//           className="cursor-pointer !h-[210px] w-[150px] lg:min-w-[200px] drop-shadow-lg p-2 bg-[rgba(256,256,256,0.4)] backdrop-blur-md rounded-xl flex flex-col items-center justify-center"
//         >
//           <motion.img
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 1.1 }}
//             src={item.imagePath}
//             alt="foodImage"
//             className="w-24 lg:w-40 -mt-10 lg:-mt-20"
//           />
//           <p className="text-base lg:text-lg font-semibold text-textColor">
//             {item.title}
//           </p>
//           <p className="text-[10px] lg:text-lg !text-[rgb(81,81,81)] !opacity-[0.7] font-semibold my-2 lg:my-3">
//             {item.description}
//           </p>
//           <p className="text-sm font-semibold text-headingColor">
//             {item.price}{" "}
//             <span className="text-xs text-red-600 relative bottom-[0.75px]">
//               LKR
//             </span>
//           </p>
//         </div>
//       ))}
//     </div>
//   );
// };

const DashboardDummyImages = () => {
  const properties = [
    {
      id: 1,
      title: "Beautiful Villa",
      description: "A stunning villa with breathtaking views",
      price: "$1,000,000",
      image: house01,
    },
    {
      id: 2,
      title: "Cozy Cottage",
      description: "A charming cottage in a peaceful location",
      price: "$500,000",
      image: house02,
    },
    {
      id: 3,
      title: "Luxury Mansion",
      description: "An extravagant mansion with top-notch amenities",
      price: "$5,000,000",
      image: house03,
    },
  ];

  return (
    <div className="w-full h-full absolute flex items-center justify-center top-6 left-0 lg:px-30 lg:py-4 gap-5 md:gap-8 flex-wrap text-[#4a4343] xl:-translate-x-2">
      <div className="grid grid-cols-3 gap-8">
        {properties.map((property) => (
          <div
            key={property.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={property.image}
              alt={property.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 text-center">
              <h2 className="text-xl font-bold mb-4">{property.title}</h2>
              <p className="text-gray-600 mb-6">{property.description}</p>
              <p className="text-green-500 font-bold text-lg">
                {property.price}
              </p>
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-6">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardDummyImages;
