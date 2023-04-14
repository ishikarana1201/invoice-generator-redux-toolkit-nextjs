import React, { useEffect } from "react";

const Ad = () => {
  useEffect(() => {
    ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: "block", background: "gray" }}
      data-ad-client="ca-pub-9672457203954390"
      data-ad-slot="8908651377"
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Ad;
