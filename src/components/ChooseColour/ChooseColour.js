import React from "react";

import ColourCard from "./ColourCard";
import options from "./options";

export const ChooseColour = ({ setTabIndex, setColour }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {options.map((option) => (
        <ColourCard
          key={option.name}
          option={option}
          setTabIndex={setTabIndex}
          setColour={setColour}
        />
      ))}
    </div>
  );
};

export default ChooseColour;
