import houseImage1 from "../../assets/img/house-02.jpg";
import houseImage2 from "../../assets/img/house-03.jpg";
import houseImage3 from "../../assets/img/house-04.jpg";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Slide,
  IconButton,
  Button,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ImageSlider from "../ImageSlider";
// import "./PropertyGallery.css";

interface PropertyGalleryProps {
  images: { url: string }[] | any;
  open: boolean;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: React.ComponentProps<typeof Slide>,
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const PropertyGallery: React.FC<PropertyGalleryProps> = ({
  images,
  open,
  handleClose,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
        className="!w-[calc(100% - 150px)]"
    >
      <DialogTitle>
        <IconButton
          edge="end"
          color="inherit"
          onClick={handleClose}
          aria-label="close"
        >
          <Close />
        </IconButton>
      </DialogTitle>

      <DialogContent className="w-[calc(100% - 150px)] pb-5 gallery-container grid justify-center grid-rows-1 !h-[515px]">
        {/* <img
            src={images[currentImageIndex].url}
            alt={`Property Image ${currentImageIndex + 1}`}
            className="gallery-image !h-[500px] object-cover"
          /> */}
        <ImageSlider houseImages={images} />

        {/* <div className="gallery-nav">
            <Button onClick={handlePrevImage}>Previous</Button>
            <Button onClick={handleNextImage}>Next</Button>
          </div> */}
      </DialogContent>
    </Dialog>
  );
};

export default PropertyGallery;
