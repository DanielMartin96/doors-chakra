import React from "react";

import options from "./options";
import DrawerComponent from "./DrawerComponent";

const Drawers = ({ addToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {options.map((drawer, idx) => (
        <DrawerComponent drawer={drawer} addToCart={addToCart} key={idx} />
      ))}
    </div>
  );
};

export default Drawers;
