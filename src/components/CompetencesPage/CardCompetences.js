import React from 'react';
import BarsCompetences from './BarsCompetences';




export default function CardCompetences() {
    const progress = [
      {
        percent: "70%",
        titre: "HTML5",
        bg: "bg-gradient-to-r from-green-500 to-purple-500",
        id: 1,
      },
      {
        percent: "60%",
        titre: "CSS",
        bg: "bg-gradient-to-r from-red-500 to-pink-500",
        id: 2,
      },
      {
        percent: "75%",
        titre: "JavaScript",
        bg: "bg-gradient-to-r from-blue-700 to-pink-500",
        id: 3,
      },
      {
        percent: "100%",
        titre: "WordPress",
        bg: "bg-gradient-to-r from-green-400 to-yellow-400",
        id: 4,
      },
      {
        percent: "90%",
        titre: "React",
        bg: "bg-gradient-to-r from-green-400 to-purple-500",
        id: 5,
      },
      {
        percent: "100%",
        titre: "PHP/Laravel",
        bg: "bg-gradient-to-r from-pink-500 to-yellow-300",
        id: 6,
      },
    ];
    return (
      <div className="md:px-24 md:py-20 py-30">
        <span className="text-gray-500 text-lg font-medium leading-none">
          Ce que je fais bien
          <h1 className="text-5xl text-blue-900 font-black bg-">
            Mes Compétences
          </h1>
        </span>
        <div className="pb-16">
          <p className="pt-10 text-accent-dark font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ab
            aspernatur eligendi quisquam praesentium magni maxime modi, asperiores
            officiis, alias, recusandae a. Corporis animi, tempora assumenda
            magnam doloribus.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-10">
          {progress.map((bar) => (
            <BarsCompetences
              percent={bar.percent}
              titre={bar.titre}
              bg= {bar.bg}
            />
          ))}
        </div>
      </div>
    );
  }
  