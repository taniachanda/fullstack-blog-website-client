import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { FiUploadCloud } from "react-icons/fi";
import axios from "axios";
import Sidebar from "./../../Sidebar/Sidebar";
import { UserContext } from "../../../App";

const AddBlog = () => {
  const [loggedInUser] = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);

  const onSubmit = (data) => {
    const { headline, inline, blogContent } = data;
    const blogData = {
      ...loggedInUser,
      heading: headline,
      writer: inline,
      content: blogContent,
      icon: imageURL,
    };

    const url = `https://serene-everglades-14231.herokuapp.com/addPopularBlog`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(blogData),
    }).then((res) => console.log("server site response", res));
    console.log(blogData);
  };

  const handleImageUpload = (event) => {
    console.log(event.target.files[0]);
    const imageData = new FormData();
    imageData.set("key", "2159b67279a85b6c11df81c60487635e");
    imageData.append("image", event.target.files[0]);
    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        // console.log(response.data.data.display_url);
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <div className="text-4xl leading-4 font-extrabold text-green-900 mt-10 text-center ">
              <h2 className=" pl-3">ADD BLOG</h2>
            </div>

            <div className="md:flex mt-10 pt-10  justify-center">
              <form
                className="w-full max-w-lg self-center"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                      Headline
                    </label>
                    <input
                      {...register("headline", { required: true })}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                      id="grid-last-name"
                      type="text"
                      placeholder="Headline"
                      name="headline"
                    />
                    <p className="text-danger mb-0">
                      {errors.headline && "* This field is required"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                      Inline
                    </label>
                    <input
                      {...register("inline", { required: true })}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                      id="grid-last-name"
                      type="text"
                      placeholder="Inline"
                      name="inline"
                    />
                    <p className="text-danger mb-0">
                      {errors.inline && "* This field is required"}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                      Blog Content
                    </label>
                    <textarea
                      {...register("blogContent", { required: true })}
                      className="appearance-none block w-full  h-24 resize bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                      id="grid-last-name"
                      type="text"
                      placeholder="Content"
                      name="blogContent"
                    />
                  </div>
                  <p className="text-danger mb-0">
                    {errors.content && "* This field is required"}
                  </p>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label className="w-full flex flex-col items-center px-2 py-2 bg-gradient-to-r from-gray-300 rounded-md shadow-md tracking-wide uppercase border border-blue cursor-pointer hover:bg-red-600 hover:text-white text-red-600 ease-linear transition-all duration-150">
                      <FiUploadCloud className="fa-3x" size="2em" />
                      {/* <i className="fas fa-cloud-upload-alt "></i> */}
                      <span className=" text-base text-normal">
                        Select a image
                      </span>
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleImageUpload}
                      />
                    </label>
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <button
                      className="text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddBlog;
