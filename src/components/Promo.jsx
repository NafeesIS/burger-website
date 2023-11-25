import Image from "next/image";
import React from "react";
import promo1 from "../../public/img/promo-1.png";
import promo2 from "../../public/img/promo-2.png";

const Promo = () => {
  return (
    <section>
      <div className="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        <div className="bg-primaryColorLight flex flex-col p-3 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <Image
            src={promo1}
            alt="promo image"
            className="w-40 mx-auto hover:animate-movingY md:mx-5"
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday Promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              rem.
            </p>
            <a className="text-xs text-secondaryColor" href="#">
              Buy Online
            </a>
          </div>
        </div>
        <div className="bg-primaryColorLight flex flex-col p-3 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
          <Image
            src={promo2}
            alt="promo image"
            className="w-40 mx-auto hover:animate-movingY md:mx-5"
          />
          <div className="space-y-2 pt-5 md:pt-0">
            <p className="text-xs text-secondaryColor">Payday Promo</p>
            <h3 className="card__title">GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
            <p className="paragraph">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat,
              rem.
            </p>
            <a className="text-xs text-secondaryColor" href="#">
              Buy Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promo;
