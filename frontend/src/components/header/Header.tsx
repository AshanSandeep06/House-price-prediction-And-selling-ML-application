import { useRef, useState, useEffect } from "react";
import HeaderProps from "../../types/HeaderProps";
import "./Header.css";
import {
  Box,
  Button,
  IconButton,
  SwipeableDrawer,
  TextField,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LoginForm from "../LoginForm/index";
import { NavLink, BrowserRouter as Router, Route, RouteProps } from 'react-router-dom';
import { styled } from "@mui/material/styles";
import Badge, { BadgeProps } from "@mui/material/Badge";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import BackspaceIcon from "@mui/icons-material/Backspace";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Form from "../Form/index";
import MyButton from "../MyButton/index";
import logo from "../../assets/img/sale-01.png";
import Dashboard from "../Dashboard";
import Explore from "../Explore";

const Header = (props: HeaderProps) => {
  type Anchor = "right";

  const loginFormRef = useRef<HTMLDivElement>(null);
  const resetFormRef = useRef<HTMLDivElement>(null);

  const homeRef = useRef(null);
  const exploreRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToComponent = (ref: React.MutableRefObject<null>) => {
    // ref?.current.scrollIntoView({ behavior: 'smooth' });
  }

  const [cartState, setCartState] = useState({
    right: false,
  });

  const [loginState, setLoginState] = useState({
    right: false,
  });

  const [registerState, setRegisterState] = useState({
    bottom: false,
  });

  useEffect(() => {
    if (resetFormRef.current) {
      resetFormRef.current.style.display = "none";
    }

    // dispatch(setCartCount("0"));
  }, [loginState["right"]]);

  const style1 =
    "flex items-center gap-3 border border-slate-200 px-[15px] py-[6px] rounded-lg";
  const style2 =
    "flex items-center gap-3 px-[15px] py-[6px] rounded-[6px] bg-blue-700 !text-white";
  const style3 =
    "flex items-center gap-3 px-[15px] py-[6px] rounded-[6px] bg-custom-color-02-300 !text-black font-[500]";

  const toggleDrawer1 =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setCartState({ ...cartState, [anchor]: open });

      //   if (event.target) {
      //     if ($(event.target).text() == "Clear") {
      //       // dispatch(removeAllCartItems());
      //       // dispatch(setCartCount(String(0)));
      //     }
      //   }
    };

  const toggleDrawer2 =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setLoginState({ ...loginState, [anchor]: open });
    };

  const toggleDrawer3 =
    (anchor: string, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setRegisterState({ ...registerState, [anchor]: open });
    };

  const list2 = (anchor: Anchor) => (
    <Box
      sx={{
        width: "400px",
        position: "relative",
        backdropFilter: "static",
      }}
      role="presentation"
    >
      <LoginForm closeLoginForm={toggleDrawer2} />
    </Box>
  );

  const list3 = (anchor: Anchor) => (
    <Box
      sx={{
        backgroundColor: "red",
        width: 375,
        position: "relative",
        backdropFilter: "static",
      }}
      role="presentation"
    >
      <span>
        <button
          className="cursor-pointer"
          onClick={toggleDrawer3(anchor, false)}
        >
          <ArrowBackIcon />
        </button>
      </span>
    </Box>
  );

  // const activeLink = "border-b-[5px] rounded-[26%] w-[43%] border-[#7461e2]";
  // const activeLink = "border-b-[5px] border-[43%] border-[#7461e2]";
  const activeLink = "text-[#f97316]";
  const normalLink = "";

  const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    // <!--Header-->
    // backdrop-blur-md  bg-[hsla(0,0%,100%,.4)]
    <header className="flex w-full h-20 !text-[rgb(81,81,81)] z-10 fixed top-0">
      <div className="w-1/4 h-full flex items-center gap-2.5 pl-[38px]">
        <img src={logo} alt="UserImage" className="w-10 h-10" />
        <NavLink to={"/home"} onClick={() => scrollToComponent(homeRef)}>
          <h1
            style={{ letterSpacing: "2px", marginTop: "2px" }}
            className="h-max mb-[1px] !text-2xl !text-black"
          >
            Ever Estate
          </h1>
        </NavLink>
      </div>

      <div className="w-3/4 h-full flex justify-between pr-12">
        <ul
          id="optionList"
          className="h-full flex items-center justify-start gap-[36px] pt-1"
        >
          {props.links.map((resource, index) => (
            <NavLink
              key={index}
              to={"/" + resource}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              // onClick={
              //   resource == "home" ? () => scrollToComponent(homeRef)
              //   : resource == "explore" ? () => scrollToComponent(exploreRef)
              //   : resource == "contact" ? () => scrollToComponent(contactRef)
              //   : () => void
              // }
            >
              {resource.split("_")[1]
                ? resource[0].toUpperCase() +
                  resource.split("_")[0].substring(1) +
                  " " +
                  resource.split("_")[1][0].toUpperCase() +
                  resource.split("_")[1].substring(1)
                : resource[0].toUpperCase() + resource.substring(1)}
            </NavLink>
          ))}

          {/* ========================================= */}
        {/* <Switch>
          <Route path="/home" element={<Dashboard  />} />
          <Route path="/explore" render={() => <Explore ref={exploreRef} />} />
          <Route path="/contact" render={() => <Contact ref={contactRef} />} />
        </Switch> */}
        
        </ul>

        <div className="h-full flex items-center justify-center gap-5">
          {props.buttons.map((buttonText, index) =>
            buttonText == "login" ? (
              (["right"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    id="btnLogin"
                    key={index}
                    className="!px-[15px] !capitalize !font-poppins !font-n !text-[16px] rounded-[7px]"
                    variant="outlined"
                    color="primary"
                    endIcon={<LoginIcon />}
                    onClick={toggleDrawer2(anchor, true)}
                  >
                    {buttonText}
                  </Button>

                  <SwipeableDrawer
                    anchor={anchor}
                    open={loginState[anchor]}
                    onClose={toggleDrawer2(anchor, true)}
                    onOpen={toggleDrawer2(anchor, true)}
                  >
                    <Box
                      sx={{
                        position: "relative",
                        backdropFilter: "static",
                      }}
                      role="presentation"
                    >
                      {/* Login Form */}
                      <div
                        ref={loginFormRef}
                        className="px-5 pt-3 flex flex-col justify-center"
                      >
                        <div className="mb-4 grid grid-cols-12 justify-center items-center px-2 py-1">
                          <h1 className="pl-10 col-span-10 text-center text-[25px] font-medium flex justify-center">
                            Login Form
                          </h1>

                          <span className="p-2 col-span-2">
                            <button onClick={toggleDrawer2(anchor, false)}>
                              <CloseIcon
                                id="btnClose"
                                className="cursor-pointer !w-[32px] !h-[32px]"
                              />
                            </button>
                          </span>
                        </div>

                        <div className="grid gap-4 mb-6 !font-poppins">
                          <TextField
                            className="!font-poppins"
                            label="Username"
                            type="search"
                            variant="outlined"
                            name="username"
                            placeholder="Username"
                            required
                          />

                          <TextField
                            label="Password"
                            className="!font-poppins"
                            type="search"
                            variant="outlined"
                            name="password"
                            placeholder="Password"
                            required
                          />
                        </div>

                        <div className="flex justify-around items-center flex-wrap">
                          <div
                            id="rdbRememberMe"
                            style={{ gap: "9px" }}
                            className="col-md-5 form-check d-flex justify-content-center"
                          >
                            <input
                              className="form-check-input !w-[16px] !h-[16px] relative top-[2px] mr-[7px]"
                              type="checkbox"
                              id="flexCheckChecked"
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexCheckChecked"
                            >
                              Remember Me
                            </label>
                          </div>

                          <div className="col-md-6 text-center">
                            <button
                              id="btnForgotPassword"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                position: "relative",
                                left: "10px",
                              }}
                            >
                              Forgot Password ?
                            </button>
                          </div>
                        </div>

                        <div className="my-5 flex justify-center items-center">
                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#0d6efd]"
                            variant="contained"
                          >
                            Login
                          </Button>
                        </div>

                        <div className="flex justify-center items-center flex-wrap">
                          <div
                            className="col-md-6 text-sm-end text-center"
                            style={{ paddingRight: "0px" }}
                          >
                            <label>Not a Member ?</label>
                          </div>

                          <div
                            className="col-md-6 text-sm-start text-center d-flex justify-content-center justify-content-sm-start"
                            style={{ paddingLeft: "10px" }}
                          >
                            <button
                              id="btnForgotPassword"
                              style={{
                                backgroundColor: "transparent",
                                border: "none",
                                color: "#0d6efd",
                                position: "relative",
                                left: "10px",
                              }}
                            >
                              Register Now
                            </button>
                          </div>
                        </div>
                      </div>

                      {/* Reset Password Form */}
                      <div
                        ref={resetFormRef}
                        className="px-5 pt-3 flex flex-col justify-center"
                      >
                        <div className="mb-4 grid grid-cols-12 justify-center items-center px-2 py-1">
                          <h1 className="col-span-10 text-center text-[25px] font-medium flex justify-center">
                            Reset Password Form
                          </h1>

                          <span className="p-2 col-span-2">
                            <CloseIcon
                              id="btnClose"
                              className="cursor-pointer !w-[32px] !h-[32px]"
                            />
                          </span>
                        </div>

                        <div className="grid gap-5 mb-2 !px-[10px]">
                          <TextField
                            label="Username"
                            type="text"
                            variant="outlined"
                            name="username"
                            placeholder="Username"
                            required
                          />

                          <TextField
                            label="New Password"
                            type="text"
                            variant="outlined"
                            name="newPassword"
                            placeholder="New Password"
                            required
                          />

                          <TextField
                            label="Confirm New Password"
                            type="text"
                            variant="outlined"
                            name="confirmNewPassword"
                            placeholder="Confirm New Password"
                            required
                          />
                        </div>

                        <div className="my-5 flex justify-around items-center">
                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#0d6efd]"
                            variant="contained"
                          >
                            Reset
                          </Button>

                          <Button
                            className="!px-[30px] !capitalize !font-poppins !font-normal !text-[16px]"
                            variant="contained"
                            color="error"
                          >
                            Cancel
                          </Button>
                        </div>
                      </div>
                    </Box>
                  </SwipeableDrawer>
                </React.Fragment>
              ))
            ) : buttonText == "sign up" ? (
              (["bottom"] as const).map((anchor) => (
                <React.Fragment key={anchor}>
                  <Button
                    key={index}
                    className="!px-[15px] !capitalize !font-poppins !font-normal !text-[16px] !bg-[#2e7d32] !rounded-[7px]"
                    variant="contained"
                    // endIcon={<PersonAddIcon />}
                    onClick={toggleDrawer3("bottom", true)}
                  >
                    {buttonText}
                  </Button>

                  <SwipeableDrawer
                    anchor={anchor}
                    open={registerState[anchor]}
                    onClose={toggleDrawer3(anchor, true)}
                    onOpen={toggleDrawer3(anchor, true)}
                  >
                    {
                      <Box
                        sx={{
                          position: "relative",
                          backdropFilter: "static",
                        }}
                        role="presentation"
                      >
                        {/* Register Form */}
                        <div className="px-5 pt-3 flex flex-col justify-center">
                          <div className="mb-5 grid grid-cols-12 justify-center items-center px-2 py-1">
                            <h1 id="registerTitle" className="col-span-11 text-center text-[22px] font-medium flex justify-center">
                              Customer Register Form
                            </h1>

                            <span className="p-2 col-span-1">
                              <button onClick={toggleDrawer3(anchor, false)}>
                                <CloseIcon
                                  id="btnClose"
                                  className="cursor-pointer !w-[32px] !h-[32px]"
                                />
                              </button>
                            </span>
                          </div>

                          <Form
                            textFieldsArray={[
                              {
                                label: "Full Name",
                                textFieldType: "text",
                                name: "fullName",
                                placeHolderText: "Full Name",
                              },
                              {
                                label: "Username",
                                textFieldType: "text",
                                name: "username",
                                placeHolderText: "Username",
                              },
                              {
                                label: "Password",
                                textFieldType: "password",
                                name: "password",
                                placeHolderText: "Password",
                              },
                              {
                                label: "Address",
                                textFieldType: "text",
                                name: "address",
                                placeHolderText: "Address",
                              },
                              {
                                label: "Contact Number",
                                textFieldType: "text",
                                name: "contact",
                                placeHolderText: "Contact Number",
                              },
                              {
                                label: "Email",
                                textFieldType: "text",
                                name: "email",
                                placeHolderText: "Email",
                              },
                            ]}
                            buttonsArray={[
                              {
                                color: "success",
                                icon: <PersonAddIcon />,
                                text: "Register",
                              },
                              {
                                color: "error",
                                icon: <BackspaceIcon />,
                                text: "Cancel",
                              },
                            ]}
                          />
                        </div>
                      </Box>
                    }
                  </SwipeableDrawer>
                </React.Fragment>
              ))
            ) : buttonText == "my_profile" ? (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<AccountCircleIcon className="!text-[20px]" />}
                styles={style2}
              />
            ) : buttonText == "logout" ? (
              <MyButton
                key={index}
                resource={buttonText}
                icon={<LogoutIcon className="!text-[20px]" />}
                styles={style1}
              />
            ) : (
              <Button
                key={index}
                className="!font-[600px] !px-[15px] !capitalize !font-poppins !text-[16px] !bg-custom-color-02-300 !rounded-[7px] !text-black"
                variant="contained"
              >
                {buttonText}
              </Button>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
