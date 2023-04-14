import React from "react";
import InvoiceItems from "../features/InvoiceItems/InvoiceItems";
import InvoiceDetail from "../features/InvoiceDetails/InvoiceDetail";
import InvoiceBilling from "../features/InvoiceBilling/InvoiceBilling";
import SideItems from "./sideItems/SideItems";
import { useSelector } from "react-redux";
import AdHorizontal from "./googleAds/AdHorizontal";
import Ad from "./googleAds/Ad";
import Script from "next/script";

const Main = () => {
  return (
    <>
      <Script
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9672457203954390"
        onLoad={() => {
          console.log("Script has loaded");
        }}
      />

      {/* New Added */}
      <div className="d-flex justify-content-center flex-wrap main-div gap-5">
        <div className="card invoice-card">
          <div className="card-body">
            <InvoiceDetail />
            <InvoiceItems />
            <InvoiceBilling />
          </div>
        </div>
        <div className="side-items">
          <SideItems />
        </div>
      </div>
      <div className="ad-horizontal">
        <Ad />
        <AdHorizontal />
      </div>
    </>
  );
};

export default Main;
