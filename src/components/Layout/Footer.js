import React from "react";

import logo from "../../assets/images/logo/White logo png.png";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#58595B",
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-evenly",
        padding: "50px 100px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          borderBottom: "#c2b59c 2px solid",
          paddingBottom: "20px",
        }}
      >
        <div>
          <img
            src={logo}
            alt="Logo"
            style={{ marginBottom: "20px" }}
            width="400px"
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at erat congue est hendrerit pellentesque sit amet quis diam. Donec
            ex arcu, congue id erat eu, fringilla dictum risus. Aenean
            pellentesque urna elit, faucibus auctor felis pellentesque suscipit.
            Aenean sed orci velit. Proin quis rhoncus elit, sed ultricies orci.
            Curabitur nec laoreet est, sed commodo sapien. Vivamus luctus libero
            mauris, vel varius eros faucibus et.
          </p>
        </div>
        <div style={{ margin: "0px 60px" }}>
          <h2
            style={{ color: "#c2b59c", fontSize: "30px", fontWeight: "bold" }}
          >
            SERVICES
          </h2>
          <ul
            style={{
              listStyleType: "none",
              cursor: "pointer",
              textDecorationLine: "underline",
            }}
          >
            <a href="/">
              <li>Home</li>
            </a>
            <a href="/">
              <li>Guides</li>
            </a>
            <a href="/">
              <li>About Us</li>
            </a>
            <a href="/">
              <li>Contact Us</li>
            </a>
            <a href="/">
              <li>Shop</li>
            </a>
          </ul>
        </div>
        <div>
          <h2
            style={{ color: "#c2b59c", fontSize: "30px", fontWeight: "bold" }}
          >
            CONTACT US
          </h2>
          <div>
            <div>
              <p>
                <b>Address</b>
              </p>
              <p>Woodcroft, Bury Bar Ln, Newent, GL18 1PT</p>
            </div>
            <div>
              <p>
                <b>Phone</b>
              </p>
              <p>01531 822128</p>
            </div>
            <div>
              <p>
                <b>Email</b>
              </p>
              <p>les@doorsandcabinets.co.uk</p>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          paddingTop: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <div>Website by Dynamic.</div>
        <div>Sitemap</div>
        <div>
          <p>Copyright 2020-2021</p>
          <p>Doors and Cabinets</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
