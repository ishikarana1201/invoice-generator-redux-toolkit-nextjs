import React, { useEffect } from "react";

const AdHorizontal = () => {
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{
        display: "inline-block !important",
        width: "728",
        height: "90",
      }}
      data-ad-client="ca-pub-9672457203954390"
      data-ad-slot="7114285609"
    ></ins>
  );
};

export default AdHorizontal;
