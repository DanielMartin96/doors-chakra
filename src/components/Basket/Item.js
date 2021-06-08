import React from "react";
import { Box } from "@chakra-ui/react";

import options from "../ChooseColour/options";

const Item = ({ item, removeFromCart, idx }) => {
  const findColour = (colour, options) => {
    for (let i = 0; i < options.length; i++) {
      if (colour === options[i].name) {
        return options[i].src;
      }
    }
  };

  return (
    <Box
      d="flex"
      flexWrap="wrap"
      flexDirection="column"
      textAlign="center"
      m="2"
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
        {item.colour}
        <br />
        {item.style}
      </Box>
      <Box bg="white" p="4">
        <img src={findColour(item.colour, options)} alt={item.colour} />
      </Box>
      <button onClick={() => removeFromCart(idx)}>Remove from Cart</button>
    </Box>
  );
};

export default Item;
