import React from "react";
import "./MainHeader.css";
import bg1 from "../../../images/bg3.jpg";
const MainHeader = () => {
  return (
    <div>
      <div
        className="bg-no-repeat bg-center md:pl-0 md:flex items-center justify-center head-bg"
        id="home"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
          //   zIndex: "10",
          //   opacity: "-1",
        }}
      >
        <div className="md:container md:mx-auto">
          <div className="md:text-start sm:text-left">
            <h1 className="text-8xl md:leading-4 md:font-extrabold mx-6  md:py-5 ">
              Techy Fun
            </h1>
            <h4 className="py-5 text-4xl font-semibold text-indigo-900 mx-6 text-justify">
              Know what's coming. Innovate and <br />
              move at the speed of the market.
            </h4>
            <button className="bg-red-700 hover:bg-white text-white hover:text-red-500 font-bold py-2 px-6 mx-5 ">
              Start Moving
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
