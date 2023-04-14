import { setToggle, updateItem } from "@/app/features/InvoiceBilling/taxSlice";
import { faPlus, faRotate, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Tax = ({ isHiddenTax, handleHidetax }: any) => {
  const dispatch = useDispatch();
  const taxItems = useSelector((state: any) => state.tax.tax);

  const handletaxChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };
  useEffect(() => {
    localStorage.setItem("taxLabel", taxItems.taxLabel);
    localStorage.setItem("taxValue", taxItems.taxValue);
  });
  // Toggle between rupee and percentage

  const toggle = useSelector((state: any) => state.tax.toggle);

  const handleToggle = () => {
    dispatch(setToggle({ toggleValue: !toggle }));
  };
  return (
    <>
      <div className={`tax-div ${isHiddenTax ? "hidden" : "visible"}`}>
        <div className="d-flex">
          <div className="row  justify-content-end g-2 me-2">
            <div className="col-lg-6">
              <input
                type="text"
                name="taxLabel"
                className="form-control m-2 text-end form-titles"
                value={taxItems.taxLabel}
                onChange={handletaxChange}
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
                      name="taxValue"
                      className="form-control pe-5 border-start-0"
                      value={taxItems.taxValue}
                      onChange={handletaxChange}
                    />
                  </>
                ) : (
                  <>
                    <input
                      type="number"
                      name="taxValue"
                      className="form-control pe-5 text-end"
                      value={taxItems.taxValue}
                      onChange={handletaxChange}
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
                onClick={handleHidetax}
              ></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tax;
