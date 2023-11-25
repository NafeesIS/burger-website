import React from "react";
import homeImg from "../../public/img/home-image.png";
import Image from "next/image";
import faUtensils from "../../public/utensils-solid.svg";
import faDroplet from "../../public/droplet-solid.svg";
import faEnvira from "../../public/envira.svg";
const Hero = () => {
  return (
    <section id="home">
      <div className="container flex flex-col items-center gap-10 md:flex-row">
        <div className="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <Image src={homeImg} alt="burger" className="w-60 md:w-full" />
        </div>
        <div className="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 className="home__title">HAPPY TUMMY WITH TASTY BURGER</h1>
          <div class="separator mx-auto md:mx-0"></div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum,libero magni? Fugiat perspiciatis eius, sequi aliquid
            ullam dolorem temporibus voluptate corrupti fugit saepe sunt unde
            culpa? Tenetur quos quod laudantium.
          </p>

          <div className="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div className="flex flex-col items-center justify-center">
              <Image src={faUtensils} alt="utensils" className="w-10 h-10" />
              <br />
              <p>Delicious</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src={faDroplet} alt="droplet" className="w-10 h-10" />
              <br />
              <p> Freash</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <Image src={faEnvira} alt="envira" className="w-10 h-10" />
              <br />
              <p>Organic</p>
            </div>
          </div>
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
