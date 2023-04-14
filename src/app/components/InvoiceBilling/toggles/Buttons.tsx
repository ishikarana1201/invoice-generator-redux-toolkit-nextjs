import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Buttons = ({
  handleApplyDiscount,
  isHiddenDiscount,
  handleApplytax,
  isHiddenTax,
  handleApplyShipping,
  isHiddenShipping,
}: any) => {
  return (
    <div className="d-flex flex-wrap justify-content-end gap-3 mb-2 me-5">
      {/* This is discount button */}
      <span
        onClick={handleApplyDiscount}
        className={`toggle-span text-success ${
          isHiddenDiscount ? "visible" : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faPlus} /> Discount
      </span>
      {/* This is tax button */}
      <span
        onClick={handleApplytax}
        className={`toggle-span text-success ${
          isHiddenTax ? "visible" : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faPlus} /> Tax
      </span>
      {/* This is shipping button */}
      <span
        onClick={handleApplyShipping}
        className={`toggle-span text-success ${
          isHiddenShipping ? "visible" : "hidden"
        }`}
      >
        <FontAwesomeIcon icon={faPlus} /> Shipping
      </span>
    </div>
  );
};

export default Buttons;
