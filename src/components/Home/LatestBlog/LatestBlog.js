import React from "react";

const LatestBlog = ({ lb }) => {
  const { heading, img, blog_content, time, writer } = lb;
  return (
    <div>
      <div className="container mx-auto">
        <div className="shadow-md py-2 mt-3 mp-text  grid grid-cols-3 gap-2 3xl:flex flex-wrap text-left">
          <img
            className="px-3 my-2 col-span-1 flex-wrap justify-center"
            layout="responsive"
            style={{ height: "220px", width: "90%" }}
            src={img}
            alt={heading}
          />
          <div
            className="col-span-2 font-bold text-white-900  text-xl"
            style={{ color: "#182335" }}
          >
            <h4 className="mt-5 mb-3">{heading}</h4>
            <p className="text-sm leading-relaxed" style={{ color: "#E15546" }}>
              {blog_content}
            </p>
            <div className="flex-none w-full mt-5 font-normal text-base">
              <dd className="inline text-yellow-900">{time}</dd>{" "}
              <dt className="inline text-gray-500">By</dt>{" "}
              <dd className="inline text-black">{writer}</dd>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestBlog;
