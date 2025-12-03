import React from "react";
import { Outlet } from "react-router";
import NavBar from "../pages/shared/NavBar/NavBar";
import Footer from "../pages/shared/Footer/Footer";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <NavBar />
      <div className="mt-1">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default RootLayout;
