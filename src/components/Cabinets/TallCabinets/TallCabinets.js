import React, { useState } from "react";

import ClicBoxColourTab from "../ClicBoxColourTab";
import options from "./options";
import CabinetComponent from "../CabinetComponent";

const TallCabinets = ({ addToCart }) => {
  const [colour, setColour] = useState("White");
  return (
    <div>
      <ClicBoxColourTab setColour={setColour} colour={colour} />
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {options.map((cabinet, idx) => (
          <CabinetComponent
            cabinet={cabinet}
            key={idx}
            addToCart={addToCart}
            colour={colour}
          />
        ))}
      </div>
    </div>
  );
};

export default TallCabinets;
