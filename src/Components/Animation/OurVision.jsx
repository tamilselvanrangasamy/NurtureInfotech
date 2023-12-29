import React from "react";
import Lottie from "lottie-react";
import Vision from "../../vision.json";
import "./OurVision.css";

const OurMission = () => {
  return (
    <div>
      <Lottie animationData={Vision} className="OurVission" />
    </div>
  );
};

export default OurMission;
