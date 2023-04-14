import {
  setToggle,
  updateItem,
} from "@/app/features/InvoiceBilling/discountSlice";
import { faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Discount = ({ handleHideDiscount, isHiddenDiscount }: any) => {
  const dispatch = useDispatch();
  const discountItems = useSelector((state: any) => state.discount.discount);

  const handlediscountChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };
  useEffect(() => {
    localStorage.setItem("discountLabel", discountItems.discountLabel);
    localStorage.setItem("discountValue", discountItems.discountValue);
  });

  // Toggle between rupee and percentage

  const toggle = useSelector((state: any) => state.discount.toggle);

  const handleToggle = () => {
    dispatch(setToggle({ toggleValue: !toggle }));
  };
  return (
    <>
      <div
        className={`discount-div ${isHiddenDiscount ? "hidden" : "visible"}`}
      >
        <div className="d-flex">
          <div className="row justify-content-end g-2 mb-1 me-2">
            <div className="col-lg-6">
              <input
                type="text"
                name="discountLabel"
                className="form-control m-2 text-end form-titles"
                value={discountItems.discountLabel}
                onChange={handlediscountChange}
              />
            </div>
            <div className="col-lg-4">
              <div className="input-group discount m-2">
                {toggle ? (
                  <>
                    <span
                      className="input-group-text bg-transparent"
                      id="basic-addon1"
                    >
                      Rs.
                    </span>
                    <input
                      type="number"
                      name="discountValue"
                      className="form-control pe-5 border-start-0"
                      value={discountItems.discountValue}
                      onChange={handlediscountChange}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      name="discountValue"
                      className="form-control pe-5 text-end"
                      value={discountItems.discountValue}
                      onChange={handlediscountChange}
                    />
                    <span className="percentage-span">%</span>
                  </>
                )}

                {/* New added */}
                <div className="change">
                  <FontAwesomeIcon
                    icon={faRotate}
                    className="exchange-button"
                    onClick={handleToggle}
                  ></FontAwesomeIcon>
                </div>
              </div>
            </div>
            <div className="col-lg-1">
              <FontAwesomeIcon
                icon={faXmark}
                className="p-3 toggle-span"
                onClick={handleHideDiscount}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Discount;
