import "./styles.css";
import { Divider } from "@material-ui/core";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import HeroImage from "./resources/heroSapience.jpg";
import Offre from "./components/Offre";
import QuoteCarousel from "./components/QuoteCarousel";

export default function App() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column"
      }}
    >
      <header style={{ width: "100%" }}>
        <Hero />
      </header>
      <main>
        <div style={{}}>
          <Offre />
          <Divider />
          <section
            id="projects"
            style={{ textAlign: "center", marginTop: "1.5rem!important" }}
          ></section>
        </div>
        <div id="streak">
          <QuoteCarousel />
        </div>
        <div style={{}}>
          <section
            id="Products"
            style={{ textAlign: "center", marginTop: "1.5rem!important" }}
          ></section>
        </div>
      </main>
    </div>
  );
}
