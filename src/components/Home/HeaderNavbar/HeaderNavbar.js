import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./HeaderNavbar.css";
const HeaderNavbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let history = useHistory();

  const handleLoginBtn = () => {
    if (loggedInUser.email) {
      setLoggedInUser({});
      history.push("/home");
    } else {
      history.push("/login");
    }
  };

  const [isAdmin, setIsAdmin] = useState(false);
  // console.log(isAdmin);
  useEffect(() => {
    fetch("https://serene-everglades-14231.herokuapp.com/isAdmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: loggedInUser.email }),
    })
      .then((res) => res.json())
      .then((data) => setIsAdmin(data));
  }, [loggedInUser.email]);
  return (
    <>
      <div className="container md:mx-auto">
        <nav className="flex justify-evenly flex-wrap  p-3 n-items">
          <div className="flex items-center flex-shrink-0 mr-6 logo">
            <span className="font-bold text-4xl tracking-tight">
              <Link to="/">Techy Fun</Link>
            </span>
          </div>
          <div className="block lg:hidden">
            <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
              <title>Menu</title>
            </button>
          </div>
          <div className="w-full block flex-grow  lg:flex lg:items-center lg:w-auto ">
            <ul className="lg:flex-grow text-red-900 text-lg font-bold flex justify-center">
              {!isAdmin && (
                <>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    News
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    Programs
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-400 px-3">
                    Events
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    News
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400 px-3">
                    Programs
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0  hover:text-red-400 px-3">
                    Events
                  </li>
                  <li className="block mt-4 lg:inline-block lg:mt-0 hover:text-red-400">
                    <Link to="/addBlog">Post Blog</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div>
            <Link to="/login">
              <button
                onClick={handleLoginBtn}
                className="text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold  shadow hover:shadow-lg focus:outline-none hover:text-teal-500 hover:bg-white  px-5 py-3 lg:mt-0"
              >
                {loggedInUser.email
                  ? `${loggedInUser.name.split(" ")[0]} / Logout`
                  : "Login"}
              </button>
              {/* <button className="text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold  shadow hover:shadow-lg focus:outline-none hover:text-teal-500 hover:bg-white  px-5 py-3 lg:mt-0">
                SignIn
              </button> */}
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
};

export default HeaderNavbar;
