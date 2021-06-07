import React, { useState } from "react";
import { Box } from "@chakra-ui/react";

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
        style={{ cursor: "pointer" }}
        onClick={() => {
          setStyle(option.name);
          setTabIndex(2);
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
        <Box bg="white" p="4">
          <img src={option.src} alt={option.name} style={{ width: "150px" }} />
        </Box>
      </Box>
    </>
  );
};

export default StyleCard;
