import React from "react";
import { Box, Text, CloseButton } from "@chakra-ui/react";

import options from "../ChooseColour/options";

const Item = ({ item, removeFromCart, idx }) => {
  console.log(item);

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
      style={{ transform: "scale(90%)" }}
    >
      <Box
        style={{
          backgroundColor: "#808080",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          color: "white",
          fontWeight: "bold",
          padding: "5px 0",
        }}
        d="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <div>
          <CloseButton style={{ color: "#808080" }} isDisabled />
        </div>
        <div>
          {item.colour} {item.style} {item.product}
        </div>
        <div>
          <CloseButton onClick={() => removeFromCart(idx, item.product)} />
        </div>
      </Box>
      <Box
        style={{ backgroundColor: "#E7E7E7" }}
        p="4"
        d="flex"
        justifyContent="center"
      >
        <img
          src={
            item.src !== undefined ? item.src : findColour(item.colour, options)
          }
          alt={item.colour}
          style={{ width: "200px" }}
        />
      </Box>

      <Box style={{ backgroundColor: "#E7E7E7" }} pl="4" pr="4" pb="4">
        <Text color="gray">
          <b>Quantity:</b> {item.quantity}
        </Text>
        <Text color="gray">
          {item.standardHeight !== undefined && item.standardWidth !== undefined
            ? item.standardHeight + " x " + item.standardWidth + "mm"
            : null}
        </Text>
        <Text color="gray">
          <b>Price:</b> £{item.total}
        </Text>
      </Box>
    </Box>
  );
};

export default Item;
