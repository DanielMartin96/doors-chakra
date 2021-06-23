import React from "react";
import { Box } from "@chakra-ui/react";

import "./StyleCard.css";

const StyleCard = ({ option, setTabIndex, setStyle }) => {
  return (
    <>
      <Box
        maxW="sm"
        d="flex"
        flexWrap="wrap"
        flexDirection="column"
        textAlign="center"
        m="2"
        className="styleCard"
        style={{ cursor: "pointer" }}
        onClick={() => {
          setTabIndex(2);
          setStyle(option.name);
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
          <img src={option.src} alt={option.name} style={{ width: "150px" }} />
        </Box>
      </Box>
    </>
  );
};

export default StyleCard;
