import React from "react";
import Latest from "../LatestBlog/Latest";
import MainHeader from "../MainHeader/MainHeader";
import MostPopular from "./../MostPopular/MostPopular";
import "./Home.css";
import HeaderNavbar from "./../HeaderNavbar/HeaderNavbar";

const Home = () => {
  return (
    <>
      <HeaderNavbar />
      <MainHeader />
      <MostPopular />
      <Latest />
    </>
  );
};

export default Home;
