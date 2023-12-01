import React from "react";
// import animation from "../../animation1.json";
import About_Animation from "../../About_Animation.json";
import Lottie from "lottie-react";
import "./Animation.css";

const Animation = () => {
  return (
    <div>
      {/* <Lottie animationData={animation} className="animation" /> */}
      <Lottie animationData={About_Animation} className="animation" />
    </div>
  );
};

export default Animation;
