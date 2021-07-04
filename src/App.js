import "./App.css";
import Home from "./components/Home/Home/Home";
import React, { createContext, useState } from "react";
import AddBlog from "./components/Admin/AddBlog/AddBlog";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import BlogDetaills from "./components/BlogDetails/BlogDetaills";
import Footer from "./components/Home/Footer/Footer";
import BlogList from "./components/Admin/BlogList/BlogList";
import PrivateRoute from "./components/PrivateRout/PrivateRout";
import SignIn from "./components/Login/SignIn";
import MakeAdmin from "./components/Admin/MakeAdmin/MakeAdmin";

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home}>
            {/* <Home /> */}
          </Route>
          <Route path="/home" component={Home}>
            {/* <Home /> */}
          </Route>
          <PrivateRoute path="/addBlog">
            <AddBlog />
          </PrivateRoute>
          <Route path="/bloglist" component={BlogList}>
            {/* <BlogList /> */}
          </Route>
          <Route path="/blogDetails/:_id" component={BlogDetaills}>
            {/* <BlogDetaills /> */}
          </Route>
          <Route path="/login" component={SignIn}>
            {/* <SignIn /> */}
          </Route>
          <PrivateRoute path="/makeAdmin" component={MakeAdmin}>
            {/* <SignIn /> */}
          </PrivateRoute>
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
