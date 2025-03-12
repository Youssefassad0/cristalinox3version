import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import "./QrLinks.css";

const QrLinks = () => {
  const links = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/CristalInox",
      color: "#3b5998",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/CristalInox",
      color: "#E1306C",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/CristalInox",
      color: "#0077b5",
    },
    { name: "WhatsApp", url: "https://wa.me/2120661471841", color: "#25D366" },
  ];

  return (
   <>
   Hello
   </>
  );
};

export default QrLinks;
