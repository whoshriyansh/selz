import React from "react";
import { NavLink } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center gap-4">
      <div className="w-40 sm:w-56">
        <img src="./public/notfound.png" alt="Selz-logo" />
      </div>
      <p className=" bg-gradient-to-r from-primary to-white bg-clip-text text-transparent font-black text-2xl  sm:text-4xl md:text-6xl text-center w-full">
        404 - Page Not Found
      </p>
      <p className=" hidden sm:block text-base-content font-normal text-lg text-center w-full">
        The page you are looking for dosen't exits or either the url is wrong
      </p>
      <NavLink
        className="btn  btn-soft  md:btn-lg btn-gradient btn-secondary waves waves-dark"
        to={"/"}
      >
        Go Home from here
      </NavLink>
    </div>
  );
};

export default NotFoundPage;
