import React from "react";

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
    <div>
      {item.colour}
      <br />
      {item.style}
      <img src={findColour(item.colour, options)} />
      <button onClick={() => removeFromCart(idx)}>Remove from Cart</button>
    </div>
  );
};

export default Item;
