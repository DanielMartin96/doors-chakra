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
      {options.map((drawer) => (
        <DrawerComponent drawer={drawer} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Drawers;
