import React from "react";
import { Button, Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const OpenFrame = ({ colour, style, menuHidden, hideMenu, src, title }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={src} alt="Open Frame" width="300px" />
        <div>
          <div style={{ display: "flex" }}>
            <Heading>
              {colour} {style} {title}
            </Heading>
            <Link to="/" onClick={() => hideMenu(!menuHidden)}>
              <Button bg="#c2b59c" _hover={{ bg: "#58595b", color: "white" }}>
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpenFrame;
