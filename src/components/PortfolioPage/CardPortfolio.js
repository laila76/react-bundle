import React from "react";

export default function CardPortfolio({src,title}) {
  return (
    <div>
      <img src={src} alt="" />
      <p>{title}</p>
    </div>
  );
}
