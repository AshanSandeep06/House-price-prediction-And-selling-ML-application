import React, { useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface ImageShowSliderProps {
  images: string[];
}

const ImageShowSlider: React.FC<ImageShowSliderProps> = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    className: "slides",
  };

  useEffect(() => {
    console.log(images.length);
  }, [images]);

  return (
    <Slider {...settings}>
      {/* {images.length == 1 ? (
        <div>
          <img src={images[0]} alt={`slide-01`} />
        </div>
      ) : (
        images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`slide-${index}`} />
          </div>
        ))
      )} */}

      {/* ---------------------------------------------------------------- */}

      {images &&
        images.map((image, index) => (
          <img
            id="itemImage"
            key={index}
            src={image}
            className="object-contain !h-[350px]"
            alt={`slide-${index}`}
          />
        ))}
    </Slider>
  );
};

export default ImageShowSlider;
