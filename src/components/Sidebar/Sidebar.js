import React from "react";
import { FaPlus, FaList, FaUserPlus, FaThLarge } from "react-icons/fa";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex flex-col h-full p-3 w-60 bg-white text-gray-800">
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h2>Dashboard</h2>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link to="/addBlog">
                <p className="flex items-center p-2 space-x-3 rounded-md">
                  <FaPlus
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  ></FaPlus>
                  <span>Add Blog</span>
                </p>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link to="/bloglist">
                <p className="flex items-center p-2 space-x-3 rounded-md">
                  <FaList
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  ></FaList>
                  <span>Blog List</span>
                </p>
              </Link>
            </li>
            <li className="rounded-sm">
              <Link to="/makeAdmin">
                <p className="flex items-center p-2 space-x-3 rounded-md">
                  <FaUserPlus
                    viewBox="0 0 512 512"
                    className="w-5 h-5 fill-current text-gray-600"
                  ></FaUserPlus>
                  <span>Admin</span>
                </p>
              </Link>
            </li>
            <li className="rounded-sm">
              <p className="flex items-center p-2 space-x-3 rounded-md">
                <FaThLarge
                  viewBox="0 0 512 512"
                  className="w-5 h-5 fill-current text-gray-600"
                ></FaThLarge>
                <span>Manage Blogs</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex mt-44 flex items-end items-center p-2 mt-42 space-x-4">
        <div className="">
          <Link to="/">
            <h2 className="text-3xl font-semibold">Techy Fun</h2>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
