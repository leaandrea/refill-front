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
                <h1>Legal Notice</h1>
                <p>
                  This Internet presence is operated by Refill. The website is
                  intended to inform you about our company as well as our
                  products and activities. This legal notice regulates the use
                  of our websites. In specific cases, compliance with further
                  regulations might be mandatory, for instance, when accessing
                  websites which are only available to registered users. In such
                  cases, you will find additional notes at the appropriate
                  points. 1. Use of our websites You are authorised to view,
                  store and download the content of our websites for private or
                  journalistic purposes. Any reproduction, distribution and/or
                  publication of the content for other purposes is subject to
                  our prior written approval. Please ensure that you have
                  adequate virus protection prior to downloading files and
                  information. 4. Liability for third-party content Our websites
                  may contain links to websites operated by third parties
                  (“Third-Party Websites”). Moreover, chats may be installed on
                  our websites in which third parties express their opinion on
                  various topics (“Third-Party Postings”). We bear no
                  responsibility for the content of the Third-Party Websites and
                  Third-Party Postings and expressly distance ourselves from
                  such content. If we become aware that any Third-Party Websites
                  or Third-Party Postings infringe any statutory provisions or
                  third-party rights, we will remove the link or delete the
                  respective posting made in the chat insofar as this is
                  possible in legal and technical terms. In this respect, we
                  would appreciate any relevant information provided by you.
                  Uploading illegal material or material infringing any
                  third-party rights in chats installed on our websites is
                  prohibited. This applies in particular to defamatory,
                  disparaging, offensive or pornographic material.
                </p>
              </div>
            </div>
          </div>
        </React.Fragment>,
        document.body
      )
    : null;

export default LegalNoticeModal;
