import React from "react";
import Lottie from "lottie-react";
import "./Animation.css";
import WebDevelopment from "../../WebDevelopment.json";

const Web = () => {
  return (
    <div>
      <Lottie animationData={WebDevelopment} className="animation" />
    </div>
  );
};

export default Web;
