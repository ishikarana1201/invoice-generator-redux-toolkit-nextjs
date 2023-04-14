import {
  faArrowDown,
  faEnvelopeOpenText,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import EmailPopup from "./EmailPopup";
import { useSelector } from "react-redux";

const SideItems = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);
  const requiredData = useSelector(
    (state: any) => state.invoiceDetails.invoiceDetails
  );
  const invoiceUserName = requiredData.invoiceUser;
  const billToName = requiredData.billTo;

  const inputFields = useSelector((state: any) => state.input);

  // inputFields,length<1,all the input fields have some values ,invoiceUserName and billto name -conditions
  const isAllPropertiesEmpty = inputFields.every(
    (obj: any) => !obj.itemname && !obj.rate && !obj.quantity && !obj.amount
  );
  useEffect(() => {
    if (invoiceUserName && billToName && !isAllPropertiesEmpty) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [invoiceUserName, billToName, isAllPropertiesEmpty]);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <div className="send-invoice-div">
        <button
          className="btn btn-success send-invoice-button"
          disabled={isDisabled}
        >
          Save Invoice
        </button>
      </div>

      <div className="download-invoice-div ">
        <button
          className="btn btn-primary"
          data-bs-toggle="tooltip"
          data-bs-placement="left"
          title="Email Invoice"
          onClick={handlePopup}
        >
          <FontAwesomeIcon icon={faEnvelopeOpenText}></FontAwesomeIcon>
        </button>
        {/* Show email popup code */}
        {showPopup && <EmailPopup onClose={handleClose} />}
        <button
          className="btn btn-primary m-2"
          data-bs-toggle="tooltip"
          data-bs-placement="right"
          title="Download Invoice"
        >
          <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
        </button>
      </div>
      <div className="currency-div">
        <div className="label-div">
          <label>CURRENCY</label>
        </div>
        <select name="currency" id="currency" className="select-div">
          <option value="AFN" label="AFN">
            AFN
          </option>
          <option value="ALL" label="ALL (Lek)">
            ALL (Lek)
          </option>
          <option value="AMD" label="AMD">
            AMD
          </option>
          <option value="AED" label="AED (د.إ)">
            AED (د.إ)
          </option>
          <option value="ANG" label="ANG (ƒ)">
            ANG (ƒ)
          </option>
          <option value="AOA" label="AOA (Kz)">
            AOA (Kz)
          </option>
          <option value="ARS" label="ARS ($)">
            ARS ($)
          </option>
          <option value="AUD" label="AUD ($)">
            AUD ($)
          </option>
          <option value="AWG" label="AWG (ƒ)">
            AWG (ƒ)
          </option>
          <option value="AZN" label="AZN (ман)">
            AZN (ман)
          </option>
          <option value="BAM" label="BAM (KM)">
            BAM (KM)
          </option>
          <option value="BBD" label="BBD ($)">
            BBD ($)
          </option>
          <option value="BDT" label="BDT (Tk)">
            BDT (Tk)
          </option>
          <option value="BGN" label="BGN (лв)">
            BGN (лв)
          </option>
          <option value="BHD" label="BHD">
            BHD
          </option>
          <option value="BIF" label="BIF">
            BIF
          </option>
        </select>
      </div>
    </>
  );
};

export default SideItems;
