import React, { useEffect, useState } from "react";
import MostPopularBlog from "./MostPopularBlog";
import "./MostPopular.css";

const MostPopular = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://serene-everglades-14231.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div style={{ background: "#182335" }}>
      <div className="container p-5 mx-auto " id="blog">
        <div className="text-4xl leading-4 font-extrabold text-green-900 py-8 flex text-left justify-left">
          <h2 className=" pl-3">Most Popular Blog</h2>
        </div>
        <div className="px-5 my-4 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:flex flex-wrap justify-center">
          {blogs.map((blog) => (
            <MostPopularBlog key={blog.id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
