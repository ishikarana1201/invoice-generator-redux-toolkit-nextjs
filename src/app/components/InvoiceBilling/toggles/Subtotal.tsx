import {
  addItem,
  updateItem,
} from "@/app/features/InvoiceBilling/subTotalSlice";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";

const SubTotal = () => {
  const dispatch = useDispatch();
  const subtotalItems = useSelector((state: any) => state.subTotal.subTotal);
  // Get amount value for amount count
  const inputstate = useSelector((state: any) => state.input);
  const subtotal = inputstate.reduce((total: any, inputField: any) => {
    return total + Number(inputField.amount);
  }, 0);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };

  useEffect(() => {
    dispatch(
      addItem<any>({
        subTotalValue: subtotal,
        subTotalLabel: subtotalItems.subTotalLabel,
      })
    );
    localStorage.setItem("subTotalLabel", subtotalItems.subTotalLabel);
  }, [dispatch, subtotal, subtotalItems.subTotalLabel]);

  return (
    <>
      <div className="row justify-content-end g-2 mb-1">
        <div className="col-lg-6">
          <input
            type="text"
            name="subTotalLabel"
            value={subtotalItems.subTotalLabel}
            onChange={handleChange}
            className="form-control text-end form-titles"
          />
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text bg-transparent" id="basic-addon1">
              Rs.
            </span>
            <input
              type="number"
              name="subTotalValue"
              value={subtotal}
              onChange={handleChange}
              className="form-control border-start-0 text-end"
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
    </>
  );
};

export default SubTotal;
