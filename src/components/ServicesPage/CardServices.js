import React from 'react'

export default function CardServices({src,title,paragraphe}) {
  return (
    <div>
      <div className="flex">
        <div className=''>
          <img src={src} alt="" />
        </div>

        <div>
          <h1 className="text-base font-medium text-blue-900">{title}</h1>
          <p className="text-gray-500">{paragraphe}</p>
        </div>
      </div>
    </div>
  );
}
