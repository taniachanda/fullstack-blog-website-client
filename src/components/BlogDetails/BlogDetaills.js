import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./BlogDetails.css";
import { FaFacebook, FaPinterest, FaTwitter } from "react-icons/fa";

const BlogDetaills = () => {
  const { _id } = useParams();
  console.log(_id);
  const [blog, setDetail] = useState([]);
  useEffect(() => {
    fetch("https://serene-everglades-14231.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, []);
  const bl = blog.find((pdq) => pdq?._id === _id);
  console.log(bl?.heading);
  return (
    <div className="blog-D">
      <div className="md:container md:mx-auto md:px-4">
        <div className=" grid grid-cols-1 md:grid-cols-1 justify-items-center inset-x-12 pb-20">
          <div className="  mx-28 mt-10">
            <h3 className="md:text-left text-4xl font-bold md:leading-snug border-b-2 border-indigo-900 pb-2">
              {bl?.heading}.
            </h3>
            {/* <h4 className="">${heading}</h4> */}
            <div className="mx-2 my-2 text-left ">
              <p>Posted 18 hours ago By {bl?.writer}</p>
              <div className="flex m-5">
                <p className="flex mx-2 bg-blue-800 text-white font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md ">
                  <span className="mx-2">Share</span> <FaFacebook />
                </p>
                <p className="flex mx-2  bg-blue-400 text-white font-bold  text-xs px-4 py-2 rounded shadow hover:shadow-md ">
                  <small className="mx-2">Share</small> <FaTwitter />
                </p>
                <p>
                  <FaPinterest color="red" size="1.5rem" />
                </p>
              </div>
            </div>
          </div>

          <div className="py-2 mt-3 mp-text">
            <img
              className="px-3 my-2 justify-self-auto "
              layout="responsive"
              height={580}
              width={800}
              src={bl?.icon}
              alt="Sunset in the mountains"
            />
          </div>

          <div className="md:mx-32 mt-5">
            <article className="leading-relaxed text-justify font-normal px-6 ">
              {bl?.content}
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetaills;
