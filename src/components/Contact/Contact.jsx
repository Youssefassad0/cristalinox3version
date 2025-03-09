import React, { useEffect, useRef } from "react";
import "./Contact.css";
import gmail from "../../assets/gmail.json";
import phone from "../../assets/phone.json";
import maps from "../../assets/maps.json";
import Lottie from "lottie-react";
function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const copyEmail = () => {
    const email = "CristalInox@gmail.com";
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };
  const lottieRef = useRef();
  return (
    <div className="contact_body">
      <section className="contact_section">
        <div className="contactForm">
          <form action="#">
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
            <input
              type="submit"
              className="input submit"
              value="Send Message"
            />
          </form>

          <div className="map-container">
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
          </div>

          <div className="contactMethod">
            <div className="method">
            <div className="lottie-container">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={maps}
                  height={60}
                  width={80}
                  onDOMLoaded={() => {
                    lottieRef.current.setSpeed(1);
                  }}
                />
              </div>
              <article className="text">
                <h1 className="sub-heading">Location</h1>
                <p className="para">Casablanca , Tit Mellil</p>
              </article>
            </div>

            <div className="method">
              <div className="lottie-container">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={gmail}
                  height={50}
                  width={50}
                  onDOMLoaded={() => {
                    lottieRef.current.setSpeed(1);
                  }}
                />
              </div>
              <article className="text">
                <h1 className="sub-heading" onClick={copyEmail}>
                  Email
                </h1>
                <p className="para">Email: CristalInox@gmail.com</p>
              </article>
            </div>

            <div className="method">
              <div className="lottie-container">
                <Lottie
                  lottieRef={lottieRef}
                  animationData={phone}
                  height={50}
                  width={50}
                  onDOMLoaded={() => {
                    lottieRef.current.setSpeed(1);
                  }}
                />
              </div>
              <article className="text">
                <h1 className="sub-heading">Phone</h1>
                <a href="tel:+2120661471841" className="para" id="clickable">
                  +2120661471841
                </a>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
