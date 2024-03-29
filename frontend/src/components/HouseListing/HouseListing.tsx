import React from "react";
import "./HouseListing.css";
import { HouseListingDetails } from "../../types/HouseListingDetails";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Divider,
  Paper,
  Button,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { NavLink, Route } from "react-router-dom";
import ViewPropertyDetails from "../ViewPropertyDetails";
import { useNavigate } from "react-router-dom";

const HouseListing = (props: HouseListingDetails) => {
  const houseImagesPath = "/img/uploads/houseImages/";
  const navigate = useNavigate();

  const handleViewPropertyDetails = () => {
    // Navigate to the ViewPropertyDetails component with props data
    navigate("/user/myListings/viewProperty", { state: { props } });
  };

  const handleNoView = () => {};

  return (
    <Paper
      elevation={3}
      className="!mb-[10px] card"
      sx={{
        maxWidth: 300,
        margin: 2,
        marginTop: 2.5,
        transition: "transform 0.2s ease-in-out",
        "&:hover": { transform: "scale(1.05)", cursor: "pointer" },
      }}
    >
      <Card>
        <CardMedia
          component="img"
          height={200}
          className="img"
          // image={houseImagesPath + props.houseImages[0]}
          image={
            props.houseImages.length > 1
              ? houseImagesPath + props.houseImages[0]
              : props.houseImages[0]
          }
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {props.name}
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
              {props.address}
            </Typography>
          </p>

          <Typography
            className="!text-green-500 !font-bold !text-lg"
            sx={{ fontSize: "1.25rem", marginBottom: 1 }}
          >
            {props.price}
            <span className="" style={{ position: "relative", top: "-1px" }}>
              {" "}
              LKR
            </span>
          </Typography>
          <Divider className="!mb-[5px]" />
          <CardContent className="!p-0">
            <div
              style={{
                display: "flex",
                alignItems: "center",
                fontSize: "0.875rem",
                color: "text.secondary",
                // backgroundColor: "#EEEEEE",
                marginTop: 10,
                marginBottom: 15,
              }}
            >
              <KingBedIcon sx={{ marginRight: 0.8, color: "#2563EB" }} />
              <div style={{ textAlign: "center" }}>{props.bedrooms} Beds</div>
              <BathtubIcon
                sx={{
                  marginLeft: 3.5,
                  marginRight: 0.8,
                  color: "#2563EB",
                }}
              />
              <div style={{ textAlign: "center" }}>{props.bathrooms} Baths</div>
              <SquareFootIcon sx={{ marginLeft: 3.5, color: "#2563EB" }} />
              <div style={{ textAlign: "center" }}>{props.area} sq ft</div>
            </div>

            <div className="flex justify-center">
              <KingBedIcon sx={{ marginRight: 0.8, color: "#2563EB" }} />
              <div style={{ textAlign: "center" }}>
                {props.landSize} Perches
              </div>
            </div>
          </CardContent>
        </CardContent>

        <div className="flex justify-center mb-6 mt-2">
          <button
            onClick={
              props.viewPropertyDetails
                ? handleViewPropertyDetails
                : handleNoView
            }
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded !mt-0"
          >
            View Property
          </button>
        </div>
      </Card>
    </Paper>
  );
};

export default HouseListing;
