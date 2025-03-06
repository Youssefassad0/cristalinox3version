import React from "react";
import { Button } from "../navbar/Button";
import { motion } from "framer-motion";
import "./Hero.css";
import "../../App.css";
function Hero() {
  return (
    <div className="hero-container">
      <video src="/vedios/vedio1.mp4" autoPlay loop muted />
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        CristalInox
      </motion.h1>
      <motion.div className="hero-btns" 
       initial={{ opacity: 0, x: 100 }}  
       whileInView={{ opacity: 1, x: 0 }} 
       transition={{ duration: 1, ease: "easeOut" ,delay :0.8}}
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
