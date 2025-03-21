import React from "react";
import "./Aide.css";

const Aide = () => {
  return (
    <div className="aide-container">
      <div className="aide-card">
        <div className="aide-image">
          <img src="images/job.jpg" alt="Meeting" />
        </div>
        <div className="aide-info">
          <h2>Besoin d’aide <span className="highlight">?</span></h2>
          <h3>aideez-nous !</h3>
          <p><strong>Service client est à votre écoute !</strong></p>
          <ul>
            <li>📧 info@dekoflix.fr</li>
            <li>📞 +33 1 40 36 56 90</li>
            <li>📅 +33 7 45 12 22 15</li>
          </ul>
          <h4>📍 Venez nous rendre visite !</h4>
          <p><strong>Adresse de notre boutique :</strong></p>
          <ul>
            <li>📌 35 rue de Tanger - Paris</li>
            <li>📆 Du mardi au samedi</li>
            <li>⏰ De 10h à 18h</li>
          </ul>
          <p>Notre équipe vous accueille avec le sourire ! 😊</p>
          <button className="aide-button">aideez-nous !</button>
        </div>
      </div>
    </div>
  );
};

export default Aide;