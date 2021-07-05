import React from "react";
import "./MainHeader.css";
import bg1 from "../../../images/bg3.jpg";
const MainHeader = () => {
  return (
    <>
      <div
        className="md:pl-0 md:flex items-center justify-center head-bg "
        id="home"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "80vh",
        }}
      >
        <div
          class="flex items-center w-full h-full"
          style={{ backgroundColor: "rgba(0,0,0,0.2)" }}
        >
          <div className="md:container md:mx-auto">
            <div className="md:text-start sm:text-left">
              <h1 className="text-8xl md:leading-4 md:font-extrabold mx-6  md:py-5 ">
                Techy Fun
              </h1>
              <h4 className="py-5 text-4xl font-semibold text-gray-50 mx-6 mt-5 text-justify text-opacity-100">
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
    </>
  );
};

export default MainHeader;
