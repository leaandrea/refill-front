import React from "react";
import ReactDOM from "react-dom";

const LegalNoticeModal = ({ isShowing, hide }) =>
  isShowing
    ? ReactDOM.createPortal(
        <React.Fragment>
          <div className="modal-overlay" />
          <div
            className="modal-wrapper"
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
            onClick={hide}
          >
            <div className="legal-modal">
              <div className="legal-modal-header">
                <button
                  type="button"
                  className="modal-close-button"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={hide}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="legal-modal-content">
                <h1>Legal Notice</h1>
                <p>
                  This web application is operated by Refill.
                  <br />
                  Refill is a student project developed by Camille Jacques, Léa
                  Paumier and Cécile Pham.
                  <br />
                  The website is intended to inform you about our service and
                  activites.
                  <br />
                  This legal notice regulates the use of our website.
                  <br />
                  By accessing Refill's website, you accept without limitation
                  or qualification Refill's terms of use.
                  <br />
                  In specific cases, compliance with further regulations might
                  be mandatory, for instance, when accessing routes which are
                  only available to registered users. In such cases, you will
                  find additional notes at the appropriate points. <br />
                  You are authorised to view, store and download the content of
                  our websites for private or journalistic purposes. Any
                  reproduction, distribution and/or publication of the content
                  for other purposes is subject to our prior written approval.
                  <br />
                  All content on the website, unless specified other wise, is
                  the property of Refill.
                  <br />
                  The Refill website may contain links to websites operated by
                  third parties.
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default LegalNoticeModal;
