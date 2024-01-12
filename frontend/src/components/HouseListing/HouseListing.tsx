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
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import KingBedIcon from "@mui/icons-material/KingBed";
import BathtubIcon from "@mui/icons-material/Bathtub";
import SquareFootIcon from "@mui/icons-material/SquareFoot";

const HouseListing = (props: HouseListingDetails) => {
  return (
    <Paper
      elevation={3}
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
          image={props.imageUrl}
          alt={props.name}
        />
        <CardContent>
          <Typography variant="h6" component="div" gutterBottom>
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" paragraph>
            {props.address}
          </Typography>
          <Typography
            sx={{ color: "primary.main", fontSize: "1.25rem", marginBottom: 1 }}
          >
            <AttachMoneyIcon sx={{ marginRight: 0.5 }} />
            {props.price}
          </Typography>
          <Divider />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "0.875rem",
              color: "text.secondary",
            }}
          >
            <KingBedIcon sx={{ marginRight: 0.8 }} />
            <div style={{ textAlign: "center" }}>{props.bedrooms} Beds</div>
            <BathtubIcon sx={{ marginLeft: 3.5, marginRight: 0.8 }} />
            <div style={{ textAlign: "center" }}>{props.bathrooms} Baths</div>
            <SquareFootIcon sx={{ marginLeft: 3.5 }} />
            <div style={{ textAlign: "center" }}>{props.area} sq ft</div>
          </div>
        </CardContent>
      </Card>
    </Paper>
  );
};

export default HouseListing;
