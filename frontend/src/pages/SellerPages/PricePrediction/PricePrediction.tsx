import React, { ChangeEvent, useState } from "react";
import "./PricePrediction.css";
import Form from "../../../components/Form";
import MyListings from "../MyListings";
import Header from "../../../components/Header";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import axios from "../../../axios";
import Swal from "sweetalert2";
import ReactLeafletMap from "../../../components/ReactLeafletMap";
import MapPopup from "../../../components/MapPopup";

const PricePrediction = () => {
  const [houseName, setHouseName] = useState<string>("");
  const [houseAddress, setHouseAddress] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [houseArea, setHouseArea] = useState<number>(0);
  const [houseAge, setHouseAge] = useState<string>("");
  const [kitchens, setKitchens] = useState<number>(0);
  const [garden, setGarden] = useState<string>("");
  const [landSize, setLandSize] = useState<number>(0);
  const [longitude, setLongitude] = useState<number>(0);
  const [latitude, setLatitude] = useState<number>(0);

  const [openMapPopup, setOpenMapPopup] = useState<boolean>(false);

  const handleMapPopupOpen = () => {
    setOpenMapPopup(true);
  };

  const handleMapPopupClose = () => {
    setOpenMapPopup(false);
  };

  const [predictedPrice, setPredictedPrice] = useState<number>(0);

  const handleClearFields = () => {
    setHouseName("");
    setHouseAddress("");
    setBedrooms(0);
    setBathrooms(0);
    setHouseArea(0);
    setHouseAge("");
    setKitchens(0);
    setGarden("");
    setPredictedPrice(0);
    setLandSize(0);
    setLongitude(0);
    setLatitude(0);
  };

  const handlePricePrediction = () => {
    if (
      houseName &&
      houseAddress &&
      bedrooms &&
      bathrooms &&
      houseArea &&
      houseAge &&
      kitchens &&
      garden
    ) {
      let dataPayload = {
        houseName: houseName,
        houseAddress: houseAddress,
        bedrooms: bedrooms,
        bathrooms: bathrooms,
        houseArea: houseArea,
        houseAge: houseAge,
        kitchens: kitchens,
        garden: garden,
      };

      axios
        .post("/predict_house_price", dataPayload)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
          setPredictedPrice(Number(res.data.response));
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message
              ? error.response.data.message
              : "Failed..!",
          });
          setPredictedPrice(0);
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Try again..",
        text: "Please input values to all input Fields",
      });
    }
  };

  return (
    <>
      <Header
        buttons={["logout", "my_profile"]}
        links={["my_listings", "predict_house_price", "sell_your_house"]}
        prefix="/user/"
      />

      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF] h-[calc(100vh-80px)]">
        <main className="gap-2 w-full px-10 bg-[#FAFAFF]">
          <h1
            className="text-center relative !pb-[8px] mb-[35px]"
            id="foodMenuHeading1"
          >
            House Price Prediction
          </h1>

          <section>
            <Form
              textFieldsArray={[
                {
                  label: "House Name",
                  textFieldType: "text",
                  placeHolderText: "House Name",
                  name: "House Name",
                  value: houseName,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    setHouseName(event.target.value);
                  },
                },
                {
                  label: "Address",
                  textFieldType: "text",
                  placeHolderText: "Address",
                  name: "Address",
                  value: houseAddress,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    setHouseAddress(event.target.value);
                  },
                },
                {
                  label: "Bedrooms",
                  textFieldType: "number",
                  placeHolderText: "Bedrooms",
                  name: "Bedrooms",
                  value: bedrooms,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "Bedrooms" && isNaN(Number(value))) {
                      setBedrooms(0);
                      return;
                    } else if (name == "Bedrooms" && Number(value) < 0) {
                      return;
                    } else {
                      setBedrooms(Number(event.target.value));
                    }
                  },
                },
                {
                  label: "Bathrooms",
                  textFieldType: "number",
                  placeHolderText: "Bathrooms",
                  name: "Bathrooms",
                  value: bathrooms,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "Bathrooms" && isNaN(Number(value))) {
                      setBathrooms(0);
                      return;
                    } else if (name == "Bathrooms" && Number(value) < 0) {
                      return;
                    } else {
                      setBathrooms(Number(event.target.value));
                    }
                  },
                },
                {
                  label: "House Area",
                  textFieldType: "text",
                  placeHolderText: "House Area",
                  name: "HouseArea",
                  value: houseArea,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "HouseArea" && isNaN(Number(value))) {
                      setHouseArea(0);
                      return;
                    } else if (name == "HouseArea" && Number(value) < 0) {
                      return;
                    } else {
                      if (name == "HouseArea" && isNaN(Number(value))) {
                        setHouseArea(0);
                      } else {
                        setHouseArea(Number(event.target.value));
                      }
                    }
                  },
                },
                {
                  label: "Land Size",
                  textFieldType: "text",
                  placeHolderText: "Land Size",
                  name: "landSize",
                  value: landSize,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "landSize" && isNaN(Number(value))) {
                      setLandSize(0);
                      return;
                    } else if (name == "landSize" && Number(value) < 0) {
                      return;
                    } else {
                      if (name == "landSize" && isNaN(Number(value))) {
                        setLandSize(0);
                      } else {
                        setLandSize(Number(event.target.value));
                      }
                    }
                  },
                },
                {
                  label: "House Age",
                  textFieldType: "text",
                  placeHolderText: "House Age",
                  name: "House Age",
                  value: houseAge,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    setHouseAge(event.target.value);
                  },
                },

                {
                  label: "Kitchens",
                  textFieldType: "number",
                  placeHolderText: "Kitchens",
                  name: "Kitchens",
                  value: kitchens,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "Kitchens" && isNaN(Number(value))) {
                      setKitchens(0);
                      return;
                    } else if (name == "Kitchens" && Number(value) < 0) {
                      return;
                    } else {
                      setKitchens(Number(event.target.value));
                    }
                  },
                },

                {
                  label: "Garden (y/n)",
                  textFieldType: "text",
                  placeHolderText: "y/n",
                  name: "Garden",
                  value: garden,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    setGarden(event.target.value);
                  },
                },
                {
                  label: "Latitude",
                  textFieldType: "text",
                  placeHolderText: "Latitude",
                  name: "latitude",
                  value: latitude,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "latitude" && isNaN(Number(value))) {
                      setLatitude(0);
                      return;
                    } else if (name == "latitude" && Number(value) < 0) {
                      return;
                    } else {
                      if (name == "latitude" && isNaN(Number(value))) {
                        setLatitude(0);
                      } else {
                        setLatitude(Number(event.target.value));
                      }
                    }
                  },
                },
                {
                  label: "Longitude",
                  textFieldType: "text",
                  placeHolderText: "Longitude",
                  name: "longitude",
                  value: longitude,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "longitude" && isNaN(Number(value))) {
                      setLongitude(0);
                      return;
                    } else if (name == "longitude" && Number(value) < 0) {
                      return;
                    } else {
                      if (name == "longitude" && isNaN(Number(value))) {
                        setLongitude(0);
                      } else {
                        setLongitude(Number(event.target.value));
                      }
                    }
                  },
                },
              ]}
              buttonsArray={[]}
            />

            <section className="mt-2 pb-10 d-flex justify-around mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-start">
              <section>
                <ReactLeafletMap
                  {...{
                    mapWidth: 425.075,
                    mapHeight: 365,
                    onClick: handleMapPopupOpen,
                  }}
                />

                <MapPopup
                  open={openMapPopup}
                  handleClose={handleMapPopupClose} />
              </section>

              <section style={{flexDirection: 'column', paddingTop: 75, gap: 100}} className="pb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-end">
                <Form
                  textFieldsArray={[]}
                  buttonsArray={[
                    {
                      color: "success",
                      icon: null,
                      text: "Predict Price",
                      onClick: handlePricePrediction,
                    },
                    {
                      color: "warning",
                      icon: <BackspaceIcon />,
                      text: "Clear",
                      onClick: handleClearFields,
                    },
                  ]}
                />

                <section className="mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-start">
                  <div className="px-12 flex justify-center items-center gap-[8px]">
                    <h1 style={{ marginRight: 2 }}>
                      Your House Predicted Price:{" "}
                    </h1>
                    <Typography
                      className="!text-green-500 !font-bold !text-lg flex items-center justify-center !mb-0 text-[28px]"
                      sx={{
                        fontSize: "1.25rem",
                        marginBottom: 0,
                        marginRight: 2,
                      }}
                    >
                      <span className="text-[28px] mr-[5px]">
                        {predictedPrice}
                      </span>
                      <span style={{ marginRight: 0.5, fontSize: 20 }}>
                        LKR
                      </span>
                    </Typography>
                  </div>
                </section>
              </section>
            </section>
          </section>
        </main>
      </main>
    </>
  );
};

export default PricePrediction;
