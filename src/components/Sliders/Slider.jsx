import React from "react";
import "./Slider.css";

function Slider() {
  const images = [
    "images/p1.jpeg",
    "images/p2.jpeg",
    "images/p3.jpeg",
    "images/p4.jpeg",
    "images/p5.jpeg",
    "images/p6.jpeg",
    "images/p7.jpeg",
   
  ];

  return (
    <div className="Slider_page">
      <div className="banner">
        <div className="slider" style={{ "--quantity": images.length }}>
          {images.map((imgSrc, index) => (
            <div key={index} className="item_slider" style={{ "--position": index + 1 }}>
              <img src={imgSrc} alt={`Slide ${index + 1}`} />
            </div>
          ))}
        </div>
        <div className="content">
          <h1 data-content="Cristal Inox">Cristal Inox</h1>
          <div className="author">
            <h2>LUN DEV</h2>
            <p>
    High-quality **inox solutions** for <b>decoration, medical, and piping</b> industries.
  </p>
  <p>
    Explore our latest projects and innovations in stainless steel fabrication.
  </p>
          </div>
          <div className="model"></div>
        </div>
      </div>
    </div>
  );
}

export default Slider;
