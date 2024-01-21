import React, { ChangeEvent, useState } from "react";
import "./PricePrediction.css";
import Form from "../../../components/Form";
import MyListings from "../MyListings";
import Header from "../../../components/Header";
import BackspaceIcon from "@mui/icons-material/Backspace";
import { Typography } from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

const PricePrediction = () => {
  const [houseName, setHouseName] = useState<string>("");
  const [houseAddress, setHouseAddress] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [houseArea, setHouseArea] = useState<number>(0);
  const [houseAge, setHouseAge] = useState<string>("");
  const [Kitchens, setKitchens] = useState<number>(0);
  const [garden, setGarden] = useState<string>("");

  const [predictedPrice, setPredictedPrice] = useState<number>(50000);

  const handleClearFields = () => {
    setHouseName("");
    setHouseAddress("");
    setBedrooms(0);
    setBathrooms(0);
    setHouseArea(0);
    setHouseAge("");
    setKitchens(0);
    setGarden("");
  };

  const handlePricePrediction = () => {
    // Should implement this method
    setPredictedPrice(90000);
  }

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
                  value: Kitchens,
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
              ]}
              buttonsArray={[]}
            />
          </section>

          <section className="mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-end">
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
          </section>

          <section className="mb-6 sm:grid sm:grid-cols-1 lg:flex lg:items-end lg:justify-start">
            <div className="px-12 flex justify-center items-center gap-[8px]">
              <h1>Your House Predicted Price: </h1>
              <Typography
                className="!text-green-500 !font-bold !text-lg flex items-center justify-center !mb-0 text-[28px]"
                sx={{ fontSize: "1.25rem", marginBottom: 0 }}
              >
                <AttachMoneyIcon sx={{ marginRight: 0.5 }} />
                <span className="text-[28px]">{predictedPrice}</span>
              </Typography>
            </div>
          </section>
        </main>
      </main>
    </>
  );
};

export default PricePrediction;
