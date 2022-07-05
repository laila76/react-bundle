import React from "react";
import NavPortfolio from "./NavPortfolio";

const PortfolioRight = ({ src, title }) => {
  return (
    <div>
      <div className="py-8 ">
        <h1 className="font-bold text-7xl text-blue-900">Mon Portofolio</h1>
      </div>
      {/* menu portfolio */}
       <NavPortfolio/>
      {/* imgprojects */}
      <div>
        <img src={src} alt="" />
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default PortfolioRight;
