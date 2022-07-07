import React from "react";
import CardPortfolio from "./CardPortfolio";
import NavPortfolio from "./NavPortfolio";

const PortfolioRight = ({ src, title }) => {
  return (
    <div>
      <div className="py-8 ">
        <h1 className="font-bold text-7xl text-blue-900">Mon Portofolio</h1>
      </div>
      {/* menu portfolio */}
      <NavPortfolio />
      {/* imgprojects */}
      <div className="flex w-max-md py-4 space-x-8 m-16 gap">
        <CardPortfolio  src="./projet1.PNG" title="project1" />
        <CardPortfolio src="./projet2.PNG" title="project2" />
      </div>
     
    </div>
  );
};

export default PortfolioRight;
