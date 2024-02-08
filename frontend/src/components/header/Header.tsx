import {
  useRef,
  useState,
  useEffect,
  MutableRefObject,
  RefObject,
  ChangeEvent,
} from "react";
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
import {
  NavLink,
  BrowserRouter as Router,
  Route,
  RouteProps,
  Routes,
  useNavigate,
} from "react-router-dom";
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
import Dashboard from "../Dashboard";
import Explore from "../Explore";
import Footer from "../Footer";
import logo from "../../assets/img/logo.png";
import { useMyContext } from "../../config/ContextAPI";
import axios from "../../axios";
import { Signup } from "../../types/Signup";
import Swal from "sweetalert2";
import { Login } from "../../types/Login";

const Header = (props: HeaderProps) => {
  type Anchor = "right";
  const navigate = useNavigate();

  const loginFormRef = useRef<HTMLDivElement>(null);
  const resetFormRef = useRef<HTMLDivElement>(null);

  const { dashboardRef, exploreRef, footerRef, sellerId, setSellerId } = useMyContext();

  const scrollToComponent = (ref: RefObject<any> | null) => {
    if (ref !== null) {
      if (ref == dashboardRef || ref == exploreRef || ref == footerRef) {
        ref.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  useEffect(() => {
    console.log("dashboardRef current value:", dashboardRef.current);
    console.log("exploreRef current value:", exploreRef.current);
    console.log("footerRef current value:", footerRef.current);
  }, [dashboardRef, exploreRef, footerRef]);

  const [fullName, setFullName] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [contact1, setContact1] = useState<string>("");
  const [contact2, setContact2] = useState<string>("");

  const [loginUsername, setLoginUsername] = useState<string>("");
  const [loginPassword, setLoginPassword] = useState<string>("");

  const handleCancelSignup = () => {
    setFullName("");
    setAddress("");
    setEmail("");
    setUsername("");
    setPassword("");
    setContact1("");
    setContact2("");
  };

  const handleSignup = () => {
    axios
      .get("/seller/generate_new_seller_ID")
      .then((res) => {
        let newSignup: Signup = {
          seller_id: res.data.content,
          username: username,
          password: password,
          seller_name: fullName,
          seller_contact_01: contact1,
          seller_contact_02: contact2,
          seller_address: address,
          seller_email: email,
        };

        setSellerId(res.data.content)

        axios
          .post("/auth/signup", newSignup, {
            headers: {
              "Content-Type": "application/json",
            },
          })
          .then((res) => {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: res.data.message,
              showConfirmButton: false,
              timer: 1500,
            });

            handleCancelSignup();
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: error.response.data.message,
            });

            // handleCancelSignup();
          });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.message,
        });

        handleCancelSignup();
      });
  };

  const handleCancelLogin = () => {
    setLoginUsername("");
    setLoginPassword("");
  };

  const handleLogin = () => {
    let newLogin: Login = {
      username: loginUsername,
      password: loginPassword,
    };

    axios
      .post("/auth/login", newLogin, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: res.data.message,
          showConfirmButton: false,
          timer: 1500,
        });
        // localStorage.setItem(TOKEN_KEY, res.data.token);
        // window.localStorage.setItem("userInfo", JSON.stringify(res.data))
        // setSellerId(seller_id)
        setSellerId(res.data.content)

        navigate("/user/home");
        console.log("Login User: ", res.data.content)

        handleCancelLogin();
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });

        handleCancelLogin();
      });
  };

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
        <img
          src={logo}
          alt="UserImage"
          className="w-[100px] h-[100px] relative top-[2px]"
        />
        <NavLink to={"/home"} onClick={() => scrollToComponent(dashboardRef)}>
          <h1
            style={{ letterSpacing: "2px", marginTop: "2px" }}
            className="h-max mb-[1px] !text-2xl !text-black relative right-4"
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
              to={props.prefix + resource}
              className={({ isActive }) => (isActive ? activeLink : normalLink)}
              onClick={() =>
                scrollToComponent(
                  resource == "home"
                    ? dashboardRef
                    : resource == "explore"
                    ? exploreRef
                    : resource == "contact"
                    ? footerRef
                    : null
                )
              }
            >
              {resource.split("_")[2]
                ? resource[0].toUpperCase() +
                  resource.split("_")[0].substring(1) +
                  " " +
                  resource.split("_")[1][0].toUpperCase() +
                  resource.split("_")[1].substring(1) +
                  " " +
                  resource.split("_")[2][0].toUpperCase() +
                  resource.split("_")[2].substring(1)
                : resource.split("_")[1]
                ? resource[0].toUpperCase() +
                  resource.split("_")[0].substring(1) +
                  " " +
                  resource.split("_")[1][0].toUpperCase() +
                  resource.split("_")[1].substring(1)
                : resource[0].toUpperCase() + resource.substring(1)}
            </NavLink>
          ))}

          {/* <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/contact" element={<Footer />} />
          </Routes> */}

          {/* ========================================= */}
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
                            value={loginUsername}
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              setLoginUsername(event.target.value);

                              if (event.target.value && loginPassword) {
                              }
                            }}
                          />

                          <TextField
                            label="Password"
                            className="!font-poppins"
                            type="password"
                            variant="outlined"
                            name="password"
                            placeholder="Password"
                            required
                            value={loginPassword}
                            onChange={(
                              event: ChangeEvent<HTMLInputElement>
                            ) => {
                              setLoginPassword(event.target.value);
                            }}
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
                            onClick={handleLogin}
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
                            <h1
                              id="registerTitle"
                              className="col-span-11 text-center text-[22px] font-medium flex justify-center"
                            >
                              Seller Registration Form
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

                          <div className="mb-[20px]">
                            <Form
                              textFieldsArray={[
                                {
                                  label: "Full Name",
                                  textFieldType: "text",
                                  name: "fullName",
                                  placeHolderText: "Full Name",
                                  value: fullName,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setFullName(event.target.value);
                                  },
                                },
                                {
                                  label: "Username",
                                  textFieldType: "text",
                                  name: "username",
                                  placeHolderText: "Username",
                                  value: username,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setUsername(event.target.value);
                                  },
                                },
                                {
                                  label: "Password",
                                  textFieldType: "password",
                                  name: "password",
                                  placeHolderText: "Password",
                                  value: password,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setPassword(event.target.value);
                                  },
                                },
                                {
                                  label: "Address",
                                  textFieldType: "text",
                                  name: "address",
                                  placeHolderText: "Address",
                                  value: address,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setAddress(event.target.value);
                                  },
                                },
                                {
                                  label: "Contact Number 1",
                                  textFieldType: "text",
                                  name: "contact1",
                                  placeHolderText: "Contact Number 1",
                                  value: contact1,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setContact1(event.target.value);
                                  },
                                },
                                {
                                  label: "Contact Number 2",
                                  textFieldType: "text",
                                  name: "contact2",
                                  placeHolderText: "Contact Number 2",
                                  value: contact2,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setContact2(event.target.value);
                                  },
                                },
                                {
                                  label: "Email",
                                  textFieldType: "text",
                                  name: "email",
                                  placeHolderText: "Email",
                                  value: email,
                                  onChange: (
                                    event: ChangeEvent<HTMLInputElement>
                                  ) => {
                                    setEmail(event.target.value);
                                  },
                                },
                              ]}
                              buttonsArray={[
                                {
                                  color: "success",
                                  icon: <PersonAddIcon />,
                                  text: "Register",
                                  onClick: handleSignup,
                                },
                                {
                                  color: "error",
                                  icon: <BackspaceIcon />,
                                  text: "Cancel",
                                  onClick: handleCancelSignup,
                                },
                              ]}
                            />
                          </div>
                        </div>
                      </Box>
                    }
                  </SwipeableDrawer>
                </React.Fragment>
              ))
            ) : buttonText == "my_profile" ? (
              <MyButton
                key={index}
                text={buttonText}
                resource={"/user/" + buttonText}
                icon={<AccountCircleIcon className="!text-[20px]" />}
                styles={style2}
              />
            ) : buttonText == "logout" ? (
              <MyButton
                key={index}
                resource={"/user/" + buttonText}
                text={buttonText}
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
