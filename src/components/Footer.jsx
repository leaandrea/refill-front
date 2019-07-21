import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <section className="social-icons">
          <div className="contact">
            <p>Contact us!</p>
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </Link>
          </div>
          <div className="insta">
            <p>#refill on instagram</p>
            <Link to="/instagram">
              <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
            </Link>
          </div>
        </section>
        <section className="legal-blabla">
          <p>Legal Notice</p>
          <p>Terms of Use</p>
        </section>
      </footer>
    </>
  );
}
