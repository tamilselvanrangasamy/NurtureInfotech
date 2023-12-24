import React from "react";
import Lottie from "lottie-react";
import "./Animation.css";
import Software_animation from "../../software_development.json";

const Software_development = () => {
  return (
    <div>
      <Lottie animationData={Software_animation} className="animation" />
    </div>
  );
};

export default Software_development;
