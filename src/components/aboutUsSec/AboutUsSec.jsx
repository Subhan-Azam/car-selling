import React from "react";
import AboutUsSecCart from "./aboutUsSecCart";
import "./aboutUsSec.css";
// import img1 from "/assets/Group 46.png";

export default function AboutUsSec() {
  return (
    <div className="aboutUsSec">
      <div className="aboutUsSecChild">
        <AboutUsSecCart para="Available Cars" src={"/assets/Group 46.png"} />
        <AboutUsSecCart para="Happy Client" src={"/assets/Group 45.png"} />
        <AboutUsSecCart para="Team Workers" src={"/assets/Group 44.png"} />
        <AboutUsSecCart para="Year of Experience" src={"/assets/Group 43.png"} />
      </div>
    </div>
  );
}
