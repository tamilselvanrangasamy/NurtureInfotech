import React from "react";
import Lottie from "lottie-react";
import "./Animation.css";
import Graphic from "../../Graphic.json";

const GraphicDevelopment = () => {
  return (
    <div>
      <Lottie animationData={Graphic} className="animation" />
    </div>
  );
};

export default GraphicDevelopment;
