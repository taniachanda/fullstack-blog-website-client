import React from "react";
import "./MostPopular.css";
import { Link } from "react-router-dom";

const MostPopularBlog = ({ blog }) => {
  // console.log(blog)
  return (
    <Link to={`/blogDetails/${blog._id}`}>
      <div className="container mx-auto">
        <div className="py-2 mt-3 mp-text">
          <img
            className="px-3 my-2 sm:grid md:grid-cols-2 xl:grid-cols-4 3xl:flex flex-wrap justify-center"
            layout="responsive"
            height={1080}
            style={{ height: "200px" }}
            width={1920}
            src={blog.icon}
            alt={blog.heading}
          />
          <div
            className="flex justify-between font-semibold text-white-900  text-lg px-3 py-2"
            style={{ color: "#EAE4CC" }}
          >
            <h4 className="text-left">{blog.heading}</h4>
          </div>
          <div className="px-3 py-2 text-left" style={{ color: "#E15546" }}>
            <p className="">Read More...</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default MostPopularBlog;
