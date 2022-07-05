import React from 'react'
import {AiOutlineCopyrightCircle} from "react-icons/ai"

export default function Footer() {
  return (
    <div className=" flex items-center justify-center text-accent-lightes ">
      <p className="text-center font-medium  text-gray-300">
        Copyright
      </p>
      <AiOutlineCopyrightCircle />
      <p className="text-center font-medium  text-gray-300">
        2022 ALL reserved
      </p>
    </div>
  );
}
