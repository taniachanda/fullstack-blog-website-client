import React from "react";

const LatestBlog = ({ lb }) => {
  const { heading, img, blog_content, time, writer } = lb;
  return (
    <div>
      <div className="container md:mx-auto ">
        <div className="shadow-md py-2 mt-5 mp-text md:grid md:grid-cols-3 gap-2  text-left">
          <img
            className="px-3 md:my-2 col-span-1 justify-center md:h-full md:w-full"
            layout="responsive"
            style={{ height: "220px", width: "100%" }}
            src={img}
            alt={heading}
          />
          <div
            className="col-span-2 font-bold px-3 text-xl"
            style={{ color: "#182335" }}
          >
            <h4 className="mt-5 mb-3">{heading}</h4>
            <p
              className="text-sm leading-relaxed "
              style={{ color: "#E15546" }}
            >
              {blog_content}
            </p>
            <div className="flex-none md:w-full mt-5 font-normal text-base">
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
