import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import Selling from "../pages/Selling";

export default function Header() {
  const [user, setUser] = useState(false);
  const [register, setRegister] = useState(false);
  const [join, setJoin] = useState(false);
  const userHandleRef = useRef(null);

  const handleUser = () => {
    setUser((prevUser) => !prevUser);
  };

  const handleClickOutside = (event) => {
    if (
      userHandleRef.current &&
      !userHandleRef.current.contains(event.target)
    ) {
      setUser(false);
      setRegister(false);
      setJoin(false); // Close both login and join as seller forms when clicking outside
    }
  };

  const handleRegister = () => {
    setRegister((prevRegister) => !prevRegister);
    setJoin(false); // Close the join as seller form if open
  };

  const handleJoining = () => {
    setJoin((prevJoin) => !prevJoin);
    setRegister(false); // Close the login form if open
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header>
        <div className="Header-nav-all">
          <div className="Header-nav">
            <div className="Header-icons">
              <i
                className="fa-brands fa-facebook fa-xl"
                style={{ color: "#4c4c4d" }}
              ></i>
              <i
                className="fa-brands fa-twitter fa-xl"
                style={{ color: "#4c4c4d" }}
              ></i>
              <i
                className="fa-brands fa-instagram fa-xl"
                style={{ color: "#4c4c4d", marginLeft: "2px" }}
              ></i>
              <i
                className="fa-brands fa-linkedin fa-xl"
                style={{ color: "#4c4c4d", marginLeft: "5px" }}
              ></i>
            </div>
          </div>
          <div className="Header-nav1">
            <span className="Header-span">FREE SHIPPING</span>
            <p className="Header-p">THIS WEEK ORDER OVER - $55</p>
          </div>
          <div className="Header-nav2">
            <select className="Header-nav-select">
              <option className="Header-nav-option">USD $</option>
              <option className="Header-nav-option">IND Rs</option>
            </select>
            <select className="Header-nav-select">
              <option className="Header-nav-option">English</option>
              <option className="Header-nav-option">Hindi</option>
            </select>
          </div>
        </div>
        <div className="Header-search-all">
          <h1 className="Header-heading">PawMart</h1>
          <input className="Header-input" placeholder="Search here..." />
          <i
            className="fa-solid fa-magnifying-glass fa-sm"
            style={{
              color: "#4c4c4d",
              marginLeft: "-40px",
              marginTop: "35px",
              cursor: "pointer",
            }}
          ></i>
          <div className="Header-wishlist-icons">
            <i
              className="fa-regular fa-user fa-2xl"
              style={{ color: "#4c4c4d" }}
              onClick={handleUser}
            ></i>
            {user && <div className="Header-blur-overlay"></div>}
            {user && (
              <div className="Header-user-handles" ref={userHandleRef}>
                <div className="Header-user-handle" onClick={handleRegister}>
                  <i
                    className="fa-solid fa-user-lock fa-xl"
                    style={{ color: "#4c4c4d" }}
                  ></i>
                  <p
                    className="Header-span"
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginTop: "-3px",
                    }}
                  >
                    Log In
                  </p>
                </div>
                {register && (
                  <div className="Header-Login">
                    <Login />
                  </div>
                )}
                <div
                  className="Header-user-handle"
                  style={{ marginTop: "20px" }}
                  onClick={handleJoining}
                >
                  <i
                    className="fa-solid fa-user-gear fa-xl"
                    style={{ color: "#4c4c4d" }}
                  ></i>
                  <p
                    className="Header-span"
                    style={{
                      cursor: "pointer",
                      marginLeft: "10px",
                      marginTop: "-3px",
                    }}
                  >
                    Join as a Seller
                  </p>
                </div>
                {join && (
                  <div className="Header-Login">
                    <Selling />
                  </div>
                )}
              </div>
            )}
            <i
              className="fa-regular fa-heart fa-2xl"
              style={{ color: "#4c4c4d", marginLeft: "20px" }}
            ></i>
            <i
              className="fa-solid fa-bag-shopping fa-2xl"
              style={{ color: "#4c4c4d", marginLeft: "20px" }}
            ></i>
          </div>
        </div>
        <div className="Header-pages">
          <Link to="/" style={{ textDecoration: "none" }}>
            <p className="Header-p1">Home</p>
          </Link>
          <Link to="/about" style={{ textDecoration: "none" }}>
            <p className="Header-p1">About</p>
          </Link>
          <Link to="/service" style={{ textDecoration: "none" }}>
            <p className="Header-p1">Services</p>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <p className="Header-p1">Contact</p>
          </Link>
        </div>
      </header>
    </>
  );
}
