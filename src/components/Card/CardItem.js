import React from "react";

export default function CardItem({ src, title, title1 }) {
  return (
    <div className="flex space-x-5 py-2">
      <img src={src} alt="" />
      <p className="text-gray-400">
        {title1}
        <span className="text-white">{title}</span>
      </p>
    </div>
  );
}
