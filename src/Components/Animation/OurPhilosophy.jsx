import React from "react";
import Lottie from "lottie-react";
import Philosophy from "../../Philosophy.json";
import "./OurPhilosophy.css";

const OurMission = () => {
  return (
    <div>
      <Lottie animationData={Philosophy} className="Philosophy" />
    </div>
  );
};

export default OurMission;
