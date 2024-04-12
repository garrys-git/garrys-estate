import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/SignIn.jsx";
import About from "./pages/About.jsx";
import Profile from "./pages/Profile.jsx";
import Header from "./components/Header.jsx";
import PrivateRoute from "./components/PrivateRoute.jsx";
import CreateListing from "./pages/CreateListing.jsx";
import UpdateListing from "./pages/UpdateListing.jsx";
import Listing from "./pages/Listing.jsx";
import Search from "./pages/Search.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/sign-in" element={<Signin></Signin>}></Route>

        <Route path="/sign-up" element={<Signup></Signup>}></Route>

        <Route path="/listing/:listingId" element={<Listing></Listing>}></Route>
        <Route path="/search" element=<Search />></Route>
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />}></Route>

          <Route path="/create-listing" element={<CreateListing />}></Route>

          <Route
            path="/update-listing/:listingId"
            element={<UpdateListing />}
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
