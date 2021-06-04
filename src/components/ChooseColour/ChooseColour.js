import React from "react";

import ColourCard from "./ColourCard";
import options from "./options";

export const ChooseColour = ({ setTabIndex }) => {
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
        />
      ))}
    </div>
  );
};

export default ChooseColour;
