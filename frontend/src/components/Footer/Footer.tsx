import React, { MutableRefObject } from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PlaceIcon from "@mui/icons-material/Place";
import EmailIcon from "@mui/icons-material/Email";
import WifiCalling3Icon from "@mui/icons-material/WifiCalling3";
import { ScrollableComponentProps } from "../../types/ScrollableComponentProps";
import { useMyContext } from "../../config/ContextAPI";

const Footer = () => {
  const { footerRef } = useMyContext();

  return (
    <footer
      id="footer"
      ref={footerRef}
      className="bg-[#f7f7f7] !text-[#515151] flex flex-col gap-2"
    >
      <nav className="mb-2">
        <menu className="flex justify-center text-center gap-16 px-6 flex-wrap">
          {/* xl:columns-2 md:columns-2 */}
          <li className="flex justify-center">
            <FacebookIcon className="!text-[38px] cursor-pointer" />
          </li>
          <li className="flex justify-center">
            <InstagramIcon className="!text-[38px] cursor-pointer" />
          </li>
          <li className="flex justify-center">
            <TwitterIcon className="!text-[38px] cursor-pointer" />
          </li>
          <li className="flex justify-center">
            <GitHubIcon className="!text-[38px] cursor-pointer" />
          </li>
          <li className="flex justify-center">
            <LinkedInIcon className="!text-[38px] cursor-pointer" />
          </li>
        </menu>
      </nav>

      <aside className="">
        <h1 style={{ letterSpacing: "2px", marginBottom: "2px" }}>
          Ever Estate
        </h1>
        <h5 style={{ marginLeft: "-4px" }}>
          <PlaceIcon
            style={{
              marginRight: "5px",
              fontSize: "19px",
            }}
          />
          Sri Lanka
        </h5>
        <h5 style={{ marginLeft: "-4px" }}>
          <EmailIcon
            style={{
              marginRight: "5px",
              fontSize: "19px",
            }}
          />
          everestate@outlook.lk
        </h5>
        <h5 style={{ marginLeft: "-4px" }}>
          <WifiCalling3Icon
            style={{
              marginRight: "5px",
              fontSize: "19px",
            }}
          />
          +914579233
        </h5>
      </aside>

      <div className="">
        <i className="fa-regular fa-copyright"></i>
        <small>© Copyright 2024 Ever Estate, Inc. All Rights Reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
