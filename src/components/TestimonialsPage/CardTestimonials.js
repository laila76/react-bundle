import React from 'react'

export default function CardTestimonials ({title,paragraphe,src,description}) {
  return (
    <div>
      <div>
        <h3>{title}</h3>
        <p>{paragraphe}</p>
      </div>
      <div>
        <img src={src} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
}
