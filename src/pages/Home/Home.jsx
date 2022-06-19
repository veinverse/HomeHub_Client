import React from "react";
import Agent from "./Components/agent/Agent";
import Checkout from "./Components/checkout/Checkout";
import Client from "./Components/client/Client";
import Footer from "./Components/footer/Footer";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";
const Home = () => {
  return (
    <div className="bg-secondary">
      <Navbar />
      <Hero /> 
       <Checkout/>
      <Agent/>
      <Client/>
      <Footer/>
    </div>
  );
};

export default Home;
