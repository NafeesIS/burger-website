import Image from "next/image";
import React from "react";
import burger1 from "../../public/img/burger-1.png";
import snack1 from "../../public/img/snack-1.png";
import beverage1 from "../../public/img/beverage-2.png";
const Category = () => {
  return (
    <section>
      <section>
        <div className="container flex flex-col gap-5 md:flex-row">
          <div className="category__card bg-secondaryColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                src={burger1}
                alt="burger"
                className="-bottom-4 -left-4 absolute w-28"
              />
            </div>
            <div>
              <div classname="mb-2">
                <h4 className="card__title">Food</h4>
                <p className="text-xs">Lorem ipsum dolor sit amet.</p>
              </div>
              <a href="#" className="text-blackColor cursor-pointer">
                Buy Online
              </a>
            </div>
          </div>
          <div className="category__card bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                src={snack1}
                alt="burger"
                className="-bottom-4 -left-4 absolute w-28"
              />
            </div>
            <div>
              <div classname="mb-2">
                <h4 className="card__title">Snack</h4>
                <p className="text-xs">Lorem ipsum dolor sit amet.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer">
                Buy Online
              </a>
            </div>
          </div>
          <div className="category__card bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1">
            <div className="basis-1/3 relative">
              <Image
                src={beverage1}
                alt="burger"
                className="-bottom-4 -left-4 absolute w-28"
              />
            </div>
            <div>
              <div classname="mb-2">
                <h4 className="card__title">beverage</h4>
                <p className="text-xs">Lorem ipsum dolor sit amet.</p>
              </div>
              <a href="#" className="text-secondaryColor cursor-pointer">
                Buy Online
              </a>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Category;
