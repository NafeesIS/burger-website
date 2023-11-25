"use client";

import React, { useState } from "react";
import Image from "next/image";
import burger1 from "../../public/img/burger-1.png";
import burger2 from "../../public/img/burger-2.png";
import burger3 from "../../public/img/burger-3.png";
import burger4 from "../../public/img/burger-4.png";
import burger5 from "../../public/img/burger-5.png";
import snack1 from "../../public/img/snack-1.png";
import snack2 from "../../public/img/snack-2.png";
import snack3 from "../../public/img/snack-3.png";
import snack4 from "../../public/img/snack-4.png";
import snack5 from "../../public/img/snack-5.png";
import beverage1 from "../../public/img/beverage-1.png";
import beverage2 from "../../public/img/beverage-2.png";
import beverage3 from "../../public/img/beverage-3.png";
import beverage4 from "../../public/img/beverage-4.png";
import beverage5 from "../../public/img/beverage-5.png";

const Menu = () => {
  const [activeTab, setActiveTab] = useState("all");

  const items = [
    {
      type: "food",
      src: burger1,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "food",
      src: burger2,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "food",
      src: burger3,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "food",
      src: burger4,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "food",
      src: burger5,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "snack",
      src: snack1,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "snack",
      src: snack2,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "snack",
      src: snack3,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "snack",
      src: snack4,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "snack",
      src: snack5,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "beverage",
      src: beverage1,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "beverage",
      src: beverage2,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "beverage",
      src: beverage3,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "beverage",
      src: beverage4,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
    {
      type: "beverage",
      src: beverage5,
      title: "Regular BEEF Burger",
      price: "$42.00",
    },
  ];

  const filteredItems =
    activeTab === "all"
      ? items
      : items.filter((item) => item.type === activeTab);

  return (
    <section>
      <div className="container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">Our Best Menu</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam
            exercitationem quibusdam maiores soluta magni, praesentium odit
            voluptate animi voluptatem nemo?
          </p>
          <ul className="flex flex-wrap justify-center gap-2 py-10">
            <li
              className={`btn ${
                activeTab === "all"
                  ? "bg-secondaryColor"
                  : "bg-primaryColorLight dark:bg-darkColorLight"
              } ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              All
            </li>
            <li
              className={`btn ${
                activeTab === "food"
                  ? "bg-secondaryColor"
                  : "bg-primaryColorLight dark:bg-darkColorLight"
              } ${activeTab === "food" ? "active" : ""}`}
              onClick={() => setActiveTab("food")}
            >
              Food
            </li>
            <li
              className={`btn ${
                activeTab === "snack"
                  ? "bg-secondaryColor"
                  : "bg-primaryColorLight dark:bg-darkColorLight"
              } ${activeTab === "snack" ? "active" : ""}`}
              onClick={() => setActiveTab("snack")}
            >
              Snack
            </li>
            <li
              className={`btn ${
                activeTab === "beverage"
                  ? "bg-secondaryColor"
                  : "bg-primaryColorLight dark:bg-darkColorLight"
              } ${activeTab === "beverage" ? "active" : ""}`}
              onClick={() => setActiveTab("beverage")}
            >
              Beverage
            </li>
          </ul>
        </div>
        <div>
          <ul className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4 lg:12">
            {filteredItems.map((item, index) => (
              <li key={index} className={`items_wrap ${item.type}`}>
                <div className="h-56 grid place-items-center bg-primaryColorLight dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-40">
                  <Image
                    className="w-40 h-40 lg:h-auto hover:scale-110 ease-linear duration-200 md:w-48 lg:w-24"
                    src={item.src}
                    alt="foodImg"
                  />
                </div>
                <div className="pt-5">
                  <div className="mb-2">
                    <h4 className="card__title">{item.title}</h4>
                    <p className="paragraph">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Officia, doloremque.
                    </p>
                  </div>
                  <p className="text-secondaryColor">{item.price}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Menu;
