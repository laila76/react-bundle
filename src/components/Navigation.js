import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="flex items-center space-x-5">
      <h1 className="text-blue-900 text-2xl font-bold">
        Smith <span className="text-blue-500">.</span>CV
      </h1>
      <div className="  font-light ">
        <ul className="flex text-white">
          <Link className="" to="/">
            <li className="border-solid  bg-blue-900 px-5 py-5">ABOUT</li>
          </Link>
          <Link to="/skills">
            <li className="border-solid   bg-blue-900 px-5 py-5">SKILLS</li>
          </Link>
          <Link to="/services">
            <li className="border-solid  bg-blue-900 px-5 py-5">SERVICES</li>
          </Link>
          <Link to="/portfolio">
            <li className="border-solid  bg-blue-900 px-5 py-5">PORTFOLIO</li>
          </Link>
          <Link to="/testimonials">
            <li className="border-solid  bg-blue-900 px-5 py-5">
              TESTIMONIALS
            </li>
          </Link>
          <Link to="/contact">
            <li className="border-solid  text-center bg-blue-900 px-5 py-5">
              CONTACT
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
