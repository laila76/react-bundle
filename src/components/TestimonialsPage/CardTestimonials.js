import React from 'react'


export default function CardTestimonials ({title,description,src,name}) {
  return (
    <div className='pt-2 m-2 bg-white'>
      <div className=' '>
        <h3 className='text-sm text-blue-900 py-3'>{title}</h3>
        <p className=' text-gray-500 text-sm pt-5'>{description}</p>
      </div>
      <div className=''>
        <img src={src} alt=""  className='rounded-full'/>
        <div className=' font-medium text-sm pt-3'>
        <p className='text-gray-600'>{name}</p>
        <p className=' text-accent-dark'>Customer</p></div>
        
      </div>
    </div>
  );
}
