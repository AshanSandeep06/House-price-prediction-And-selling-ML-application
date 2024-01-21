import React, { useState } from "react";
import Header from "../../../components/Header";
import "./SellHouse.css";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Divider,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import Form from "../../../components/Form";
import Table from "../../../components/Table";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ReactLeafletMap from "../../../components/ReactLeafletMap";
import PropertyGallery from "../../../components/PropertyGallery";
import MapPopup from "../../../components/MapPopup";

const SellHouse = () => {
  const [sellingID, setSellingID] = useState<string>("");
  const [sellingDate, setSellingDate] = useState<string>("");
  const [sellingTime, setSellingTime] = useState<string>("");
  const [sellerName, setSellerName] = useState<string>("");
  const [sellerContact1, setSellerContact1] = useState<string>("");
  const [sellerContact2, setSellerContact2] = useState<string>("");
  const [sellerAddress, setSellerAddress] = useState<string>("");
  const [sellerEmail, setSellerEmail] = useState<string>("");

  const [houseName, setHouseName] = useState<string>("");
  const [houseAddress, setHouseAddress] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<string>("");
  const [bathrooms, setBathrooms] = useState<string>("");
  const [houseArea, setHouseArea] = useState<string>("");
  const [houseAge, setHouseAge] = useState<string>("");
  const [kitchens, setKitchens] = useState<string>("");
  const [garden, setGarden] = useState<string>("");

  const imagePath = "/img/uploads/houseImages/";
  const [houseImage, setHouseImage] = useState<string>("");

  const [openMapPopup, setOpenMapPopup] = useState(false);

  const handleMapPopupOpen = () => {
    setOpenMapPopup(true);
  };

  const handleMapPopupClose = () => {
    setOpenMapPopup(false);
  };

  return (
    <>
      <Header
        buttons={["logout", "my_profile"]}
        links={["my_listings", "predict_house_price", "sell_your_house"]}
        prefix="/user/"
      />

      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF] h-[calc(100vh-80px)]">
        <main className="gap-2 w-full bg-[#FAFAFF]">
          <h1
            className="text-center relative !pb-[8px] mb-[25px]"
            id="foodMenuHeading2"
          >
            Sell Your House
          </h1>

          <section>
            <section className="grid md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
              <section className="rounded-xl h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
                <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
                  <h1 className="font-medium">Seller Details</h1>
                </div>

                <div
                  id="ownerDetails"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <TextField
                    label="Selling ID"
                    type="text"
                    variant="outlined"
                    name="sellingId"
                    placeholder="Selling ID"
                    required
                    value={sellingID}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Selling Date"
                    type="date"
                    variant="outlined"
                    name="sellingDate"
                    placeholder="Selling Date"
                    required
                    value={sellingDate}
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Selling Time"
                    type="time"
                    variant="outlined"
                    name="sellingTime"
                    placeholder="Selling Time"
                    required
                    value={sellingTime}
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Seller Name"
                    type="text"
                    variant="outlined"
                    name="sellerName"
                    placeholder="Seller Name"
                    required
                    value={sellerName}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Seller Contact 1"
                    type="text"
                    variant="outlined"
                    name="sellerContact1"
                    placeholder="Seller Contact 1"
                    required
                    value={sellerContact1}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Seller Contact 2"
                    type="text"
                    variant="outlined"
                    name="sellerContact2"
                    placeholder="Seller Contact 2"
                    value={sellerContact2}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Seller Address"
                    type="text"
                    variant="outlined"
                    name="sellerAddress"
                    placeholder="Seller Address"
                    required
                    value={sellerAddress}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Email"
                    type="text"
                    variant="outlined"
                    name="sellerEmail"
                    placeholder="Email"
                    value={sellerEmail}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <div className="sm:col-start-2 sm:col-end-3 items-center justify-end flex">
                    <Button
                      className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                      variant="contained"
                      color="warning"
                      // onClick={handleClearInvoiceDetails}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </section>

              <section className="rounded-xl h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg">
                <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
                  <h1 className="font-medium">Property Details</h1>
                </div>

                <div
                  id="propertyDetails"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                >
                  <TextField
                    label="House Name"
                    type="text"
                    variant="outlined"
                    name="houseName"
                    placeholder="House Name"
                    value={houseName}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="House Address"
                    type="text"
                    variant="outlined"
                    name="houseAddress"
                    placeholder="House Address"
                    value={houseAddress}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Bedrooms"
                    type="text"
                    variant="outlined"
                    name="bedrooms"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Bathrooms"
                    type="text"
                    variant="outlined"
                    name="bathrooms"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="House Area"
                    type="text"
                    variant="outlined"
                    name="houseArea"
                    placeholder="House Area"
                    value={houseArea}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="House Age"
                    type="text"
                    variant="outlined"
                    name="houseAge"
                    placeholder="House Age"
                    value={houseAge}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Kitchens"
                    type="text"
                    variant="outlined"
                    name="kitchens"
                    placeholder="Kitchens"
                    value={kitchens}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <TextField
                    label="Garden (y/n)"
                    type="text"
                    variant="outlined"
                    name="garden"
                    placeholder="Garden (y/n)"
                    value={garden}
                    required
                    InputProps={{
                      readOnly: true,
                    }}
                    InputLabelProps={{
                      shrink: true,
                    }}
                  />

                  <div className="flex justify-center items-center col-span-1 sm:col-span-2 mb-2">
                    {houseImage && (
                      <img
                        id="houseImage"
                        src={houseImage}
                        className="object-contain h-[140px]"
                        // ref={itemImageRef}
                      />
                    )}
                  </div>

                  <div className="flex sm:justify-end items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
                    <Button
                      className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px] sm:!mr-[25px]"
                      variant="contained"
                      color="primary"
                    >
                      Update
                    </Button>

                    <Button
                      className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                      variant="contained"
                      color="warning"
                      // onClick={handleClearSelectItems}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </section>

              <section className="rounded-xl border border-slate-200 lg:col-start-1 lg:col-span-2 xl:col-start-auto xl:col-span-1 h-max px-5 pt-5 pb-8 shadow-lg !mb-[35px]">
                <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
                  <h1 className="font-medium">Add Property Location</h1>
                </div>

                <div>
                  <ReactLeafletMap
                    {...{
                      mapWidth: 425.075,
                      mapHeight: 365,
                      onClick: handleMapPopupOpen,
                    }}
                  />

                  <MapPopup
                    open={openMapPopup}
                    handleClose={handleMapPopupClose}
                  />
                </div>

                <div className="mt-[25px] flex sm:justify-start items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
                  <Button
                    className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                    variant="contained"
                    color="success"
                  >
                    Sell Your House
                  </Button>
                </div>
              </section>
            </section>
          </section>
        </main>
      </main>
    </>
  );
};

export default SellHouse;
