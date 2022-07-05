import React from 'react'
import CardServices from './CardServices';

export default function ServicesRight() {
  return (
    <div className=" ">
      <div>
        <h2 className="text-lg text-gray-400">Ce que je vous offre</h2>
        <h1 className="text-7xl font-bold text-blue-900">Mes Services</h1>
      </div>
      <div className="py-10">
        <div className='w-10'>
          <img src="" alt="" />
        </div>

        <h1></h1>
        <p></p>
      </div>
      <div className="flex py-3">
        <CardServices
          src="ser1.webp"
          title="Développement de site web"
          paragraphe=" La creation de site web est indispensable pour ameliorer la visibilite
          de ses activites. le developpement de votre site web est réalisé avec
          soin et répond aux standards web du W3c"
        />
        <CardServices
          src="ser2.webp"
          title="Maintenenance"
          paragraphe="un site internet en bonne santé est un site internet mis a jour.Les forfaits
      de maintenance proposés sont le fruits d'années 'éxperiance et des solutions apportées a mes clients afin de vous
      garantir un site internet performant et fiable"
        />
        <CardServices
          src="ser3.webp"
          title="Référencement(SEO)"
          paragraphe="votre site internet est développé avec pour objectif d'apparaitre dans les premieres pages sur
      les moteurs de recerche"
        />
      </div>
      <div className="py-80 ">
        <button
          type="button"
          className="inline-block px-8 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md
           hover:shadow-lg
           focus:shadow-lg focus:outline-none focus:ring- active:shadow-lg transition duration-150 ease-in-out"
        >
          Contactez-moi
        </button>
      </div>
    </div>
  );
}
