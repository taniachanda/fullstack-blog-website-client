import React, { useEffect, useState } from "react";
import { FaTrashAlt } from "react-icons/fa";
import swal from "sweetalert";
import Sidebar from "./../../Sidebar/Sidebar";
// import swal from 'sweetalert';

const BlogList = () => {
  const [allBlog, setAllblog] = useState([]);
  // const [preloader, setPreloader] = useState(true);

  useEffect(() => {
    fetch("https://serene-everglades-14231.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setAllblog(data));
  }, []);
  console.log(allBlog);

  // const handleDeleteBlog = (id) => {
  //   console.log(id)
  //   fetch('https://serene-everglades-14231.herokuapp.com/deleteBlog/' + id, {
  //     method: "DELETE"
  //   })
  //     .then(res => res.json())
  //     .then(result => {
  //       console.log(result, 'deleted')
  //     })
  // }

  const handleDeleteBlog = (id) => {
    fetch(`https://serene-everglades-14231.herokuapp.com/deleteBlog/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          const remainBlog = allBlog.filter((blog) => blog._id !== id);
          setAllblog(remainBlog);
          swal("Success", `${data.message}`, "success");
        } else {
          swal("Sorry", `${data.message}`, "error");
        }
      });
  };
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <Sidebar />
          </div>
          <div className="col-span-2">
            <div className="text-4xl leading-4 font-extrabold text-green-900 mt-10 text-center ">
              <h2 className=" pl-3">Blog List</h2>
            </div>

            <div className="md:flex mt-4 mb-8 pt-10 pb-10 justify-center">
              <div className="flex flex-col text-left">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-3">
                  <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Headline
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              inline
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                            >
                              Delete
                            </th>
                          </tr>
                        </thead>
                        {allBlog.map((blog) => {
                          return (
                            <tbody className="bg-white divide-y divide-gray-200">
                              <tr>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="flex items-center">
                                    <div className="flex-shrink-0 h-10 w-10">
                                      <img
                                        className="h-10 w-10 rounded-full"
                                        src={blog?.icon}
                                        alt=""
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <div className="text-sm font-medium text-gray-900">
                                        {blog?.heading}
                                      </div>
                                    </div>
                                  </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                  <div className="text-sm text-gray-900">
                                    {blog?.writer}
                                  </div>
                                </td>
                                <td className="px-14 py-4 whitespace-nowrap text-right text-sm font-medium">
                                  <p
                                    href="#"
                                    className="text-red-600 hover:text-indigo-900"
                                  >
                                    <FaTrashAlt
                                      onClick={() => handleDeleteBlog(blog._id)}
                                    />
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          );
                        })}
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
