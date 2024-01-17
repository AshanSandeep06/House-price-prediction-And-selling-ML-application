import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Container,
  Grid,
  Paper,
  Box,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  Menu as MenuIcon,
  House as HouseIcon,
  LocationOn as LocationOnIcon,
  AttachMoney as AttachMoneyIcon,
  Person as PersonIcon,
  Phone as PhoneIcon,
  Category as CategoryIcon,
  CategoryOutlined as CategoryOutlinedIcon,
  Event as EventIcon,
  Check as CheckIcon,
  Clear as ClearIcon,
} from "@mui/icons-material";

const ViewPropertyDetails = () => {
  return (
    <div>
      {/* View Property Section */}
      <Container>
        <Paper>
          <Box p={2}>
            {/* Property Details */}
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                {/* Property Images */}
                <Box mb={2}>
                  <img
                    src="images/house-img-1.webp"
                    alt=""
                    style={{ width: "100%" }}
                  />
                </Box>
                <Box display="flex">
                  <img
                    src="images/house-img-1.webp"
                    alt=""
                    style={{ width: "25%" }}
                  />
                  <img
                    src="images/hall-img-1.webp"
                    alt=""
                    style={{ width: "25%" }}
                  />
                  <img
                    src="images/kitchen-img-1.webp"
                    alt=""
                    style={{ width: "25%" }}
                  />
                  <img
                    src="images/bathroom-img-1.webp"
                    alt=""
                    style={{ width: "25%" }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Property Info */}
                <Typography variant="h5" gutterBottom>
                  Modern Flats and Apartments
                </Typography>
                <Typography variant="body1" gutterBottom>
                  <LocationOnIcon /> Andheri, Mumbai, India - 400104
                </Typography>
                <Box display="flex" alignItems="center" mb={2}>
                  <AttachMoneyIcon />
                  <Typography variant="body1">15 Lac</Typography>
                </Box>
                <Box display="flex" alignItems="center" mb={2}>
                  <PersonIcon />
                  <Typography variant="body1">John Deo (Owner)</Typography>
                </Box>
                <Typography variant="body1">
                  <PhoneIcon /> <a href="tel:1234567890">1234567890</a>
                </Typography>
                <Typography variant="body1">
                  <CategoryIcon /> Flat
                </Typography>
                <Typography variant="body1">
                  <CategoryOutlinedIcon /> Sale
                </Typography>
                <Typography variant="body1">
                  <EventIcon /> 10-11-2022
                </Typography>
              </Grid>
            </Grid>

            {/* Property Details - Rooms, Amenities, Description */}
            <Grid container spacing={2}>
              {/* Rooms */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Details
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Rooms: 2 BHK" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Deposit Amount: 0" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Status: Ready to Move" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bedroom: 3" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Bathroom: 2" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Balcony: 1" />
                  </ListItem>
                </List>
              </Grid>

              {/* Additional Details */}
              <Grid item xs={12} sm={6}>
                <Typography variant="h6" gutterBottom>
                  Additional Details
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Carpet Area: 750sqft" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EventIcon />
                    </ListItemIcon>
                    <ListItemText primary="Age: 3 Years" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Room Floor: 3" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Total Floors: 22" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Furnished: Semi-Furnished" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CategoryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Loan: Available" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>

            {/* Amenities */}
            <Typography variant="h6" gutterBottom>
              Amenities
            </Typography>
            <Grid container spacing={2}>
              {/* Amenities - Left */}
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Lifts" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Security Guards" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ClearIcon />
                    </ListItemIcon>
                    <ListItemText primary="Play Ground" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gardens" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Water Supply" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Power Backup" />
                  </ListItem>
                </List>
              </Grid>

              {/* Amenities - Right */}
              <Grid item xs={12} sm={6}>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Parking Area" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <ClearIcon />
                    </ListItemIcon>
                    <ListItemText primary="Gym" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Shopping Mall" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Hospital" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Schools" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <CheckIcon />
                    </ListItemIcon>
                    <ListItemText primary="Market Area" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>

            {/* Description */}
            <Typography variant="h6" gutterBottom>
              Description
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum cupiditate aliquid ipsum recusandae maxime nisi, velit
              eaque, libero, exercitationem culpa accusamus. Neque dolor quaerat
              modi saepe facere dignissimos temporibus molestias.
            </Typography>

            {/* Save Property Button */}
            <form action="" method="post">
              <Button variant="contained" color="primary" type="submit">
                Save Property
              </Button>
            </form>
          </Box>
        </Paper>
      </Container>
    </div>
  );
};

export default ViewPropertyDetails;
