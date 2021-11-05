import React from "react";
import background from "../../assets/images/hero-bg.png";
// import background2 from "../../assets/images/hero-right-bg-2.png";

export default function HeroRight() {
  return (
    <div>
      <div style={{ textAlign: "left" }}>
        <img alt="background" src={background} width="110%" />
      </div>
      {/* <div style={{ textAlign: "left" }}>
        <img alt="background2" src={background2} width="50%" />
      </div> */}
    </div>
  );
}
