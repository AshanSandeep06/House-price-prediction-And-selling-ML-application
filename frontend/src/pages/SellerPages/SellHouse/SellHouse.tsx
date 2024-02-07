import React, { ChangeEvent, useEffect, useState } from "react";
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
import axios from "../../../axios";
import ImageShowSlider from "../../../components/ImageShowSlider";
import { HouseListingDetails } from "../../../types/HouseListingDetails";
import { NewHouseListing } from "../../../types/NewHouseListing";
import { useMyContext } from "../../../config/ContextAPI";
import Swal from "sweetalert2";

const SellHouse = () => {
  const { useStateLocation, setUseStateLocation } = useMyContext();

  const [sellingID, setSellingID] = useState<string>("");

  const [sellingDate, setSellingDate] = useState<string>(
    new Date().toISOString().split("T")[0]
  );
  const [sellingTime, setSellingTime] = useState<string>(
    new Date().toLocaleTimeString("en-US", { hour12: false })
  );

  const [sellerName, setSellerName] = useState<string>("Kasun Bandara");
  const [sellerContact1, setSellerContact1] = useState<string>("0774589862");
  const [sellerContact2, setSellerContact2] = useState<string>("0914585092");
  const [sellerAddress, setSellerAddress] = useState<string>("Kandy");
  const [sellerEmail, setSellerEmail] = useState<string>("kasun123@gmail.com");

  const [houseName, setHouseName] = useState<string>("");
  const [houseDescription, setHouseDescription] = useState<string>("");
  const [houseAddress, setHouseAddress] = useState<string>("");
  const [bedrooms, setBedrooms] = useState<number>(0);
  const [bathrooms, setBathrooms] = useState<number>(0);
  const [houseArea, setHouseArea] = useState<number>(0);
  const [houseAge, setHouseAge] = useState<number>(0);
  const [kitchens, setKitchens] = useState<string>("");
  const [garden, setGarden] = useState<string>("");
  const [sellingPrice, setSellingPrice] = useState<number>(0);

  const imagePath = "/img/uploads/houseImages/";
  const [houseImage, setHouseImage] = useState<string | null>(null);
  const [houseImageChooser, setHouseImageChooser] = useState<FileList[]>([]);
  // For file chooser
  const [fileData, setFileData] = useState<any>();

  const [openMapPopup, setOpenMapPopup] = useState(false);

  const handleMapPopupOpen = () => {
    setOpenMapPopup(true);
  };

  const handleMapPopupClose = () => {
    setOpenMapPopup(false);
  };

  useEffect(() => {
    setInterval(() => {
      setSellingDate(new Date().toISOString().split("T")[0]);
      setSellingTime(new Date().toLocaleTimeString("en-US", { hour12: false }));
    }, 1000);

    generate_new_selling_ID();
    get_address_from_coords();
    // loadAllCustomers();
    // getAllItems();
    // loadAllItems();
  }, [useStateLocation]);

  const get_address_from_coords = () => {
    let dataPayload = {
      lat: useStateLocation.lat,
      lon: useStateLocation.lng,
    };

    axios
      .post("/get_address_from_coords", dataPayload)
      .then((res) => {
        setHouseAddress(res.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [houseImages, setHouseImages] = useState<any>([]);

  // const handleSetHouseImages = (event: ChangeEvent<HTMLInputElement>) => {
  //   // const files = event.target.files;
  //   // if (!files) return;

  //   // const imagesArray: string[] = [];

  //   // for (let i = 0; i < files.length; i++) {
  //   //   const reader = new FileReader();
  //   //   reader.onload = function (e) {
  //   //     if (e.target && e.target.result) {
  //   //       imagesArray.push(e.target.result.toString());
  //   //       if (imagesArray.length === files.length) {
  //   //         setHouseImages((prevImages) => [...prevImages, ...imagesArray]);
  //   //       }
  //   //     }
  //   //   };
  //   //   reader.readAsDataURL(files[i]);
  //   // }

  //   setHouseImageChooser((prevFile) => [...prevFile, ...[event.target.value]]);
  //   const file = event.target.files?.[0];
  //   setFileData(file);
  //   console.log(file);

  //   console.log("House Images: ", houseImages)

  //   setHouseImages((prevImages: string[]) => [...prevImages, ...[(file && URL.createObjectURL(file))]]);
  // };

  // const handleSetHouseImages = (event: ChangeEvent<HTMLInputElement>) => {
  //   const file = event.target.files?.[0];

  //   if (file) {
  //     // Clear the existing images and set the new one
  //     setHouseImages([(file && URL.createObjectURL(file))]);
  //     // Optionally, you can also set other file-related states here
  //     setFileData(file);
  //     setHouseImageChooser(event.target.value);
  //     console.log(file);
  //   }
  // };

  // const handleSetHouseImages = (event: ChangeEvent<HTMLInputElement>) => {
  //   const files = event.target.files;
  //   if (!files) return;

  //   const imagesArray: string[] = [];

  //   for (let i = 0; i < files.length; i++) {
  //     const file = files[i];

  //     const imageUrl = file && URL.createObjectURL(file);
  //     imagesArray.push(imageUrl);
  //   }

  //   // ----------------------------------------------------------------------------------------------
  //   setHouseImageChooser((prevFile) => [...prevFile, ...[event.target?.files]]);

  //   setFileData(files);

  //   console.log(files);

  //   console.log("House Images: ", houseImages);

  //   setHouseImages((prevImages: string[]) => [
  //     ...prevImages,
  //     ...imagesArray,
  //   ]);
  // };

  // -------------------------------------------------------------------------------------

  const [files, setFiles] = useState<FileList | null>(null);
  const [images, setImages] = useState<string[]>([]);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = event.target.files;
    if (!selectedFiles) return;

    const imagesArray: string[] = [];
    const filesArray: File[] = [];

    // Add previous files to filesArray if there are any
    const prevFiles = files ? Array.from(files) : [];

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      const imageUrl = URL.createObjectURL(file);
      imagesArray.push(imageUrl);
      filesArray.push(file);
    }

    setImages((prevImages) => [...prevImages, ...imagesArray]);

    // Merge previous files with new files
    const mergedFiles = [...prevFiles, ...filesArray];
    const newFileList = new DataTransfer();
    mergedFiles.forEach((file) => {
      newFileList.items.add(file);
    });

    setFiles(newFileList.files);
  };

  const handleClick = () => {
    console.log("House Images: ", images);
    console.log("File Chooser: ", files);
  };

  const generate_new_selling_ID = () => {
    axios
      .get("/selling_house/generate_new_selling_ID")
      .then((res) => {
        console.log("Generate new id: ", res);
        setSellingID(res.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCancelHouseListing = () => {
    handleClearSellerDetails();
    handleClearPropertyDetails();

    setSellingPrice(0);
  };

  const handleClearSellerDetails = () => {
    setSellerName("");
    setSellerContact1("");
    setSellerContact2("");
    setSellerAddress("");
    setSellerEmail("");
  };

  const handleClearPropertyDetails = () => {
    generate_new_selling_ID();

    setHouseName("");
    setHouseDescription("");
    setHouseAddress("");
    setBathrooms(0);
    setBedrooms(0);
    setHouseArea(0);
    setHouseAge(0);
    setSellingPrice(0);
    setImages([]);
    setFiles(null);
  };

  const uploadHouseImages = () => {
    if (files && files.length > 0) {
      const formData = new FormData();

      let i = 0;
      Array.from(files).forEach((file, index) => {
        const houseImageName =
          sellingID +
          "_" +
          houseName +
          "-image" +
          "_0" +
          i +
          "." +
          files[index].name.split(".")[1];
        formData.append(`houseImage-${index}`, file, houseImageName);
      });

      axios
        .put("/selling_house/saveHouseImages/" + sellingID, formData)
        .then((res) => {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: res.data.message,
            showConfirmButton: false,
            timer: 1500,
          });

          handleCancelHouseListing();
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.response.data.message,
          });

          handleCancelHouseListing();
        });
    } else {
      alert("Please input all House Images and try again..!");
      handleCancelHouseListing();
    }
  };

  // Place a House Listing
  const handlePlaceHouseListing = () => {
    // setCurrentDate(DateTime.now().toISODate());
    // setCurrentTime(DateTime.local().toLocaleString(DateTime.TIME_SIMPLE));

    axios
      .get("/selling_house/generate_new_selling_ID")
      .then((res) => {
        setSellingID(res.data.content);

        // Place Order function
        let newHouseListing: NewHouseListing = {
          sellingID: res.data.content,
          name: houseName,
          description: houseDescription,
          address: houseAddress,
          price: sellingPrice,
          bedrooms: bedrooms,
          bathrooms: bathrooms,
          area: houseArea,
          location: { lat: useStateLocation.lat, lng: useStateLocation.lng },
          ownerName: sellerName,
          ownerContact1: sellerContact1,
          ownerContact2: sellerContact2,
          saleDate: sellingDate,
          saleTime: sellingTime,
        };

        console.log(newHouseListing);

        axios
          .post("/selling_house/", newHouseListing, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            uploadHouseImages();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
            });

            handleCancelHouseListing();
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        handleCancelHouseListing();
      });
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
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                      setSellerContact2(event.target.value);
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
                      onClick={handleClick}
                    >
                      Clear
                    </Button>
                  </div>
                </div>
              </section>

              <section className="rounded-xl h-max border border-slate-200 px-5 pt-5 pb-8 shadow-lg !mb-8">
                <div className="text-center text-white bg-[#0D6EFC] p-2 mb-6 font-light rounded-[8px] text-[24px]">
                  <h1 className="font-medium">Property Details</h1>
                </div>

                <div
                  id="propertyDetails"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-3"
                >
                  <TextField
                    label="House Name"
                    className="col-span-2"
                    type="text"
                    variant="outlined"
                    name="houseName"
                    placeholder="House Name"
                    value={houseName}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setHouseName(event.target.value);
                    }}
                  />

                  <TextField
                    label="Description"
                    className="col-span-2"
                    type="text"
                    variant="outlined"
                    name="houseDescription"
                    placeholder="Description"
                    value={houseDescription}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setHouseDescription(event.target.value);
                    }}
                  />

                  <TextField
                    label="House Address"
                    className="col-span-2"
                    type="text"
                    variant="outlined"
                    name="houseAddress"
                    placeholder="House Address"
                    value={houseAddress}
                    required
                    fullWidth
                    multiline
                    maxRows={4}
                    style={{ height: "max-content" }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setHouseAddress(event.target.value);
                    }}
                    InputProps={{
                      readOnly: true,
                    }}
                  />

                  <TextField
                    label="Bedrooms"
                    type="number"
                    variant="outlined"
                    name="bedrooms"
                    placeholder="Bedrooms"
                    value={bedrooms}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setBedrooms(Number(event.target.value));
                    }}
                  />

                  <TextField
                    label="Bathrooms"
                    type="number"
                    variant="outlined"
                    name="bathrooms"
                    placeholder="Bathrooms"
                    value={bathrooms}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setBathrooms(Number(event.target.value));
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setHouseArea(Number(event.target.value));
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setHouseAge(Number(event.target.value));
                    }}
                  />

                  {/* <TextField
                    label="Kitchens"
                    type="number"
                    variant="outlined"
                    name="kitchens"
                    placeholder="Kitchens"
                    value={kitchens}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setKitchens(event.target.value);
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
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setGarden(event.target.value);
                    }}
                  /> */}

                  <TextField
                    label="Selling Price"
                    className="col-span-2"
                    type="text"
                    variant="outlined"
                    name=""
                    placeholder="Selling Price"
                    value={sellingPrice}
                    required
                    InputLabelProps={{
                      shrink: true,
                    }}
                    onChange={(event: ChangeEvent<HTMLInputElement>) => {
                      setSellingPrice(Number(event.target.value));
                    }}
                  />

                  <div className="col-span-1 sm:col-span-2 mb-2 text-center">
                    <label className="mb-8 text-[17px]">
                      Upload House Images
                    </label>

                    <ImageShowSlider images={images} />

                    {/* {houseImages.map((image, index) => (
                      <img
                        key={index}
                        src={image}
                        className="object-contain h-[319px] mb-2"
                        alt={`houseImage-${index}`}
                      />
                    ))} */}
                    <input
                      id="uploadHouseImagesChooser"
                      type="file"
                      required
                      className="!mt-7 !cursor-pointer !mb-5"
                      name="uploadHouseImagesChooser"
                      multiple
                      onChange={handleFileChange}
                    />
                  </div>

                  {/* <div className="col-span-1 sm:col-span-2 mb-2 text-center">
                    <label className="mb-3 text-[17px]">
                      Upload House Images
                    </label>
                    {houseImage && (
                      <img
                        id="itemImage"
                        src={houseImage}
                        className="object-contain h-[319px]"
                        alt="selectedImage"
                        // ref={itemImageRef}
                      />
                    )}
                    <TextField
                      id="uploadItemImageChooser"
                      type="file"
                      variant="outlined"
                      required
                      className="!mt-7 !cursor-pointer !mb-5"
                      name="itemImage"
                      value={houseImageChooser}
                      onChange={handleSetHouseImage}
                    />
                  </div> */}

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

                <div className="mt-[25px] flex sm:justify-around items-center col-span-1 sm:col-span-2 flex-wrap justify-center gap-[22px] sm:gap-[0px]">
                  <Button
                    className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                    variant="contained"
                    color="error"
                    onClick={handleCancelHouseListing}
                  >
                    Cancel
                  </Button>

                  <Button
                    className="!px-[20px] !capitalize !font-poppins !font-normal !text-[15px]"
                    variant="contained"
                    color="success"
                    onClick={handlePlaceHouseListing}
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
