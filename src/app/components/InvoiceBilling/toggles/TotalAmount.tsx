import {
  addItem,
  updateItem,
} from "@/app/features/InvoiceBilling/totalAmountSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const TotalAmount = () => {
  const dispatch = useDispatch();
  const totalitems = useSelector((state: any) => state.totalAmount.totalAmount);
  const subtotalState = useSelector((state: any) => state.subTotal.subTotal);
  const discountState = useSelector((state: any) => state.discount.discount);
  const shippingState = useSelector((state: any) => state.shipping.shipping);
  const taxState = useSelector((state: any) => state.tax.tax);

  const subtotal = Number(subtotalState.subTotalValue);
  const discount = Number(discountState.discountValue);
  const tax = Number(taxState.taxValue);
  const shipping = Number(shippingState.shippingValue);
  const discountToggle = useSelector((state: any) => state.discount.toggle);
  const taxToggle = useSelector((state: any) => state.tax.toggle);

  let discountPrice = (discount * subtotal) / 100;
  let taxPrice = (tax * subtotal) / 100;
  let discountedPrice =
    subtotal !== 0
      ? Number(subtotal) -
        Number(discountPrice) +
        Number(tax) +
        Number(shipping)
      : 0;

  let total =
    subtotal !== 0
      ? Number(subtotal) -
        Number(discountToggle ? discount : discountPrice) +
        Number(taxToggle ? tax : taxPrice) +
        Number(shipping)
      : 0;
  let balanceDue = Number(total) - Number(totalitems.amoutPaidValue);
  console.log(balanceDue);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    dispatch(updateItem({ name, value }));
  };
  if (discountToggle) {
    console.log("this is nprmal price");
    console.log(total);
  } else {
    console.log("this is discounted price");
    console.log(discountedPrice);
  }
  // Updated useEffect

  useEffect(() => {
    dispatch(
      addItem<any>({
        totalLabel: totalitems.totalLabel,
        totalAmountValue: total,
        amoutPaidLabel: totalitems.amoutPaidLabel,
        amoutPaidValue: totalitems.amoutPaidValue,
        balanceDueLabel: totalitems.balanceDueLabel,
        balanceDueValue: balanceDue,
      })
    );
    localStorage.setItem("totalLabel", totalitems.totalLabel);
    localStorage.setItem("amoutPaidLabel", totalitems.amoutPaidLabel);
    localStorage.setItem("amoutPaidValue", totalitems.amoutPaidValue);
    localStorage.setItem("balanceDueLabel", totalitems.balanceDueLabel);
  }, [
    dispatch,
    total,
    balanceDue,
    totalitems.totalLabel,
    totalitems.amoutPaidLabel,
    totalitems.amoutPaidValue,
    totalitems.balanceDueLabel,
  ]);

  return (
    <>
      <div className="row justify-content-lg-end g-2 mb-1">
        <div className="col-lg-6">
          <input
            type="text"
            name="totalLabel"
            value={totalitems.totalLabel}
            onChange={handleChange}
            className="form-control text-lg-end form-titles"
          />
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text bg-transparent" id="basic-addon1">
              Rs.
            </span>
            <input
              type="text"
              name="totalAmountValue"
              value={total}
              onChange={handleChange}
              className="form-control border-start-0 text-end"
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row justify-content-lg-end g-2 mb-1">
        <div className="col-lg-6">
          <input
            type="text"
            name="amoutPaidLabel"
            value={totalitems.amoutPaidLabel}
            onChange={handleChange}
            className="form-control text-lg-end form-titles"
          />
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text bg-transparent" id="basic-addon1">
              Rs.
            </span>
            <input
              type="number"
              name="amoutPaidValue"
              value={totalitems.amoutPaidValue}
              onChange={handleChange}
              className="form-control border-start-0 text-end"
            />
          </div>
        </div>
        <div className="col-lg-1"></div>
      </div>
      <div className="row justify-content-lg-end g-2 mb-1">
        <div className="col-lg-6">
          <input
            type="text"
            name="balanceDueLabel"
            value={totalitems.balanceDueLabel}
            onChange={handleChange}
            className="form-control text-lg-end form-titles"
          />
        </div>
        <div className="col-lg-4">
          <div className="input-group">
            <span className="input-group-text bg-transparent" id="basic-addon1">
              Rs.
            </span>
            <input
              type="text"
              name="balanceDueValue"
              value={balanceDue}
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

export default TotalAmount;
