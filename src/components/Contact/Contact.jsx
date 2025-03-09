import React from 'react';

function Contact() {
  return (
    <div className="contactForm">
      <form action="#">
        <h1 className="sub-heading">Need Support!</h1>
        <p className="para para2">Contact us for a quote, help to join the team.</p>
        <input type="text" className="input" placeholder="Your name" />
        <input type="text" className="input" placeholder="Your email" />
        <input type="text" className="input" placeholder="Your subject" />
        <textarea className="input" cols="30" rows="5" placeholder="Your message..."></textarea>
        <input type="submit" className="input submit" value="Send Message" />
      </form>

      <div className="map-container">
        <div className="mapBg"></div>
        <div className="map">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9914410252845!2d2.291906375932066!3d48.85837360070842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2set!4v1695627657575!5m2!1sen!2set" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contactMethod">
        <div className="method">
          <i className="fa-solid fa-location-dot contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Location</h1>
            <p className="para">2276 Lynn Ogden Lane Beaumont</p>
          </article>
        </div>

        <div className="method">
          <i className="fa-solid fa-envelope contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Email</h1>
            <p className="para">Email: programminginsider2021@gmail.com</p>
          </article>
        </div>

        <div className="method">
          <i className="fa-solid fa-phone contactIcon"></i>
          <article className="text">
            <h1 className="sub-heading">Phone</h1>
            <p className="para">2276 Lynn Ogden Lane Beaumont</p>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Contact;
