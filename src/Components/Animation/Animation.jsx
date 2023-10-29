import React from "react";
import animation from "../../animation1.json";
import Lottie from "lottie-react";
import "./Animation.css";

const Animation = () => {
  return (
    <div>
      <Lottie animationData={animation} className="animation" />
    </div>
  );
};

export default Animation;
