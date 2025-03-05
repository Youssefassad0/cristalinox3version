import React from "react";
import { Button } from "../navbar/Button";
import "./Hero.css";
function Hero() {
  return (
    <div className="hero-container">
    <video src='/vedios/vedio1.mp4' autoPlay loop muted />
      <h1>CRISTALINOX</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Demander un Devis
        </Button>
      </div>
    </div>
  );
}

export default Hero;
