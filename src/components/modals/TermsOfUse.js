import React from "react";
import ReactDOM from "react-dom";

const TermsOfUseModal = ({ isShowing, hide }) =>
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
          >
            <div className="modal">
              <div className="modal-header">
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
              <div className="modal-content">
                <h1>Terms of use</h1>
                <p>
                  Refill's services are restricted to the geographical area of
                  Paris, France.
                  <br />
                  Only Refill admistrators are authorized to create an account
                  on the website.
                  <br />
                  French legislation on free expression and hate speech applies
                  to the use of Refill's contribution and contact forms.
                  <br />
                  When using Refill's contribution form, please only submit a
                  business if you are the owner or legal representative of said
                  business. The submission of a public municipal fountain, on
                  the other hand, is free for anyone.
                  <br />
                  We reserve the right to validate, delete or edit any
                  contribution in a way that fits Refill's policy.
                  <br />
                  Do not use Refill if you do not agree to the Terms of Use
                  described above. Your use of Refill means you agree to these
                  Terms of Use.
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default TermsOfUseModal;
