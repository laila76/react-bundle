import React from 'react'

export default function BarsCompetences({titre, percent, bg}) {
  return (
    <div>
      <div className=" mb-1 items-center ">
        <span className="text-xs font-medium text-blue-400 pr-40">{titre}</span>
        <span className="text-xs font-medium text-blue-400 ">
          {`${percent}`}
        </span>
      </div>
      <div className="w-full bg-white h-1 ">
        <div className={`${bg} h-1`} style={{ width: percent }}></div>
      </div>
    </div>
  );
}