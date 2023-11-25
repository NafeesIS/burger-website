import Image from "next/image";
import React from "react";
import aboutPic from "../../public/img/about.jpg";
import check from "../../public/check-solid.svg";

const About = () => {
  return (
    <section id="about">
      <div className="container flex flex-col md:flex-row gap-10">
        <div className="flex-1">
          <Image className="rounded-lg" src={aboutPic} alt="about pic" />
        </div>
        <div className="flex-1">
          <h2 className="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div className="separator"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <ul className="grid grid-cols-2 py-5 space-y-1">
            <li className="text-xs flex items-center space-x-1">
              <Image src={check} alt="tic" className="w-5 h-5" />
              <p>Best Price</p>
            </li>
            <li className="text-xs flex items-center space-x-1">
              <Image src={check} alt="tic" className="w-5 h-5" />
              <p>Fresh Ingredient</p>
            </li>
            <li className="text-xs flex items-center space-x-1">
              <Image src={check} alt="tic" className="w-5 h-5" />
              <p>Best Service</p>
            </li>
            <li className="text-xs flex items-center space-x-1">
              <Image src={check} alt="tic" className="w-5 h-5" />
              <p>Health Protocol</p>
            </li>
          </ul>
          <a href="#" className="btn btn-primary">
            About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
