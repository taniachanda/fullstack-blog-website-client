import React, { useContext, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "./../../App";
import { Link, useHistory, useLocation } from "react-router-dom";
import HeaderNavbar from "./../Home/HeaderNavbar/HeaderNavbar";
// import { FcGoogle } from "react-icons/fc";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const SignIn = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  // redirect purposes after login
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  //useState hook to detect login and signup
  const [option, setOption] = useState("login");

  //useState hook for user data
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    password: "",
    error: "",
    success: false,
  });

  const handleBlur = (e) => {
    let isFormValid = true;
    if (e.target.name === "email") {
      isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
      const newUserInfo = { ...user };
      newUserInfo.error = isFormValid ? "" : "Email invalid";
      setUser(newUserInfo);
    }
    if (option === "signup" && e.target.name === "password") {
      isFormValid = e.target.value.length > 5;
      const newUserInfo = { ...user };
      newUserInfo.error =
        e.target.value.length > 5
          ? ""
          : "Password must be greater than 6 digit";
      setUser(newUserInfo);
    }
    if (e.target.name === "confirmPassword") {
      const newUserInfo = { ...user };
      isFormValid = e.target.value === newUserInfo.password;
      console.log(isFormValid, e.target.value, newUserInfo.password);
      newUserInfo.error =
        e.target.value === newUserInfo.password ? "" : "Password didn't match";
      setUser(newUserInfo);
    }
    if (isFormValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      newUserInfo.error = "";
      setUser(newUserInfo);
    }
  };

  //Creating or login with email and password
  const handleSubmit = (e) => {
    if (option === "signup" && user.email && user.password) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setUser(newUserInfo);
          updateUserInfo(user.name);
        })
        .catch((err) => {
          const newUserInfo = { ...user };
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    if (option === "login" && user.email && user.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const { displayName } = res.user;
          const newUserInfo = { ...user };
          newUserInfo.error = "";
          newUserInfo.success = true;
          newUserInfo.isSignedIn = true;
          newUserInfo.name = displayName;
          setUser(newUserInfo);
          setLoggedInUser(newUserInfo);
          history.replace(from);
        })
        .catch((err) => {
          const newUserInfo = { ...user };
          newUserInfo.error = err.message;
          newUserInfo.success = false;
          setUser(newUserInfo);
        });
    }
    e.preventDefault();
  };
  //updating user name to firebase
  const updateUserInfo = (name) => {
    const user = firebase.auth().currentUser;

    user
      .updateProfile({
        displayName: name,
      })
      .then((res) => {
        // Update successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };

  //Google SignIn
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        const { displayName, email } = res.user;
        const signedInUser = {
          isSignedIn: true,
          name: displayName,
          email: email,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <HeaderNavbar />
      <div className="container md:mx-auto">
        <div className="col-span-2 mb-18 h-screen mx-3">
          <div className="md:flex mt-5 pt-5  justify-center">
            <form
              onSubmit={handleSubmit}
              className="w-full max-w-lg self-center"
            >
              <div className="md:flex flex-wrap -mx-3 mb-6">
                <div className="text-4xl leading-4 font-extrabold text-green-900 mt-5 mb-5 text-center ">
                  <h2 className="pl-3">
                    {option === "login" ? "Login" : "Create an account"}
                  </h2>
                </div>{" "}
                {option === "signup" && (
                  <div className="md:w-full md:px-3">
                    <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                      Name
                    </label>
                    <input
                      onBlur={handleBlur}
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                      type="text"
                      placeholder="Name"
                      name="name"
                    />
                  </div>
                )}
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                    Email
                  </label>
                  <input
                    onBlur={handleBlur}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                    type="text"
                    placeholder="email"
                    name="email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                    Password
                  </label>
                  <input
                    onChange={handleBlur}
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                    type="password"
                    placeholder="password"
                    name="password"
                  />
                </div>
                {option === "signup" && (
                  <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-red-600 text-xs font-bold mb-2">
                      Password
                    </label>
                    <input
                      onChange={handleBlur}
                      type="password"
                      name="confirmPassword"
                      required
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 shadow-md"
                      placeholder="Confirm Password"
                    />{" "}
                  </div>
                )}
                {option === "login" && (
                  <div className="flex justify-content-between align-items-baseline">
                    <div className="pt-5">
                      <input type="checkbox" id="exampleCheck1" />
                      <label className="ml-2 mt-3" htmlFor="exampleCheck1">
                        Remember me
                      </label>
                    </div>
                    <Link to="/forgetPassword">
                      <p className="text-red-500 ml-24 pt-5">Forgot Password</p>
                    </Link>
                  </div>
                )}
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                  {option === "login" ? "Login" : "Create an account"}
                  <button
                    className="text-white bg-gradient-to-r from-red-200 to-red-700 hover:from-red-700 hover:to-yellow-50 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
                <div className="flex justify-content-center align-items-baseline">
                  <h4 className="text-center mt-3 mr-2">
                    {option === "login"
                      ? "Don't have an account? "
                      : "Already have an account? "}{" "}
                  </h4>
                  <p
                    onClick={() =>
                      option === "login"
                        ? setOption("signup")
                        : setOption("login")
                    }
                  >
                    {option === "login" ? "Create an account" : "Login"}
                  </p>
                </div>
              </div>
            </form>
          </div>
          <p div className=" text-center">
            or
          </p>
          <div className="col-span-2">
            <div className="w-full  text-center">
              <button
                onClick={handleSignIn}
                type="button"
                className="max-w-lg w-full text-white bg-gradient-to-r from-blue-500 to-blue-700 hover:from-green-700 hover:to-green-300 font-bold uppercase text-sm px-12 py-4 rounded shadow hover:shadow-lg outline-none focus:outline-none  ease-linear transition-all duration-150"
              >
                {/* <FcGoogle size="2em" className="pt-3" /> */}
                <span>Continue with Google</span>
              </button>
              <p style={{ color: "red" }}>{user.error}</p>
              {user.success && (
                <p style={{ color: "green" }}>
                  User {option === "login" ? "logged In" : "created"}{" "}
                  successfully
                </p>
              )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
