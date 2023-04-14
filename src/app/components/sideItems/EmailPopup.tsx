import { faCancel, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function EmailPopup({ onClose }: any) {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // handle form submission here
    onClose();
  };
  const handleClose = () => {
    onClose();
  };

  return (
    <div className="email-popup-overlay">
      <div className="email-popup">
        <div className="cancel-btn-div">
          <FontAwesomeIcon
            icon={faXmark}
            onClick={handleClose}
          ></FontAwesomeIcon>
        </div>
        <form onSubmit={handleSubmit} className="email-popup-form mt-3">
          <label htmlFor="email">Enter Email Address:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit" className="btn btn-success">
            Send Invoice
          </button>
        </form>
      </div>
    </div>
  );
}

export default EmailPopup;
