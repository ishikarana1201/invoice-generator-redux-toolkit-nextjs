import { updateItem } from "@/app/features/InvoiceDetails/invoiceDetailsSlice";
import {
  addImage,
  removeImage,
} from "@/app/features/InvoiceDetails/logoImageSlice";
import {
  faClose,
  faPlus,
  faXmarkSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const InvoiceDetails = () => {
  const dispatch = useDispatch();
  const items = useSelector(
    (state: any) => state.invoiceDetails.invoiceDetails
  );
  const handleChange = (event: any) => {
    const { name, value } = event.target;
    dispatch(updateItem({ name, value }));
  };

  const handleImageChange = async (event: any) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      dispatch(addImage<any>(base64String));
      localStorage.setItem("filePath", base64String);
    };
    reader.readAsDataURL(file);
  };

  const imagePath = useSelector((state: any) => state.logoImage.imagePath);
  const fileInputRef: any = useRef(null);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handleRemoveImage = () => {
    dispatch(removeImage());
    localStorage.setItem("filePath", "");
  };
  useEffect(() => {
    localStorage.setItem("invoiceUser", items.invoiceUser),
      localStorage.setItem("billTolabel", items.billTolabel),
      localStorage.setItem("billTo", items.billTo),
      localStorage.setItem("shipTolabel", items.shipTolabel),
      localStorage.setItem("shipTo", items.shipTo),
      localStorage.setItem("invoiceTitle", items.invoiceTitle),
      localStorage.setItem("serialNumber", items.serialNumber),
      localStorage.setItem("dateLabel", items.dateLabel),
      localStorage.setItem("dateValue", items.dateValue),
      localStorage.setItem("termsLabel", items.termsLabel),
      localStorage.setItem("termsValue", items.termsValue),
      localStorage.setItem("dueDateLabel", items.dueDateLabel),
      localStorage.setItem("dueDateValue", items.dueDateValue),
      localStorage.setItem("ponumberLabel", items.ponumberLabel),
      localStorage.setItem("ponumberValue", items.ponumberValue);
  }, [items]);
  useEffect(() => {
    localStorage.setItem("filePath", imagePath);
  }, [imagePath]);

  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="image-container mb-3">
          {imagePath ? (
            <>
              <img
                src={imagePath}
                key={imagePath}
                alt="image"
                className="image-tag-container"
                onClick={handleImageClick}
              />
              <FontAwesomeIcon
                icon={faXmarkSquare}
                onClick={handleRemoveImage}
                className="fa-sharp fa-solid fa-rectangle-xmark cancel-img-icon"
              ></FontAwesomeIcon>
              <input
                type="file"
                name="logoImage"
                className="form-control"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/png, image/gif, image/jpeg"
              />
            </>
          ) : (
            <div className="empty-image-div" onClick={handleImageClick}>
              <span className="logo-text">
                <FontAwesomeIcon
                  icon={faPlus}
                  className="fa-solid fa-plus logo-text me-2"
                ></FontAwesomeIcon>
                Add Your Logo
              </span>
              <input
                type="file"
                name="logoImage"
                className="form-control"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleImageChange}
                accept="image/png, image/gif, image/jpeg"
              />
            </div>
          )}
        </div>

        <div className="row">
          <div className="col-lg-7">
            <div className="form-group mb-2">
              <textarea
                className="form-control rounded-1"
                name="invoiceUser"
                placeholder="Who is this invoice from?(required)"
                required
                value={items.invoiceUser}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6">
            <div className="form-group mb-1">
              <input
                type="text"
                name="billTolabel"
                value={items.billTolabel}
                onChange={handleChange}
                className="form-control form-titles"
              />
            </div>
            <textarea
              className="form-control rounded-1"
              name="billTo"
              placeholder="Who is this invoice to?(required)"
              required
              value={items.billTo}
              onChange={handleChange}
            />
          </div>
          <div className="col-lg-6">
            <div className="form-group mb-1">
              <input
                type="text"
                name="shipTolabel"
                value={items.shipTolabel}
                onChange={handleChange}
                className="form-control form-titles"
              />
            </div>
            <textarea
              className="form-control rounded-1"
              name="shipTo"
              placeholder="(Optional)"
              value={items.shipTo}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="col-lg-6 mb-4">
        <div className="form-group">
          <input
            type="text"
            className="form-control text-lg-end invoice-title mb-2"
            name="invoiceTitle"
            value={items.invoiceTitle}
            onChange={handleChange}
          />
        </div>
        <div className="row justify-content-lg-end">
          <div className="col-lg-5">
            <div className="form-group">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  #
                </span>
                <input
                  type="text"
                  className="form-control text-end"
                  name="serialNumber"
                  value={items.serialNumber}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dates-container">
          <div className="row justify-content-end g-2 mb-1">
            <div className="col-lg-6">
              <input
                type="text"
                name="dateLabel"
                className="form-control text-end form-titles"
                value={items.dateLabel}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4">
              <input
                type="date"
                name="dateValue"
                className="form-control text-end rounded-1"
                value={items.dateValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row justify-content-end g-2 mb-1">
            <div className="col-lg-6">
              <input
                type="text"
                name="termsLabel"
                className="form-control text-end form-titles"
                value={items.termsLabel}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                name="termsValue"
                className="form-control text-end rounded-1"
                value={items.termsValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row justify-content-end g-2 mb-1">
            <div className="col-lg-6">
              <input
                type="text"
                name="dueDateLabel"
                className="form-control text-end form-titles"
                value={items.dueDateLabel}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4">
              <input
                type="date"
                name="dueDateValue"
                className="form-control text-end rounded-1"
                value={items.dueDateValue}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="row justify-content-end g-2 mb-1">
            <div className="col-lg-6">
              <input
                type="text"
                name="ponumberLabel"
                className="form-control text-end form-titles"
                value={items.ponumberLabel}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-4">
              <input
                type="text"
                name="ponumberValue"
                className="form-control text-end rounded-1"
                value={items.ponumberValue}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDetails;
