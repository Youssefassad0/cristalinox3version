import React, { useState } from "react";
import "./Newsletter.css";

const NewsLetter = () => {
  const [email, setEmail] = useState("");

  const handleEmail = (e) => {
    e.preventDefault();
    console.log("email", email);
    setEmail("");
  };

  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <div className="newsletter-text">
          <h2>Sign up for our newsletter</h2>
          <p>Join our newsletter and get news in your inbox every week!</p>
        </div>
        <div className="newsletter-form">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button onClick={handleEmail}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
