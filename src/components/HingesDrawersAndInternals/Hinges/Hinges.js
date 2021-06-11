import React from "react";

import options from "./options";
import HingeComponent from "./HingeComponent";

const Hinges = ({ addToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {options.map((hinge, idx) => (
        <HingeComponent hinge={hinge} addToCart={addToCart} key={idx} />
      ))}
    </div>
  );
};

export default Hinges;
