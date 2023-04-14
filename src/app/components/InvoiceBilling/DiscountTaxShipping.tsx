import React, { useEffect, useState } from "react";
import Discount from "./toggles/Discount";
import Buttons from "./toggles/Buttons";
import Tax from "./toggles/Tax";
import Shipping from "./toggles/Shipping";

const DiscountTaxShipping = () => {
  // This is dicount logic
  const [isHiddenDiscount, setIsHiddenDiscount] = useState(() => {
    const storedValue = localStorage.getItem("isHiddenDiscount");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  useEffect(() => {
    localStorage.setItem("isHiddenDiscount", JSON.stringify(isHiddenDiscount));
  }, [isHiddenDiscount]);
  const handleApplyDiscount = () => {
    setIsHiddenDiscount(false);
  };
  const handleHideDiscount = () => {
    setIsHiddenDiscount(true);
  };

  //   This is tax logic
  const [isHiddenTax, setIsHiddenTax] = useState(() => {
    const storedValue = localStorage.getItem("isHiddenTax");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  useEffect(() => {
    localStorage.setItem("isHiddenTax", JSON.stringify(isHiddenTax));
  }, [isHiddenTax]);
  const handleApplytax = () => {
    setIsHiddenTax(false);
  };
  const handleHidetax = () => {
    setIsHiddenTax(true);
  };
  //   This is shipping logic
  const [isHiddenShipping, setIsHiddenShipping] = useState(() => {
    const storedValue = localStorage.getItem("isHiddenShipping");
    return storedValue ? JSON.parse(storedValue) : true;
  });
  useEffect(() => {
    localStorage.setItem("isHiddenShipping", JSON.stringify(isHiddenShipping));
  }, [isHiddenShipping]);
  const handleApplyShipping = () => {
    setIsHiddenShipping(false);
  };
  const handleHideShipping = () => {
    setIsHiddenShipping(true);
  };
  return (
    <div>
      <Discount
        isHiddenDiscount={isHiddenDiscount}
        handleHideDiscount={handleHideDiscount}
      />
      <Tax isHiddenTax={isHiddenTax} handleHidetax={handleHidetax} />
      <Shipping
        isHiddenShipping={isHiddenShipping}
        handleHideShipping={handleHideShipping}
      />
      <Buttons
        handleApplyDiscount={handleApplyDiscount}
        isHiddenDiscount={isHiddenDiscount}
        isHiddenTax={isHiddenTax}
        handleApplytax={handleApplytax}
        isHiddenShipping={isHiddenShipping}
        handleApplyShipping={handleApplyShipping}
      />
    </div>
  );
};

export default DiscountTaxShipping;
