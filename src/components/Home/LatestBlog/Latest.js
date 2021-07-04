import React from "react";
import img1 from "../../../images/lImg1.jpg";
import img2 from "../../../images/Best 53 Computing Wallpaper on HipWallpaper Computing Wallpaper.jpg";
import img3 from "../../../images/lImg3.jpg";
import img4 from "../../../images/lImg4.jpg";
import img5 from "../../../images/lImg5.jpg";
import img6 from "../../../images/lImg6.jpg";
import img7 from "../../../images/lImg7.jpg";
import img8 from "../../../images/lImg8.jpg";
import img9 from "../../../images/lImg9.jpg";
import img10 from "../../../images/lImg10.jpg";
import LatestBlog from "./LatestBlog";

const Latest = () => {
  const latestBlog = [
    {
      id: 1,
      heading:
        "Here’s how to install the Windows 11 preview when it’s available next week",
      writer: "Andrew Zucosky",
      img: img1,
      blog_content:
        "I am a millennial heretic (or a heretical millennial, if you will). I do not own an e-reader of any type, so my room is filled with towers of books and comics.Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "18 hours ago",
    },
    {
      id: 2,
      heading: "Key Criteria for Evaluating Secure Service Access (SSA)",
      writer: "Sam Saw",
      img: img2,
      blog_content:
        "Converging networking and security, secure service access (SSA) represents a significant shift in the way organizations consume network security,Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "18 hours ago",
    },
    {
      id: 3,
      heading:
        "What’s Observability, and 5 Ways to Ensure Observability Success",
      writer: "Chadd Kenny",
      img: img3,
      blog_content:
        "This free 1-hour webinar from GigaOm Research brings together experts in observability, featuring GigaOm analyst David Linthicum and a special guest from Splunk, Patrick Lin, VP Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "19 hours ago",
    },
    {
      id: 4,
      heading: "Understanding Cloud Backup and Best Practices",
      writer: "Enrico Signoretti",
      img: img4,
      blog_content:
        "This free 1-hour webinar from GigaOm Research brings together experts in data storage and cloud computing, featuring GigaOm analyst Enrico Signoretti and Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "8 hours ago",
    },
    {
      id: 5,
      heading: "Changing Outlook for High-Performance Object Storage",
      writer: "Adam Rosenberg",
      img: img5,
      blog_content:
        "High-performance object storage is a data storage architecture designed for handling large amounts of unstructured data. Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery”",
      time: "15 hours ago",
    },
    {
      id: 6,
      heading:
        "The future of mobility: 5 transportation technologies to watch out for",
      writer: " Luke Dormehl",
      img: img6,
      blog_content:
        "The way we move about is changing — and not just because, as the coronavirus pandemic recedes, we’re able to actually move about again. Transportation is changing around the world. Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "18 hours ago",
    },
    {
      id: 7,
      heading:
        "The future of mobility: 5 transportation technologies to watch out for",
      writer: " Luke Dormehl",
      img: img7,
      blog_content:
        "The way we move about is changing — and not just because, as the coronavirus pandemic recedes, we’re able to actually move about again. Transportation is changing around the world, Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "17 hours ago",
    },
    {
      id: 8,
      heading:
        "The future of mobility: 5 transportation technologies to watch out for",
      writer: " Luke Dormehl",
      img: img8,
      blog_content:
        "The way we move about is changing — and not just because, as the coronavirus pandemic recedes, we’re able to actually move about again. Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "10 hours ago",
    },
    {
      id: 9,
      heading:
        "The future of mobility: 5 transportation technologies to watch out for",
      writer: " Luke Dormehl",
      img: img9,
      blog_content:
        "The way we move about is changing — and not just because, as the coronavirus pandemic recedes, we’re able to actually move about again. Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "18 hours ago",
    },
    {
      id: 10,
      heading:
        "The future of mobility: 5 transportation technologies to watch out for",
      writer: " Luke Dormehl",
      img: img10,
      blog_content:
        "The way we move about is changing — and not just because, as the coronavirus pandemic recedes, we’re able to actually move about again. Transportation is changing around the world, Sam Richardson and Milana Vayntrub shine in this unexpectedly wholesome werewolf murder mystery",
      time: "14 hours ago",
    },
  ];
  return (
    <div className="" style={{ background: "#EAE4CC" }}>
      <div className="container p-5 mx-auto " id="blog">
        <div className="text-4xl leading-4 font-extrabold py-6 flex text-left justify-left">
          <h2 className=" pl-6">Latest</h2>
        </div>
        <div className="my-4 sm:grid md:grid-cols-2 xl:grid-cols-1 3xl:flex flex-wrap justify-center">
          {latestBlog.map((lb) => (
            <LatestBlog key={lb.id} lb={lb} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Latest;
