import React from "react";
import CardTestimonials from "./CardTestimonials";

export default function TestimonialsRight() {
  return (
    <div>
      <div>
        <h2 className="text-base font-medium text-gray-300">
          Ce que les clients disent
        </h2>
        <h1 className="text-bold text-blue-900">Témoignages</h1>
      </div>
      <div>
        <h3></h3>
        <p></p>
      </div>
      <div>
        <img src="" alt="" />
        <p></p>
      </div>
      <CardTestimonials
        title="Rapide et efficace"
        paragraphe="etiam nec odio vestibulum est mattis
      effic iturut magna.Pellentesque sit 
      amet tellus blandit.Etiam nec odio vestibulum est mattis effic iturut
      magna.Pellentesque sit."
        src=""
        description="Dianne smith Customer"
      />
    </div>
  );
}
