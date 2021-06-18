import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const LetterBoxFrame = ({ colour, style, menuHidden, hideMenu }) => {
  return (
    <div>
      <h1>Letter Box Frame</h1>
      <Link to="/" onClick={() => hideMenu(!menuHidden)}>
        <Button bg="#c2b59c" _hover={{ bg: "#58595b", color: "white" }}>
          Back
        </Button>
      </Link>
      <p>
        {colour} {style}
      </p>
    </div>
  );
};

export default LetterBoxFrame;
