import React from "react";
import CardItem from "./CardItem";
import {
  GrGooglePlus,
  GrPinterest,
  GrFacebookOption,
  GrTwitter,
} from "react-icons/gr";


export default function CardInformation() {
  return (
    <div className="max-w-md ">
      {/* img card */}
      <div>
        <img src="imgprofil.webp" alt="justin bieber" />
      </div>
      <div className=" bg-blue-900 p-8  ">
        {/* title card */}
        <div>
          <h2 className="font-bold  text-2xl  text-white pb-4">
            GENERAL INFORMATION
          </h2>
        </div>
        <div className="">
          <CardItem src="name.webp" title1="Name : " title="Justin Bieber" />
          <CardItem src="imgé.webp" title1="Location :" title="LONDON UK" />
          <CardItem
            src="lettre.webp"
            title1="contactme@templatename.com"
            title=""
          />
          <CardItem src="tel.webp" title1="+76 6524 567862 763" title="" />
          <CardItem src="ordi.webp" title1="ww.myteamplatename.com" title="" />
        </div>
        <div className="flex text-white space-x-4 pt-5 justify-center ">
          <GrGooglePlus />
          <GrPinterest />
          <GrFacebookOption />
          <GrTwitter />
        </div>
      </div>
    </div>
  );
}
