import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-gray-400 relative pt-1 border-b-2 border-blue-700 f-items">
      <div className="container mx-auto">
        <div className="grid grid-cols-6 gap-4">
          <div className="col-start-2 col-span-4  ">
            <div className="w-full text-center">
              <h4 className="md:text-red-900 text-opacity-100 text-3xl font-semibold mt-12 mb-3 ">
                Let’s make this inbox official.
              </h4>
              <p className="md:text-white text-opacity-100 text-xl font-medium">
                Once a new article is published, it will be delivered to your
                email directly.
              </p>
            </div>
            <div className="w-full ">
              <div className="md:p-12">
                <div className="bg-white flex md:items-center rounded-full shadow shadow-xl border-2 border-red-900">
                  <input
                    className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none"
                    id="search"
                    type="text"
                    placeholder="Your email address"
                  />

                  <div className="p-2">
                    <button className="md:text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 font-bold uppercase rounded-full shadow hover:shadow-lg focus:outline-none w-36 h-12 ">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
              <div className=" text-center md:text-green-100 text-opacity-100 text-base font-normal mt-3 mb-3">
                <p>
                  Copyright {new Date().getFullYear()} All Rights Reserved By
                  Tania
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
