import React from "react";

import StyleCard from "./StyleCard";
import options from "./options";

const ChooseStyle = ({ colour, setStyle, setTabIndex }) => {
  // this function takes in the colour that was picked on the previous tab and goes through the styles array and finds the colour. It then returns that colour and all the images relevant to that colour
  const findColour = (colour, options) => {
    for (let i = 0; i < options.length; i++) {
      if (colour === options[i].name) {
        return options[i];
      }
    }
  };

  // Find the right colour and assigns it to a variable which can be mapped through
  const relevantStyles = findColour(colour, options);

  // If no colour picked on previous screen, the page will show nothing
  if (colour.length === 0) {
    return <div></div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {relevantStyles.images.map((option) => (
        <StyleCard
          key={option.name}
          option={option}
          setTabIndex={setTabIndex}
          setStyle={setStyle}
        />
      ))}
    </div>
  );
};

export default ChooseStyle;
