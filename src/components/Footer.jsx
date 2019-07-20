import React from "react";
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
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
          </div>
          <div className="insta">
            <p>#refill on instagram</p>
            <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
          </div>
        </section>
      </footer>
    </>
  );
}
