import React from "react";
import { Link } from "react-router-dom";
 
export default function NavPortfolio() {
  return (
    <ul className="flex space-x-16">
      <li className="font-bold">
        <Link to=""> Tous</Link>
        </li>
      <li className="text-gray-400">
       <Link to=""> React </Link> 
        </li>
      <li className="text-gray-400">
         <Link to="" > Php/Laravel</Link>
        </li>
    </ul>
    
  );
}
