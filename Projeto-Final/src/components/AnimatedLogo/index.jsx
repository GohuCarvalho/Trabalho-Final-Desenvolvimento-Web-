import React from "react";
import Lottie from "lottie-react";
import animationData from "../../assets/Animacao-logo-popcorntv.json";

const AnimatedLogo = ({ onComplete }) => {
  return (
    <Lottie
      animationData={animationData}
      loop={false}
      onComplete={onComplete}
      style={{ width: 750, height: 300, margin: "auto" }}
    />
  );
};

export default AnimatedLogo;
