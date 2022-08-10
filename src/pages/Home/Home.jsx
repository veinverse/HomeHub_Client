import React from "react";
import Agent from "./Components/agent/Agent";
import Checkout from "./Components/checkout/Checkout";
import Client from "./Components/client/Client";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import FilterBar from "./Components/FilterBar/filterbar";
import BFRCards from "./Components/BFRCards/bfrcards";
import About from "./Components/About/about";

const Home = () => {
  const locations = [
    { id: 1, place: "East Legon Hills" },
    { id: 2, place: "Cantonments" },
    { id: 3, place: "Aburi" },
    { id: 4, place: "Budumburam" },
  ];
  const properties = [
    { id: 1, pty: "Industrial Home" },
    { id: 2, pty: "Villa" },
    { id: 3, pty: "Bungalow" },
    { id: 4, pty: "Townhouse" },
  ];

  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero />
      <FilterBar locations={locations} properties={properties} />
      <BFRCards />
      <About />
      <Checkout />
      <Agent />
      <Client />
      <Footer />
    </div>
  );
};

export default Home;
