import About from "@/components/About";
import Category from "@/components/Category";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import React from "react";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Category></Category>
      <Promo></Promo>
      <About></About>
      <Menu></Menu>
    </div>
  );
};

export default Home;
