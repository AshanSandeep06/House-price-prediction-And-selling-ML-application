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
import PropertyGallery from "../PropertyGallery";

import "./ViewPropertyDetails.css";
import { HouseListingDetails } from "../../types/HouseListingDetails";

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

const ViewPropertyDetails: React.FC<HouseListingDetails> = (property) => {
  const { images, bedrooms, bathrooms, area, description, name, mainImageUrl } =
    property;
  const [openGallery, setOpenGallery] = useState(false);

  const handleGalleryOpen = () => {
    setOpenGallery(true);
  };

  const handleGalleryClose = () => {
    setOpenGallery(false);
  };

  return (
    <Card className="property-details-card">
      <CardContent>
        <Typography variant="h5" component="div" className="property-title">
          {name}
        </Typography>

        <Typography variant="subtitle1" gutterBottom className="property-specs">
          <Bed /> {bedrooms} Bedrooms | <Bathtub /> {bathrooms} Bathrooms |{" "}
          <Straighten /> {area} sq. ft.
        </Typography>

        <Typography variant="body1" paragraph className="property-description">
          {description}
        </Typography>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          spacing={2}
        >
          <Grid item xs={12} justifyContent={"center"} alignItems={"center"}>
            <div className="property-image" onClick={handleGalleryOpen}>
              {/* Display the first image as a preview */}
              <img
                src={mainImageUrl}
                alt={`${name} Preview`}
                className="preview-image"
              />
            </div>
          </Grid>
        </Grid>
        <PropertyGallery
          images={images}
          open={openGallery}
          handleClose={handleGalleryClose}
        />
        <div className="actions">
          <Button variant="contained" color="primary">
            Contact Agent
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ViewPropertyDetails;
