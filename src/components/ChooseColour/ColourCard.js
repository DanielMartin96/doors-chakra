import React from "react";
import { Box } from "@chakra-ui/react";

import "./ColourCard.css";

const ColourCard = ({ option, setTabIndex, setColour }) => {
  return (
    <Box
      maxW="sm"
      d="flex"
      flexWrap="wrap"
      flexDirection="column"
      textAlign="center"
      m="2"
      className="colourCard"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setTabIndex(1);
        setColour(option.name);
      }}
    >
      <Box
        style={{
          backgroundColor: "#808080",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "5px 0",
        }}
      >
        {option.name}
      </Box>
      <Box
        bg="white"
        p="4"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      >
        <img src={option.src} alt={option.name} />
      </Box>
    </Box>
  );
};

export default ColourCard;
