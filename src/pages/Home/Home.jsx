import React from "react";
import Agent from "./Components/agent/Agent";
import Checkout from "./Components/checkout/Checkout";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero /> 
       <Checkout/>
      <Agent/>
    </div>
  );
};

export default Home;
