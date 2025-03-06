import React, { useState, useEffect } from "react";
import { Button } from "../navbar/Button";
import { motion } from "framer-motion";
import "./Hero.css";
import "../../App.css";

function Hero() {
  const [videoSource, setVideoSource] = useState("/vedios/vedio2.mp4");

  const handleVideoEnd = () => {
    if (videoSource === "/vedios/vedio4.mp4") {
      setVideoSource("/vedios/vedio2.mp4");
    } else {
      setVideoSource("/vedios/vedio4.mp4");
    }
  };

  useEffect(() => {
    const videoElement = document.querySelector('video');
    if (videoElement) {
      videoElement.load(); 
    }
  }, [videoSource]);

  return (
    <div className="hero-container">
      <video
        src={videoSource}
        autoPlay
        muted
        onEnded={handleVideoEnd} 
      />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        CristalInox
      </motion.h1>
      <motion.div
        className="hero-btns"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
      >
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Demander un Devis
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Explorer nos projets
        </Button>
      </motion.div>
    </div>
  );
}

export default Hero;
