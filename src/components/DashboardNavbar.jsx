import React from "react";
import gdm from "../assets/icons/gdm.png";
// import ring from "../assets/icons/ringing.png";
// import signOut from "../assets/icons/sign-out.png";

import arrow from "../assets/navbar/arrow.svg";
import ring from "../assets/navbar/ring.svg";
import user from "../assets/navbar/user.svg";
import { Link, useLocation } from "react-router-dom";
import arrowLeft from "../assets/all-orders/arrow-left.svg";

const startingPages = ["/login", "/register"];

const DashboardNavbar = () => {
  const { pathname } = useLocation();

  const isStartingPage = startingPages.includes(pathname);

  return (
    <header className="dashboard-navbar">
      <img
        src={arrowLeft}
        alt=""
        style={{
          height: "17px",
          marginRight: 10,
          marginLeft: "-10px",
          cursor: "pointer",
          marginRight: "auto",
        }}
      />
      {isStartingPage ? (
        <>
          <Link to="/login" className="btn btn-link btn-blue">
            Login
          </Link>
          <Link to="/register" className="btn btn-outlined btn-blue">
            Register
          </Link>
        </>
      ) : (
        <>
          <div className="gdm-container">
            <a href="#">
              <img src={user} alt="" />
            </a>
            <span style={{ fontWeight: 700 }}>Daily</span>
          </div>

          <a href="#" style={{ marginRight: 10 }}>
            <img src={ring} alt="" />
          </a>
          <a href="#">
            <img src={arrow} alt="" />
          </a>
        </>
      )}
    </header>
  );
};

export default DashboardNavbar;
