import React from "react";
import twitter from "../../public/twitter.svg";
import phone from "../../public/phone.svg";
import envelope from "../../public/envelope.svg";
import location from "../../public/location.svg";
import facebook from "../../public/facebook.svg";
import instagram from "../../public/square-instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <footer>
      <section className="footer">
        <div className="container">
          <ul className="grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4">
            <li>
              <div className="space-y-3">
                <a href="" className="text-4xl font-oswald uppercase">
                  Bur<span className="text-secondaryColor">ger</span>
                </a>

                <p className="text-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </li>

            <li>
              <div className="flex flex-col gap-3">
                <h3 className="text-lg uppercase font-oswald">SUPPORT</h3>
                <a href="" className="text-xs hover:text-secondaryColor">
                  FAQs
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Privacy Policy
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Term & Condition
                </a>
                <a href="" className="text-xs hover:text-secondaryColor">
                  Contact
                </a>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">phone</h3>

                <p className="flex items-center gap-2 text-xs">
                  <Image className="w-4" src={phone} alt="facebook" />
                  +1 000 000 0000
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">email</h3>

                <p className="flex items-center gap-2 text-xs">
                  <Image className="w-4" src={envelope} alt="facebook" />
                  burger.info@email.com
                </p>
              </div>
            </li>

            <li className="space-y-8">
              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">address</h3>

                <p className="flex items-center gap-2 text-xs">
                  <Image className="w-4" src={location} alt="facebook" />
                  Address goes here
                </p>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg uppercase font-oswald">follow us</h3>

                <div className="space-x-3 flex">
                  <Image
                    className="w-6 hover:-translate-y-1 ease-in duration-200"
                    src={facebook}
                    alt="facebook"
                  />
                  <Image
                    className="w-6 hover:-translate-y-1 ease-in duration-200"
                    src={twitter}
                    alt="twitter"
                  />
                  <Image
                    className="w-6 hover:-translate-y-1 ease-in duration-200"
                    src={instagram}
                    alt="instagram"
                  />
                </div>
              </div>
            </li>
          </ul>

          <div className="flex flex-col items-center border-t border-primaryColorLight dark:border-darkColorLight py-5 md:flex-row md:justify-between">
            <p className="paragraph">Burger Template Kit by Light Code</p>
            <p className="paragraph">Copyright © 2023. All rights reserved.</p>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
