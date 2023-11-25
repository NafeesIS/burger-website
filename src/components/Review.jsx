"use client";

import React, { useEffect } from "react";
import Swiper from "swiper";
// import "swiper/css/swiper.min.css";
import "swiper/css";
import review1 from "../../public/img/review-1.jpg";
import review2 from "../../public/img/review-2.jpg";
import review3 from "../../public/img/review-3.jpg";
import review4 from "../../public/img/review-4.jpg";
import review5 from "../../public/img/review-5.jpg";
import Image from "next/image";

const Review = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper", {
      speed: 400,
      spaceBetween: 30,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },

      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      grabCursor: true,
      breakpoints: {
        640: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },

        1024: {
          slidesPerView: 3,
        },
      },
    });
  }, []);

  return (
    <section
      id="review"
      className="bg-primaryColorLight dark:bg-darkColorLight py-20"
    >
      <div className="customer__review container">
        <div className="max-w-md mx-auto text-center mb-2">
          <h2 className="section__title">CUSTOMER REVIEW</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        <div className="swiper py-10">
          <ul className="swiper-wrapper">
            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <Image
                    src={review1}
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">Nafees</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <Image
                    src={review2}
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">Imtiaz</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <Image
                    src={review3}
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">Shawon</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <Image
                    src={review4}
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">Shajnin</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>

            <li className="swiper-slide">
              <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                <p className="paragraph">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique culpa ut amet voluptas asperiores alias sed
                  consequatur.
                </p>
                <div className="flex items-center">
                  <Image
                    src={review5}
                    alt="review image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="ml-2">
                    <p className="font-oswald uppercase">Hridoy</p>
                    <p className="paragraph">Designer</p>
                  </div>
                  <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                </div>
              </div>
            </li>
          </ul>

          <div className="swiper-pagination"></div>
        </div>
      </div>
    </section>
  );
};

export default Review;
