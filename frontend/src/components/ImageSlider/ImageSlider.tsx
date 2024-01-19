import React, { useEffect, useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import houseImage1 from "../../assets/img/house-02.jpg";
import houseImage2 from "../../assets/img/house-03.jpg";
import houseImage3 from "../../assets/img/house-04.jpg";
import { Button } from "@mui/material";

import "./ImageSlider.css";

const dummyImages = [houseImage1, houseImage3, houseImage2, houseImage1];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [images, setImages] = useState(dummyImages);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = images.map((imageSrc) => {
        const image = new Image();
        image.src = imageSrc;
        return new Promise((resolve) => {
          image.onload = resolve;
        });
      });

      await Promise.all(imagePromises);
    };

    preloadImages();
  }, [images]);

  return (
    <div>
      <div className="flex justify-center items-center gap-x-[50px]">
        <img
          src={images[activeIndex]}
          alt={`Image ${activeIndex + 1}`}
          className="mb-4 rounded-lg shadow-lg max-h-[410px] object-cover"
        />

        <div className="flex space-x-4">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              className={`h-[4rem] w-[4rem] images rounded-md object-cover cursor-pointer ${
                index === activeIndex ? "border-2 border-blue-500" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex justify-center items-center space-x-12 grid-cols-2 w-full">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded !mt-0"
          onClick={handlePrev}
        >
          Previous
        </button>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded !mt-0"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
