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
      {options.map((hinge) => (
        <HingeComponent hinge={hinge} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default Hinges;
