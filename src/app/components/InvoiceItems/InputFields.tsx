import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addInputField,
  removeInputField,
  updateInputField,
} from "../../features/InvoiceItems/inputSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import Titles from "./Titles";
function InputFields() {
  const inputFields = useSelector((state: any) => state.input);
  const dispatch = useDispatch();

  const addInputFieldHandler = () => {
    dispatch(addInputField());
  };

  const removeInputFieldHandler = (index: number) => {
    dispatch(removeInputField(index));
  };

  const handleChange = (index: any, evnt: any) => {
    const { name, value } = evnt.target;
    dispatch(updateInputField({ index, name, value }));
  };
  return (
    <>
      <tbody>
        {inputFields.map((data: any, index: any) => {
          const { itemname, rate, quantity } = data;
          let amount: number = Number(rate) * Number(quantity);
          return (
            <tr>
              <td>
                <input
                  type="text"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={itemname}
                  name="itemname"
                  className="form-control rounded-1"
                  placeholder="Description of service or product..."
                />
              </td>
              <td>
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={quantity}
                  name="quantity"
                  className="form-control rounded-1 text-end"
                  placeholder="Quantity"
                />
              </td>
              <td>
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent"
                    id="basic-addon1"
                  >
                    Rs.
                  </span>
                  <input
                    type="number"
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={rate}
                    name="rate"
                    className="form-control border-start-0 text-end"
                  />
                </div>
              </td>
              <td>
                <div className="input-group">
                  <span
                    className="input-group-text bg-transparent"
                    id="basic-addon1"
                  >
                    Rs.
                  </span>
                  <input
                    type="number"
                    onChange={(evnt) => handleChange(index, evnt)}
                    value={amount}
                    name="amount"
                    className="form-control border-start-0 text-end"
                  />
                </div>
              </td>
              <td className="align-middle">
                <div>
                  {inputFields.length !== 1 ? (
                    <FontAwesomeIcon
                      icon={faSquareMinus}
                      className="fa-solid fa-square-minus"
                      onClick={() => removeInputFieldHandler(index)}
                    ></FontAwesomeIcon>
                  ) : (
                    ""
                  )}
                </div>
              </td>
            </tr>
          );
        })}
        <tr>
          <button
            onClick={addInputFieldHandler}
            className="btn rounded-1 line-item-button"
          >
            <FontAwesomeIcon icon={faPlus} className="fa-solid fa-plus me-2" />
            Line Item
          </button>
        </tr>
      </tbody>
    </>
  );
}
export default InputFields;
