import React from "react";
import HeroImage from "../resources/heroSapience.jpg";
import { Button, Divider } from "@material-ui/core";
import NavBar from "./NavBar";

export default function Hero() {
  return (
    <div
      id="home"
      style={{
        backgroundImage: `url(${HeroImage})`,
        backgroundRepeat: "no-repeat",
        backgroundPositionX: "69%",
        backgroundSize: "cover",
        zIndex: 0,
        height: "769px"
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginRight: "auto",
          marginLeft: "auto",
          paddingRight: "15px",
          paddingLeft: "15px",
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,.33)"
        }}
      >
        <NavBar />
        <div
          style={{
            color: "white"
          }}
          className="center"
        >
          <h2
            style={{
              fontWeight: 500,
              fontSize: "4.2rem",
              lineHeight: 1.1
            }}
            align="center"
          >
            Sapience
          </h2>
          <p align="center">
            <i>Nom féminin, ancien</i> : Sagesse et Science
          </p>
          <Divider style={{ backgroundColor: "#FFF" }} />
          <h4
            style={{
              marginBottom: "3rem!important",
              marginTop: "1.5rem!important",
              fontWeight: 300,
              fontSize: "1.5rem"
            }}
            align="center"
          >
            Retrouver ensemble la liberté d'Apprendre
          </h4>
          <Button
            style={{ marginLeft: "33%", marginRight: "30%" }}
            variant="outlined"
            color="inherit"
          >
            En Savoir Plus
          </Button>
        </div>
      </div>
    </div>
  );
}
