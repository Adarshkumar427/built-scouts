import React from "react";
import Card from "@mui/material/Card";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Cards = ({ image, title, para }) => {
  return (
    <div>
      <Card
        variant="outlined"
        style={{
          width: "350px",
          height: "270px",
          marginInline: "auto",
          padding: "10px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          background: "#f5f5f5",
        }}
      >
        <h2
          style={{
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            margin: "0",
            width: "100%",
          }}
        >
          {title}
        </h2>
        <p style={{ whiteSpace: "nowrap", margin: "0", marginTop: "10px" }}>
          {para}
        </p>
        <img
          style={{
            height: "120px",
            width: "120px",
            margin: "0 auto",
            paddingTop: "35px",
          }}
          src={image}
          alt="no"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "20px",
          }}
        >
          <ArrowOutwardIcon />
        </div>
      </Card>
    </div>
  );
};

export default Cards;
