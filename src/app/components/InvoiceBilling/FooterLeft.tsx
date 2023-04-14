import { updateItem } from "@/app/features/InvoiceBilling/invoiceBillingSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const FooterLeft = () => {
  const dispatch = useDispatch();
  const elements = useSelector(
    (state: any) => state.invoiceBilling.invoiceBilling
  );
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };
  useEffect(() => {
    localStorage.setItem("notesLabel", elements.notesLabel);
    localStorage.setItem("notesValue", elements.notesValue);
    localStorage.setItem("termsLabel", elements.termsLabel);
    localStorage.setItem("termsValue", elements.termsValue);
  }, [elements]);
  return (
    <>
      <input
        type="text"
        name="notesLabel"
        className="form-control mb-2 form-titles"
        value={elements.notesLabel}
        onChange={handleChange}
      />
      <textarea
        name="notesValue"
        className="form-control mb-2 rounded-1"
        value={elements.notesValue}
        onChange={handleChange}
        placeholder="Notes - any relevant information not already covered"
      ></textarea>
      <input
        type="text"
        name="termsLabel"
        className="form-control mb-2 form-titles"
        value={elements.termsLabel}
        onChange={handleChange}
      />
      <textarea
        name="termsValue"
        className="form-control mb-2 rounded-1"
        value={elements.termsValue}
        onChange={handleChange}
        placeholder="Terms and conditions - late fees, payment methods, delivery schedule"
      ></textarea>
    </>
  );
};

export default FooterLeft;
