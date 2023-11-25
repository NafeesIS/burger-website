import About from "@/components/About";
import Category from "@/components/Category";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Promo from "@/components/Promo";
import Review from "@/components/Review";
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
      <Review></Review>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Home;
