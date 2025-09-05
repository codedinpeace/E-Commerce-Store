import React from "react";
// import heroImg from "/hero_image.png";
import Collection from "../LandingPage_Sections/Collection";
import PopularWomen from "../LandingPage_Sections/PopularWomen";
import Hero from "../LandingPage_Sections/Hero";
import PopularMen from "../LandingPage_Sections/PopularMen";
import PopularInKids from "../LandingPage_Sections/PopularInKids";

const LandingPage = () => {
  return (
    <>
     <Hero />
      <Collection />
      <PopularWomen />
      <PopularMen/>
      <PopularInKids/>
    </>
  );
};

export default LandingPage;
