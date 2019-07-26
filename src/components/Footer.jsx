import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import LegalNoticeModal from "./modals/LegalNoticeModal";
import TermsOfUseModal from "./modals/TermsOfUse";
import useModal from "./modals/useModal";
import useModalCgu from "./modals/useModalCgu";

export default function Footer() {
  const { isShowing, toggle } = useModal();
  const { isShowing2, toggle2 } = useModalCgu();
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <>
      <footer className="footer">
        <section className="social-icons">
          <div className="contact">
            Contact us!
            <Link to="/contact">
              <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            </Link>
          </div>
          <div className="insta">
            #refill on instagram
            <Link to="/instagram">
              <FontAwesomeIcon icon={faInstagram} className="contact-icon" />
            </Link>
          </div>
        </section>
        <section className="legal-blabla">
          <p className="btn-lg-notice" onClick={toggle}>
            Legal Notice
          </p>
          <LegalNoticeModal isShowing={isShowing} hide={toggle} />

          <p className="btn-cgu" onClick={toggle2}>
            Terms of use
          </p>
          <TermsOfUseModal isShowing={isShowing2} hide={toggle2} />

          <FontAwesomeIcon
            icon={faChevronUp}
            className="chevron-icon"
            onClick={handleScroll}
          />
        </section>
      </footer>
    </>
  );
}
