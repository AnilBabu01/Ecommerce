import React from "react";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import CallMadeIcon from "@mui/icons-material/CallMade";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="mainfooter">
        <div className="footercontent">
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              WOMEN
            </Typography>
            <div className="mardivcontent">
              <Typography>Indian Wear</Typography>
              <Typography>Westen Wear</Typography>
              <Typography>Lingerie & Night wear</Typography>
              <Typography>Footwear</Typography>
              <Typography>Watches</Typography>
              <Typography>Fragrences</Typography>
              <Typography>Bags & Wallets</Typography>
              <Typography>Sunglasses</Typography>
              <Typography>jewellery</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              MEN
            </Typography>
            <div className="mardivcontent">
              <Typography>Clothing</Typography>
              <Typography>Footwear</Typography>
              <Typography>Watches</Typography>
              <Typography>fragrances</Typography>
              <Typography>Grooming For Men</Typography>
              <Typography>Sunlgasses % Frames</Typography>
              <Typography>Accessories</Typography>
              <Typography>Jewellery</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              Kids
            </Typography>
            <div className="mardivcontent">
              <Typography>Boys</Typography>
              <Typography>Girls</Typography>
              <Typography>Infrant</Typography>
              <Typography>Toys</Typography>
              <Typography>School Essential</Typography>
              <Typography>Footwear</Typography>
              <Typography>Watches</Typography>
              <Typography>Accessories</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              BEAUTY
            </Typography>
            <div className="mardivcontent">
              <Typography>Make Up</Typography>
              <Typography>Skincare</Typography>
              <Typography>bath & Body</Typography>
              <Typography>Nails</Typography>
              <Typography>Haircare</Typography>
              <Typography>Tools & Accossories</Typography>
              <Typography>Women's Fragrances</Typography>
              <Typography>Grooming for Men</Typography>
              <Typography>Personal Hygiene</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              MOMESTOP
            </Typography>
            <div className="mardivcontent">
              <Typography>Kitchen & Dining</Typography>
              <Typography>Decor</Typography>
              <Typography>HOME Furnishing</Typography>
              <Typography>Storage & Organization</Typography>
              <Typography>Smart Home and Applications</Typography>
              <Typography>Bath</Typography>
              <Typography>Bedding</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" style={{ fontWeight: "400" }}>
              Explore
            </Typography>
            <div className="mardivcontent">
              <Typography>Home</Typography>
              <Typography>About us</Typography>
              <Typography>FAQ</Typography>
              <Typography>Register/Login</Typography>
            </div>
          </div>
          <div className="phonecon">
            <Typography variant="h6" className="instatxt">
              Legal
            </Typography>
            <div className="mardivcontent">
              <Typography>Tearm & Condition</Typography>
              <Typography>Privacy policy</Typography>
            </div>
          </div>
        </div>
        <div className="pincodediv">
          <div style={{ display: "flex" }}>
            <svg
              className="svgphone"
              width="20"
              height="20"
              viewBox="0 0 80 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.52 28.56C44.64 28.8 45.96 33.16 46.04 35.2H53.2C52.88 27.28 47.24 22.44 39.4 22.44C30.56 22.44 24 28 24 40.56C24 48.32 27.72 57.52 39.36 57.52C48.24 57.52 53 50.92 53.12 45.72H45.96C45.84 48.08 44.16 51.24 39.44 51.48C34.2 51.32 32 47.24 32 40.56C32 29 37.12 28.64 39.52 28.56ZM40 0C17.92 0 0 17.92 0 40C0 62.08 17.92 80 40 80C62.08 80 80 62.08 80 40C80 17.92 62.08 0 40 0ZM40 72C22.36 72 8 57.64 8 40C8 22.36 22.36 8 40 8C57.64 8 72 22.36 72 40C72 57.64 57.64 72 40 72Z"
                fill="white"
              />
            </svg>

            <Typography className="right">
              2022 Nepalify-Kart. All right reserved
            </Typography>
          </div>
          <div>
            <Typography>
              Made with{" "}
              <img src="./images/dil.svg" alt="dil" className="dilimg" /> by
              Nepalify-Kart Team
            </Typography>
          </div>
        </div>
        <div className="hrdiv">
          <hr style={{ color: "white", border: "1px solid #f8f2f2" }} />
        </div>

        <div className="social">
          <div className="iconmain">
            <div className="icondiv5">
              <FacebookIcon />
            </div>
          </div>

          <div className="iconmain">
            <div className="icondiv5">
              <TwitterIcon />
            </div>
          </div>

          <div className="iconmain">
            <div className="icondiv5">
              <InstagramIcon />
            </div>
          </div>

          <div className="iconmain">
            <div className="icondiv5">
              <CallMadeIcon />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
