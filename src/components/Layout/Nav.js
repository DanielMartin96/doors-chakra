import React from "react";

import logo from "../../assets/images/logo/White logo png.png";

const Nav = () => {
  return (
    <div
      style={{
        backgroundColor: "#707070",
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        color: "white",
        padding: "0 80px",
      }}
    >
      <div
        style={{
          backgroundColor: "#58595B",
          height: "100px",
          width: "300px",
          position: "relative",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "30px",
          boxShadow: "0 2px 6px -1px #707070",
        }}
      >
        <a href="/">
          <img src={logo} alt="logo" width="250px" />
        </a>
      </div>
      <div>
        <div
          style={{ display: "flex", alignItems: "center", fontSize: "16px" }}
        >
          <a href="/">
            <p style={{ margin: "0px 20px", color: "white" }}>Home</p>
          </a>
          <a href="/guides">
            <p style={{ margin: "0px 20px", color: "white" }}>Guides</p>
          </a>
          <a href="/about-us">
            <p style={{ margin: "0px 20px", color: "white" }}>About Us</p>
          </a>
          <a href="/contact-us">
            <p style={{ margin: "0px 20px", color: "white" }}>Contact Us</p>
          </a>
          <button
            style={{
              backgroundColor: "#c2b59c",
              padding: "10px 20px",
              borderRadius: "5px",
              border: "0px",
              margin: "0px 20px",
              cursor: "pointer",
            }}
          >
            <a href="/shop" style={{ color: "white", fontSize: "16px" }}>
              Shop
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
