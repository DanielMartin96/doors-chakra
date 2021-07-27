import React from "react";

import options from "./options";
import InternalComponent from "./InternalComponent";

console.log(options);

const Internals = ({ addToCart }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {options.map((internal, idx) => (
        <InternalComponent
          internal={internal}
          addToCart={addToCart}
          key={idx}
        />
      ))}
    </div>
  );
};

export default Internals;
