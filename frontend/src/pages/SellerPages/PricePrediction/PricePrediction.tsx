import React, { ChangeEvent } from "react";
import "./PricePrediction.css";
import Form from "../../../components/Form";
import MyListings from "../MyListings";
import Header from "../../../components/Header";

const PricePrediction = () => {
  return (
    <>
      <Header
        buttons={["logout", "my_profile"]}
        links={["my_listings", "predict_house_price", "sell_your_house"]}
        prefix="/user/"
      />

      <main className="mt-20 gap-2 w-full pt-6 px-10 bg-[#FAFAFF]">
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
                  value: "houseName",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    // setItemCode(event.target.value);
                  },
                },
                {
                  label: "Address",
                  textFieldType: "text",
                  placeHolderText: "Address",
                  name: "Address",
                  value: "address",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    // setItemName(event.target.value);
                  },
                },
                {
                  label: "Bedrooms",
                  textFieldType: "text",
                  placeHolderText: "Bedrooms",
                  name: "Bedrooms",
                  value: "bedrooms",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    // setDescription(event.target.value);
                  },
                },
                {
                  label: "Unit Price",
                  textFieldType: "text",
                  placeHolderText: "Unit Price",
                  name: "unitPrice",
                  value: "unitPrice",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    let price = "0.00";

                    if (name == "unitPrice" && isNaN(Number(value))) {
                      if (value == ".") {
                        // price = Number(unitPrice) + value;
                        // setUnitPrice(price);
                        return;
                      }

                      price = "0.00";
                      // setUnitPrice(price);
                      console.log(value);
                      return;
                    }

                    if (name == "unitPrice" && parseFloat(value) < 0) {
                      return;
                    }

                    if (value == ".") {
                      // price = unitPrice + value;
                    } else {
                      price = value;
                    }
                    // setUnitPrice(price);
                  },
                },
                {
                  label: "Bathrooms",
                  textFieldType: "number",
                  placeHolderText: "Bathrooms",
                  name: "Bathrooms",
                  value: "bathrooms",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    const { name, value, type } = event.target;
                    if (name == "qtyOnHand" && isNaN(parseInt(value))) {
                      // setQtyOnHand(0);
                      return;
                    }

                    if (name == "qtyOnHand" && parseInt(value) < 0) {
                      return;
                    }
                    // setQtyOnHand(parseInt(value));
                  },
                },
                {
                  label: "House Area",
                  textFieldType: "text",
                  placeHolderText: "House Area",
                  readOnly: true,
                  name: "House Area",
                  value: "houseArea",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    // setDiscount(Number(event.target.value));
                  },
                },
                {
                  label: "House Age",
                  textFieldType: "text",
                  placeHolderText: "House Age",
                  name: "House Age",
                  value: "houseAge",
                  onChange: (event: ChangeEvent<HTMLInputElement>) => {
                    // setItemCode(event.target.value);
                  },
                },
              ]}
              buttonsArray={[]}
            />
          </section>
        </main>
      </main>
    </>
  );
};

export default PricePrediction;
