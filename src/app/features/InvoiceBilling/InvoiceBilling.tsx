import FooterLeft from "@/app/components/InvoiceBilling/FooterLeft";
import FooterRight from "@/app/components/InvoiceBilling/FooterRight";
import React from "react";
import { useSelector } from "react-redux";

const InvoiceBilling = () => {
  //subtotal :rate*quantity
  // discount : subtotal-discount
  //tax : subtotal-tax
  // shipping:subtotal-shipping
  // total : subtoyal - discount +tax+shipping
  // amount paid = total-amount paid
  // balance due = total - amount due

  return (
    <div className="row">
      <div className="col-lg-6">
        <FooterLeft />
      </div>
      <div className="col-lg-6">
        <FooterRight />
      </div>
    </div>
  );
};

export default InvoiceBilling;
