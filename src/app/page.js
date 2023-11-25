import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
    </div>
  );
};

export default Home;
