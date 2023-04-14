import { updateItem } from "@/app/features/InvoiceBilling/shippingSlice";
import { faPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Shipping = ({ isHiddenShipping, handleHideShipping }: any) => {
  const dispatch = useDispatch();
  const shippingItems = useSelector((state: any) => state.shipping.shipping);

  const handleShippingChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };
  useEffect(() => {
    localStorage.setItem("shippingLabel", shippingItems.shippingLabel);
    localStorage.setItem("shippingValue", shippingItems.shippingValue);
  });
  return (
    <>
      <div
        className={`shipping-div ${isHiddenShipping ? "hidden" : "visible"}`}
      >
        <div className="d-flex">
          <div className="row  justify-content-end g-1 me-2">
            <div className="col-lg-6">
              <input
                type="text"
                name="shippingLabel"
                className="form-control m-2 text-end form-titles"
                value={shippingItems.shippingLabel}
                onChange={handleShippingChange}
              />
            </div>
            <div className="col-lg-4">
              <div className="input-group m-2">
                <span
                  className="input-group-text bg-transparent"
                  id="basic-addon1"
                >
                  Rs.
                </span>
                <input
                  type="number"
                  name="shippingValue"
                  className="form-control border-start-0"
                  value={shippingItems.shippingValue}
                  onChange={handleShippingChange}
                />
              </div>
            </div>
            <div className="col-lg-1">
              <FontAwesomeIcon
                icon={faXmark}
                className="p-3 toggle-span"
                onClick={handleHideShipping}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shipping;
