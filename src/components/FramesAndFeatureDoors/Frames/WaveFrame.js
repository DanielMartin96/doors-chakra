import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const WaveFrame = ({ colour, style, menuHidden, hideMenu }) => {
  return (
    <div>
      <Link to="/" onClick={() => hideMenu(!menuHidden)}>
        <Button bg="#c2b59c" _hover={{ bg: "#58595b", color: "white" }}>
          Back
        </Button>
      </Link>
      <h1>Wave Frame</h1>
      <p>
        {colour} {style}
      </p>
    </div>
  );
};

export default WaveFrame;
