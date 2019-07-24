import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import LegalNoticeModal from "./modals/LegalNoticeModal";
import TermsOfUseModal from "./modals/TermsOfUse";
import useModal from "./modals/useModal";

export default function Footer() {
  const { isShowing, toggle } = useModal();
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
          <button className="btn-lg-notice" onClick={toggle}>
            Legal Notice
          </button>
          <LegalNoticeModal isShowing={isShowing} hide={toggle} />

          <button className="btn-cgu" onClick={toggle}>
            Terms of use
          </button>
          <TermsOfUseModal isShowing={isShowing} hide={toggle} />
          <a href={`http://localhost:3000/#top`}>
            <FontAwesomeIcon icon={faChevronUp} className="contact-icon" />
          </a>
        </section>
      </footer>
    </>
  );
}
