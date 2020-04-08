import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { scrollStart, mobileNav } from "../../../store/actions";
const Header = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      dispatch(scrollStart());
    });
  });
  
  const showMenu = () => {
    dispatch(mobileNav());
  };
  const hideMenu = () => {
    dispatch(
      mobileNav({
        displayNav: "",
        changeNavBtn: ""
      })
    );
  };

  const dispatch = useDispatch();

  let Activeclass = useSelector((state) => state.common.backgroundForNav);
  let displayNav = useSelector((state) => state.common.displayNav);
  let changeNavBtn = useSelector((state) => state.common.changeNavBtn);
  
  return (
   <header id="header" className={Activeclass}>
      <div className="container">
        <nav className="navbar navbar-inverse navbar-expand-lg ">
          <div className="container-fluid">
            <div className="navbar-header">
              <h1 className="header-logo">
                <Link className="navbar-brand" to="/">
                  <img
                    src={"/images/logo-transparent.png"}
                    alt="fig - A VONZA COMPANY Logo"
                    aria-hidden="true"
                  />
                  <span className="sr-only">fig : A VONZA COMPANY Logo</span>
                </Link>
              </h1>
            </div>
            <button
              className="navbar-toggle collapsed"
              type="button"
              id="openNav"
              onClick={showMenu}
            >
              <div className={`${changeNavBtn}`}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
              </div>
            </button>
            <button className="closebtn" id="closeNav" onClick={hideMenu}>
              &times;
            </button>
            <div
              className="collapse navbar-collapse"
              id="mainNavigation"
              style={{ display: `${displayNav}` }}
            >
              <ul className="menu navbar-left">
                <li>
                  <Link to="/features">Features</Link>
                </li>
                <li>
                  <Link to="/pricing">Pricing</Link>
                </li>
                <li>
                  <Link to="/examples">Examples</Link>
                </li>
                <li>
                  <Link to="/blog/business-growth">Blog</Link>
                </li>
              </ul>
              <ul className="navbar-right menu">
                <li>
                  <Link to="/login">Log In</Link>
                </li>
                <li className="highlighted">
                  <Link
                    onClick={() => {
                      localStorage.setItem("flow", "/questions");
                      localStorage.setItem("plan", "");
                      localStorage.setItem("price", "Free");
                      localStorage.setItem("planId", "");
                      localStorage.setItem("billed", "");
                    }}
                    to="/signup"
                  >
                    Sign Up Free
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
