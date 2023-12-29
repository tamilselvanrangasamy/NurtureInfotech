import React from "react";
import Lottie from "lottie-react";
import Mission from "../../mission.json";
import "./OurMission.css";

const OurMission = () => {
  return (
    <div>
      <Lottie animationData={Mission} className="OurMission" />
    </div>
  );
};

export default OurMission;
