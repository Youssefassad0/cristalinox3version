import React from "react";
import "./test.css";
import { motion } from "framer-motion";

const Abouttest = () => {
  return (
    <>
      <section className="about2">
        <div className="back">
          <div className="container2">
            <span>À Propos de Nous</span>
            <h1>Qui somme nous ?</h1>
          </div>
          <img src="/images/about_banner.jpeg" alt="" className="img2" />
        </div>
        <div className="container2 flex mtop">
          <div className="left row">
            <div className="heading">
              <h1>Our Agency Story</h1>
              <p>Check out our company story and work process</p>
            </div>
            <motion.p
              className="about-text"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Chez <strong>Cristal Inox</strong>, nous sommes passionnés par
              l’excellence de la chaudronnerie en acier inoxydable. Fondée sur
              un savoir-faire artisanal et une volonté d'innovation, notre
              entreprise s'engage à fournir des solutions sur mesure pour les
              secteurs de la décoration, du médical et de la tuyauterie
              industrielle.
            </motion.p>

            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="/images/about_bg.png" alt="" />
          </div>
        </div>
        <motion.div
          className="about-section"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {" "}
          <h3>Notre Engagement</h3>
          <p>
            Nous croyons que l'acier inoxydable est bien plus qu'un simple
            matériau : c'est une promesse de durabilité, d'élégance et de
            performance. Chaque projet que nous réalisons est conçu avec une
            attention méticuleuse aux détails.
          </p>
        </motion.div>
      </section>
    </>
  );
};

export default Abouttest;
