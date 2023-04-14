import React from "react";
import TotalAmount from "./toggles/TotalAmount";
import SubTotal from "./toggles/Subtotal";
import DiscountTaxShipping from "./DiscountTaxShipping";

const FooterRight = () => {
  return (
    <>
      <SubTotal />
      <DiscountTaxShipping />
      <TotalAmount />
    </>
  );
};

export default FooterRight;
