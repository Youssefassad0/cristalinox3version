import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer">
        {/* SVG Wave Background */}
        <div className="waves">
          <svg className="wave wave1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#bdc3c7" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,85.3C672,64,768,96,864,117.3C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>

          <svg className="wave wave2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path fill="#bdc3c7" fillOpacity="0.5" d="M0,256L48,256C96,256,192,256,288,218.7C384,181,480,107,576,85.3C672,64,768,96,864,117.3C960,139,1056,149,1152,165.3C1248,181,1344,203,1392,213.3L1440,224L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
          </svg>
        </div>

        <div className="row">
          <div className="col">
            <ul>
              <li>
                <div className="logo-footer">
                  <Link to="/">
                    <img src="/images/logo.png" alt="logo CristalInox" />
                  </Link>
                </div>
              </li>
              <li>
                Passionnés par l’excellence de la chaudronnerie en acier inoxydable.
                Fondée sur un savoir-faire artisanal et une volonté d'innovation,
                notre entreprise s'engage à fournir des solutions sur mesure pour
                les secteurs de la décoration, du médical et de la tuyauterie industrielle.
              </li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li><Link to="/about">À propos</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col">
            <ul>
              <li>+212 0661471841</li>
              <li>cristalinox@gmail.com</li>
              <li>Maroc, Casablanca</li>
            </ul>
          </div>
          <div className="col">
            <ul className="social-links">
              <li><i className="fa-brands fa-facebook-f"></i></li>
              <li><i className="fa-brands fa-linkedin-in"></i></li>
              <li><i className="fa-brands fa-instagram"></i></li>
              <li><i className="fa-brands fa-x-twitter"></i></li>
            </ul>
          </div>
        </div>

        <p>&copy; 2025 || Tous droits réservés par CristalInox</p>
      </div>
    </div>
  );
}

export default Footer;
