import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import "./HeaderNavbar.css";
import { TiThMenuOutline } from "react-icons/ti";
const HeaderNavbar = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

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
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 ">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <span className="font-bold text-4xl tracking-tight  logo">
              <Link to="/">Techy Fun</Link>
            </span>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <TiThMenuOutline className="text-red-900" />
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none items-center  lg:ml-auto text-red-900 text-lg font-bold n-items">
              {!isAdmin && (
                <>
                  <li className="block flex md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    News
                  </li>
                  <li className="block mt-4 md:inline-block  lg:mt-0 hover:text-red-400 px-3">
                    Programs
                  </li>
                  <li className="block mt-4 md:inline-block  lg:mt-0  hover:text-red-400 px-3">
                    Events
                  </li>
                </>
              )}
              {isAdmin && (
                <>
                  <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    News
                  </li>
                  <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    Programs
                  </li>
                  <li className="block mt-4 md:inline-block lg:mt-0  hover:text-red-400 px-3">
                    Events
                  </li>
                  <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
                    <Link to="/addBlog">PostBlog</Link>
                  </li>
                </>
              )}
              <Link to="/login">
                <button
                  onClick={handleLoginBtn}
                  className=" md:inline-block text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold  shadow hover:shadow-lg focus:outline-none hover:text-teal-500 hover:bg-white  px-3 py-2 lg:mt-0"
                >
                  {loggedInUser.email
                    ? `${loggedInUser.name.split(" ")[0]} / Logout`
                    : "Login"}
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>

    // <>
    //   <div className="container md:mx-auto">
    //     <nav className="flex flex-wrap justify-evenly flex-wrap  p-3 n-items">
    //       <div className="flex items-center flex-shrink-0 mr-6 logo">
    //         <span className="font-bold text-4xl tracking-tight">
    //           <Link to="/">Techy Fun</Link>
    //         </span>
    //       </div>
    //       <div class="flex md:hidden">
    //         <button id="hamburger">
    //           <img
    //             className="toggle block"
    //             src="https://img.icons8.com/fluent-systems-regular/2x/menu-squared-2.png"
    //             width="40"
    //             height="40"
    //             alt="/"
    //           />
    //           <img
    //             className="toggle hidden"
    //             src="https://img.icons8.com/fluent-systems-regular/2x/close-window.png"
    //             alt="/"
    //             width="40"
    //             height="40"
    //           />
    //         </button>
    //       </div>
    //       <div class="toggle hidden md:flex w-full md:w-auto text-right text-bold mt-5 md:mt-0 border-t-2 border-blue-900 md:border-none">
    //         <div className=" w-full block flex-grow  md:flex md:w-auto md:mt-0 lg:items-center lg:w-auto ">
    //           <ul className="lg:flex-grow text-red-900 text-lg font-bold flex justify-center">
    //             {!isAdmin && (
    //               <>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
    //                   <Link to="/">Home</Link>
    //                 </li>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
    //                   News
    //                 </li>
    //                 <li className="block mt-4 md:inline-block  lg:mt-0 hover:text-red-400 px-3">
    //                   Programs
    //                 </li>
    //                 <li className="block mt-4 md:inline-block  lg:mt-0  hover:text-red-400 px-3">
    //                   Events
    //                 </li>
    //               </>
    //             )}
    //             {isAdmin && (
    //               <>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
    //                   <Link to="/">Home</Link>
    //                 </li>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
    //                   News
    //                 </li>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400 px-3">
    //                   Programs
    //                 </li>
    //                 <li className="block mt-4 md:inline-block lg:mt-0  hover:text-red-400 px-3">
    //                   Events
    //                 </li>
    //                 <li className="block mt-4 md:inline-block lg:mt-0 hover:text-red-400">
    //                   <Link to="/addBlog">Post Blog</Link>
    //                 </li>
    //               </>
    //             )}
    //           </ul>
    //         </div>
    //         <div>
    //           <Link to="/login">
    //             <button
    //               onClick={handleLoginBtn}
    //               className=" md:inline-block text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold  shadow hover:shadow-lg focus:outline-none hover:text-teal-500 hover:bg-white  px-5 py-3 lg:mt-0"
    //             >
    //               {loggedInUser.email
    //                 ? `${loggedInUser.name.split(" ")[0]} / Logout`
    //                 : "Login"}
    //             </button>
    //             {/* <button className="text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold  shadow hover:shadow-lg focus:outline-none hover:text-teal-500 hover:bg-white  px-5 py-3 lg:mt-0">
    //             SignIn
    //           </button> */}
    //           </Link>
    //         </div>
    //       </div>
    //     </nav>
    //   </div>
    // </>
  );
};

export default HeaderNavbar;
