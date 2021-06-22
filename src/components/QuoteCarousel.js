import React from "react";
import Carousel from "react-material-ui-carousel";
import Background from "../resources/drop.png";

export default function QuoteCarousel() {
  var items = [
    "Déscolariser la structure sociale et culturelle exige l'utilisation de la technologie pour rendre possible une politique de participation.",
    "Quand apprenons-nous généralement? Quand nous faisons ce qui nous intéresse.",
    "L'école est l'agence de publicité qui nous fait croire que nous avons besoin de la société telle qu'elle est.",
    "La disparition de l'école pourrait conduire au triomphe du pédagogue, à qui l'on donnerait mandat d'agir en dehors de l'école sur la société tout entière."
  ];
  return (
    <div
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        display: "flex",
        minHeight: "320px",
        flexDirection: "column",
        justifyContent: "space-around",
        padding: "20px"
      }}
    >
      <Carousel>
        {items.map((item, index) => (
          <h4 key={index} style={{ textAlign: "center", color: "#FFF" }}>
            {item}
          </h4>
        ))}
      </Carousel>
      <p style={{ textAlign: "center", color: "#FFF" }}>
        Ivan Illitch - Une société sans école
      </p>
    </div>
  );
}
