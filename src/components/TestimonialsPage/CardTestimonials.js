import React from 'react'

export default function CardTestimonials ({title,paragraphe,src,description}) {
  return (
    <div className=''>
      <div className=''>
        <h3 className='text-sm text-blue-900 py-3'>{title}</h3>
        <p className='text-base text-gray-500'>{paragraphe}</p>
      </div>
      <div className='py-2'>
        <img src={src} alt="" />
        <p className='text-gray-600'>{description}</p>
      </div>
    </div>
  );
}
