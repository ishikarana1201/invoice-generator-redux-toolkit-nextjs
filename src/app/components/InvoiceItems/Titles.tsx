import { setItemTitles } from "@/app/features/InvoiceItems/titleSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Titles = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: any) => state.itemTitles.itemTitles);
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(setItemTitles({ name, value }));
  };
  useEffect(() => {
    localStorage.setItem("item", items.item);
    localStorage.setItem("quantity", items.quantity);
    localStorage.setItem("rate", items.rate);
    localStorage.setItem("amount", items.amount);
  }, [items]);
  return (
    <>
      <thead className="table-dark">
        <tr>
          <td className="p-0 align-middle first-td">
            <input
              type="text"
              name="item"
              className="form-control bg-transparent text-light border-0"
              value={items.item}
              onChange={handleChange}
            />
          </td>
          <td width={120} className="p-0 align-middle">
            <input
              type="text"
              name="rate"
              className="form-control bg-transparent text-light border-0"
              value={items.rate}
              onChange={handleChange}
            />
          </td>
          <td width={120} className="p-0 align-middle">
            <input
              type="text"
              className="form-control bg-transparent text-light border-0"
              name="quantity"
              value={items.quantity}
              onChange={handleChange}
            />
          </td>
          <td width={120} className="p-0 align-middle ">
            <input
              type="text"
              name="amount"
              className="form-control bg-transparent text-light border-0"
              value={items.amount}
              onChange={handleChange}
            />
          </td>
          <td className="last-td"></td>
        </tr>
      </thead>
    </>
  );
};

export default Titles;
