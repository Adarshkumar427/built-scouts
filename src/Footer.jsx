import React from "react";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
const Footer = () => {
  return (
    <div style={{ background: "#f5f5f5" }}>
      <div
        className="main-footer"
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          marginTop: "150px",
          marginLeft: "10px",
        }}
      >
        <div>
          <h1 style={{ fontWeight: "normal" }}>Are you ready to discuss?</h1>
          <div
            style={{
              border: "1px solid black",
              display: "flex",
              alignItems: "Center",
              justifyContent: "space-around",
              borderRadius: "8px",
            }}
          >
            <p>
              Get started with{" "}
              <span style={{ color: "blue" }}>Custom home building </span>
            </p>
            <TrendingFlatIcon />
          </div>
          <h2 style={{ fontWeight: "normal", marginTop: "3px" }}>FAQ</h2>
        </div>
        <div>
          <div>
            <p style={{ margin: 0, marginTop: "20px" }}>Phone</p>
            <p style={{ margin: 0 }}>91+9999999999</p>
          </div>
          <div>
            <p style={{ margin: 0, marginTop: "20px" }}>Email</p>
            <p style={{ margin: 0 }}>buildscouts@gmail.com</p>
          </div>
          <div>
            <p style={{ margin: 0, marginTop: "20px" }}>Social Media</p>
            <InstagramIcon />
            <LinkedInIcon />
            <FacebookIcon />
          </div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid black",

          padding: "10px",
        }}
      >
        <p>&copy; BuildScouts {new Date().getFullYear()} All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
