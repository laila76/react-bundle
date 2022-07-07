import React from "react";
import CardTestimonials from "./CardTestimonials";

export default function TestimonialsRight() {
  const testimonials = [
    {
      src: "img/téléchargement (18).webp",
      title: "Rapide et efficace",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 1,
    },
    {
      src: "img/téléchargement (19).webp",
      title: "Fort de proposition",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 2,
    },
    {
      src: "img/téléchargement (20).webp",
      title: "Agréable et proffessionel",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque vero quis. Nihil dicta reprehenderit velit nam doloribus inventore praesentium ipsum distinctio modi quo culpa.",
      name: "Diane Smith",
      id: 3,
    },
  ];
  return (
    <div>
      <div className="px-20 py-10">
        <h2 className="text-base font-medium text-gray-300">
          Ce que les clients disent
        </h2>
        <h1 className="text-bold text-3xl text-blue-900">Témoignages</h1>



        <div className="pt-28 grid grid-cols-3 gap-5">
        {testimonials.map((testimonial) => (
          <CardTestimonials
            src={testimonial.src}
            title={testimonial.title}
            description={testimonial.description}
            name={testimonial.name}
            key={testimonial.id}
          />
        ))}
 
        </div>
      </div>
      

  
    </div>
  );
}
