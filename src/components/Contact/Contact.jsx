import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./Contact.css";
import gmail from "../../assets/gmail.json";
import phone from "../../assets/phone.json";
import maps from "../../assets/maps.json";
import Lottie from "lottie-react";
import FAQ from "./Faqs";
import QrLinks from "./CodeQR";

function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const copyEmail = () => {
    const email = "CristalInox@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <>
      <motion.div className="contact_body" initial="hidden" animate="visible">
        <section className="contact_section">
          <div className="contactForm">
            <motion.form action="#">
              <h1 className="sub-heading">Nous contacter</h1>
              <p className="para para2">N'hésitez pas à Nous contacter.</p>
              <input type="text" className="input" placeholder="Your name" />
              <input type="text" className="input" placeholder="Your email" />
              <input type="text" className="input" placeholder="Your subject" />
              <textarea
                className="input"
                cols="30"
                rows="5"
                placeholder="Your message..."
              ></textarea>
              <motion.input
                type="submit"
                className="input submit"
                value="Send Message"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              />
            </motion.form>

            <motion.div className="map-container">
              <div className="mapBg"></div>
              <div className="map">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.870613518232!2d-7.452359590042773!3d33.55673787323632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda63544b9850703%3A0xfe37e6634e59f4e1!2sCristalinox!5e0!3m2!1sfr!2sma!4v1741535497597!5m2!1sfr!2sma"
                  width="700"
                  height="500"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            <div className="contactMethod">
              {[
                {
                  data: maps,
                  title: "Location",
                  text: "Casablanca , Tit Mellil",
                },
                {
                  data: gmail,
                  title: "Email",
                  text: "CristalInox@gmail.com",
                  action: copyEmail,
                },
                {
                  data: phone,
                  title: "Phone",
                  text: "+2120661471841",
                  link: "tel:+2120661471841",
                },
              ].map((item, index) => (
                <motion.div
                  className="method"
                  key={index}
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="lottie-container">
                    <Lottie animationData={item.data} className="lottie-icon" />
                  </div>
                  <article className="text">
                    <h1 className="sub-heading" onClick={item.action}>
                      {item.title}
                    </h1>
                    {item.link ? (
                      <a href={item.link} className="para">
                        {item.text}
                      </a>
                    ) : (
                      <p className="para">{item.text}</p>
                    )}
                  </article>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </motion.div>
      <QrLinks />
      <FAQ />
    </>
  );
}

export default Contact;
