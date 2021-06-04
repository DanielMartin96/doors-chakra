import React from "react";
import { Box } from "@chakra-ui/react";

const ColourCard = ({ option, setTabIndex }) => {
  return (
    <Box
      maxW="sm"
      d="flex"
      flexWrap="wrap"
      flexDirection="column"
      textAlign="center"
      m="2"
      style={{ cursor: "pointer" }}
      onClick={() => setTabIndex(1)}
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
        <img src={option.src} alt={option.alt} />
      </Box>
    </Box>
  );
};

export default ColourCard;
