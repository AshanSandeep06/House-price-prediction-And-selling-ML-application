// PropertyDetails.tsx

import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  IconButton,
  Button,
} from "@mui/material";
import { Bed, Bathtub, Straighten, Close } from "@mui/icons-material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PropertyGallery from "../PropertyGallery";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import HouseIcon from "@mui/icons-material/House";
import EventNoteIcon from "@mui/icons-material/EventNote";

import "./ViewPropertyDetails.css";
import { HouseListingDetails } from "../../types/HouseListingDetails";
import ImageSlider from "../ImageSlider";
import GoogleMapsApi from "../GoogleMapsApi";
import ReactLeafletMap from "../ReactLeafletMap";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "../../axios";
import HouseListing from "../HouseListing";
import Swal from "sweetalert2";

interface PropertyDetailsProps {
  property: {
    title: string;
    bedrooms: number;
    bathrooms: number;
    area: number;
    description: string;
    images: { url: string }[] | any;
  };
}

const ViewPropertyDetails = () => {
  const [openGallery, setOpenGallery] = useState(false);
  const locationProp = useLocation();
  // Access props data from location state
  const propsData = locationProp.state?.props;
  const {
    selling_id,
    bedrooms,
    bathrooms,
    houseAge,
    landSize,
    area,
    description,
    name,
    location,
    address,
    price,
    ownerName,
    saleDate,
    houseImages,
    ownerContact1,
    ownerContact2,
  } = propsData;
  const houseImagesPath = "/img/uploads/houseImages/";
  const navigate = useNavigate();

  const handleGalleryOpen = () => {
    setOpenGallery(true);
  };

  const handleGalleryClose = () => {
    setOpenGallery(false);
  };

  const handleBack = () => {
    navigate("/user/my_listings", { replace: true });
  };

  const handleDeleteHouseListing = () => {
    axios
      .delete("/selling_house/" + selling_id)
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });

        navigate("/user/my_listings", { replace: true });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message
            ? err.response.data.message
            : "Your House Listing deletion Failed.!",
        });
      });
  };

  return (
    <Card className="property-details-card">
      <CardContent>
        <div className="flex justify-center gap-[100px] mb-[13px]">
          <div>
            <Typography
              variant="h5"
              component="div"
              className="property-title"
              sx={{ marginBottom: 1 / 3 }}
            >
              {name}
            </Typography>

            <p className="!mb-[16px]">
              <LocationOnIcon
                className="!text-[#2563EB]"
                sx={{ marginRight: 0.8 }}
              />
              <Typography
                className="inline"
                variant="body2"
                color="textSecondary"
                paragraph
              >
                {address}
              </Typography>
            </p>

            <div className="relative property-image flex justify-center items-center mb-5">
              {/* Display the first image as a preview */}
              <img
                src={houseImagesPath + houseImages[0]}
                alt={`${name} Preview`}
                className="preview-image"
              />

              <h4
                onClick={handleGalleryOpen}
                className="preview absolute w-full text-center cursor-pointer"
              >
                View Images
              </h4>
            </div>

            <div
              className="info w-full bg-gray-500 details-bar !p-4"
              style={{ borderRadius: "8!important" }}
            >
              {/* details */}
              <p className="!mb-[6px]">
                <AttachMoneyIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {price}
                </Typography>
              </p>

              <p className="!mb-[6px]">
                <PersonIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {ownerName}
                </Typography>
              </p>

              <p className="!mb-[6px]">
                <PhoneIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {ownerContact1}
                </Typography>
              </p>

              <p className="!mb-[6px]">
                <HouseIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  Sale
                </Typography>
              </p>

              <p className="!mb-[6px]">
                <SquareFootIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {area} sqft
                </Typography>
              </p>

              <p>
                <EventNoteIcon
                  className="!text-[#2563EB]"
                  sx={{ marginRight: 0.8 }}
                />
                <Typography
                  className="inline"
                  variant="body2"
                  color="textSecondary"
                  paragraph
                >
                  {saleDate}
                </Typography>
              </p>
            </div>
          </div>

          {/*-------------- Google Maps Embed API --------------*/}
          {/* <GoogleMapsApi /> */}

          {/*-------------- React-Leaflet Map --------------*/}
          <ReactLeafletMap
            {...{ mapWidth: 900, mapHeight: 600, location: location }}
          />
        </div>

        <div>
          {/* ================== */}
          {/* details */}
          <h3 className="details-title !pb-[8px]">details</h3>
          <div className="flex-div">
            <div className="box">
              <p>
                <i>bedrooms :</i>
                <span>{bedrooms} BHK</span>
              </p>

              <p>
                <i>status :</i>
                <span>Sale</span>
              </p>

              <p>
                <i>House Area :</i>
                <span>{area} sqft</span>
              </p>

              <p>
                <i>Land Size :</i>
                <span>{landSize} Perches</span>
              </p>
            </div>
            <div className="box">
              <p>
                <i>age :</i>
                <span>{houseAge} years</span>
              </p>
              <p>
                <i>furnished :</i>
                <span>semi-furnished</span>
              </p>
              <p>
                <i>loan :</i>
                <span>available</span>
              </p>
            </div>
          </div>

          {/* amenities */}
          <h3 className="details-title !pb-[8px]">amenities</h3>
          <div className="flex-div">
            <div className="box">
              <p>
                <ClearIcon className="!text-[#da2c32] mr-[5px]" />
                <span>lifts</span>
              </p>
              <p>
                <ClearIcon className="!text-[#da2c32] mr-[5px]" />
                <span>security guards</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>play ground</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>gardens</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>water supply</span>
              </p>
              <p>
                <ClearIcon className="!text-[#da2c32] mr-[5px]" />
                <span>power backup</span>
              </p>
            </div>
            <div className="box">
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>parking area</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>gym</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>shopping mall</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>hospital</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>schools</span>
              </p>
              <p>
                <CheckIcon className="!text-[#da2c32] mr-[5px]" />
                <span>market area</span>
              </p>
            </div>
          </div>

          {/* description */}
          <h3 className="details-title !pb-[8px]">description</h3>
          <div className="flex-div">
            <p>{description}</p>
          </div>
        </div>

        {/* ----------------------------------------------------------------- */}
        <PropertyGallery
          images={houseImages}
          open={openGallery}
          handleClose={handleGalleryClose}
        />

        <div className="w-full flex justify-center py-[10px] !gap-[40px]">
          <div className="actions">
            <Button
              onClick={handleBack}
              variant="contained"
              color="primary"
              className="!text-[16px]"
            >
              Back
            </Button>
          </div>

          <div className="actions">
            <Button
              onClick={handleDeleteHouseListing}
              variant="contained"
              color="error"
              className="!text-[16px]"
            >
              Delete Property
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewPropertyDetails;
