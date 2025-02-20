import { React, useState } from "react";

import {
  Container,
  Grid,
  Typography,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import Navbar from "./components/Navbar";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Card from "@mui/material/Card";
import Cards from "./components/Cards";
import VectorImg1 from "../public/Vector (1).png";
import VectorImg2 from "../public/Vector (2).png";
import quality from "../public/quality.png";
import Group from "../public/Group.png";
import innovation from "../public/innovation.png";
import transparency from "../public/transparency.png";
import Customer from "../public/Customer.png";
import empowerment from "../public/empowerment.png";
import collaboration from "../public/collaboration.png";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <Container
        maxWidth="lg"
        sx={{ display: "flex", alignItems: "center", height: "80vh" }}
      >
        <Grid container spacing={4}>
          {/* Text Section */}
          <Grid item xs={12} md={6}>
            <h1
              style={{
                fontSize: "40px", // Use 'fontSize' for font size
                fontFamily: "Afacad", // Correct property for font
              }}
            >
              Your Dream Home, Your Way
            </h1>

            <Typography variant="body1" color="textSecondary" sx={{ mt: 2 }}>
              Custom Design, Handpicked Teams, and Stress-Free Building
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowForwardIosIcon />}
              sx={{ mt: 4, textTransform: "none", fontSize: "16px" }}
            >
              Get Started with Custom home building
            </Button>
          </Grid>

          {/* Image Section */}
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/home.png" // Replace with your image URL
              alt="Dream Home"
              sx={{
                width: "100%",
                height: "auto",
                boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.2)",
                borderRadius: 2,
              }}
            />
          </Grid>
        </Grid>
      </Container>

      <Box sx={{ textAlign: "center", mt: 4 }}>
        <IconButton>
          <KeyboardArrowDownIcon sx={{ fontSize: "3rem" }} />
        </IconButton>
      </Box>

      <div
        style={{ display: "flex", justifyContent: "space-around", gap: "10px" }}
      >
        <h1 style={{ size: "64px" }}>We provide</h1>
        <p style={{ width: "650px" }}>
          Personalized, innovative, and seamless home-building solutions that
          bring homeowners’ dream spaces to life, through expert teams and a
          customer-first approach
        </p>
      </div>
      <Container
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          padding: "20px",
        }}
      >
        <Cards
          image={VectorImg1}
          title="Customer Home Building"
          para="offring services for your dream homes"
        />
        <Cards
          image={VectorImg2}
          title="Team Building"
          para="Helping clients build their own team"
        />
        <Cards
          image={VectorImg1}
          title="Project Management"
          para="Ensuring a seamless building process"
        />
        <Cards
          image={Group}
          title="Home Visualization"
          para="Visualize their home renderings"
        />
        <Cards
          image={VectorImg1}
          title="Get a Quotation"
          para="Allow users to easily request a personalized cost"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap", fontWeight: "normal" }}>
            Our Vission
          </h1>
          <p style={{ maxWidth: "600px", textAlign: "justify" }}>
            To revolutionize the home-building industry by becoming the go-to
            platform for tailored, full-service design and construction,where
            every home is a unique reflection of it's owner's version.
          </p>
        </div>
        <Card
          style={{
            background: "#f5f5f5",
            height: "300px",
            width: "550px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayCircleOutlineIcon />
        </Card>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap", fontWeight: "normal" }}>
            Our Values
          </h1>
          <p style={{ maxWidth: "600px", textAlign: "justify" }}>
            At our startup, we are driven by a set of core values that guide our
            approach to creating exceptional home-building experiences
          </p>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            gap: "20px",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <img
            src={Customer}
            alt="customer"
            style={{ width: "120px", height: "120px" }}
          />
          <img
            src={innovation}
            alt="inv"
            style={{ width: "120px", height: "120px" }}
          />
          <img
            src={collaboration}
            alt="col"
            style={{ width: "120px", height: "120px" }}
          />
          <img
            src={quality}
            alt="quality"
            style={{ width: "120px", height: "120px" }}
          />
          <img
            src={transparency}
            alt="transparency"
            style={{ width: "120px", height: "120px" }}
          />
          <img
            src={empowerment}
            alt="empowerment"
            style={{ width: "120px", height: "120px" }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            gap: "10px",
          }}
        >
          <h1 style={{ whiteSpace: "nowrap", fontWeight: "normal" }}>
            Our Team
          </h1>
          <p style={{ maxWidth: "600px", textAlign: "justify" }}>
            At our startup, we are driven by a set of core values that guide our
            approach to creating exceptional home-building experiences
          </p>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default App;
