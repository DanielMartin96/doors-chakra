import React, { useState } from "react";

import widths from "./widths";
import prices from "./prices";
import { Heading, Text, FormControl, Select } from "@chakra-ui/react";

import "./ChooseSize.css";
import heights from "./heights";

const ChooseSize = ({ colour, style }) => {
  const [needsCustomSize, setNeedsCustomSize] = useState(false);
  const [needsHingeDrilling, setNeedsHingeDrilling] = useState(false);
  const [needsExtraHingeHoles, setNeedsExtraHingeHoles] = useState(false);
  // Holds all the info for the order
  const [order, setOrder] = useState({
    height: null,
    width: null,
    sideHingeHoles: "Left Hand Door",
    topHingeHole: null,
    bottomHingeHole: null,
    extraHingeHoleSide: "",
    extraHingeHoleDistance: null,
    quantity: null,
    price: null,
  });

  console.log(heights);

  // Takes a value and finds the next size up in the array. Will need this information to find the relevant price
  const findNextSizeUp = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        console.log(array[i]);
        return array[i];
      }
    }
  };

  // Takes the height and width from the component state and finds the price from the prices array
  const findPrice = (height, width, array) => {
    for (let i = 0; i < array.length; i++) {
      if (height === array[i].height && width === array[i].width) {
        return array[i];
      }
    }
  };

  return (
    <div>
      <Heading as="h1" fontSize="6xl" mb="10">
        Choose Your Door Size
      </Heading>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          paddingLeft: "10px",
        }}
      >
        <select
          type="select"
          style={{
            backgroundColor: "#C2B59C",
            height: "50px",
            padding: "0 30px",
            marginRight: "40px",
            fontSize: "30px",
            fontWeight: "semibold",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <option value="" disabled selected>
            Height
          </option>
          {heights.map((height) => (
            <option key={height}>{height}</option>
          ))}
        </select>
        <select
          placeholder="Width"
          style={{
            backgroundColor: "#C2B59C",
            height: "50px",
            padding: "0 30px",
            fontSize: "30px",
            fontWeight: "semibold",
            color: "white",
            borderRadius: "5px",
          }}
        >
          <option value="" disabled selected>
            Width
          </option>
          {widths.map((width) => (
            <option key={width}>{width}</option>
          ))}
        </select>
      </div>
      <FormControl m="2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text fontSize="xl" mr="2">
            Do you need custom sizes?
          </Text>
          <input
            type="checkbox"
            onChange={() => setNeedsCustomSize(!needsCustomSize)}
          />
        </div>
      </FormControl>
      {needsCustomSize ? (
        <div style={{ display: "flex" }}>
          <FormControl m="2" d="flex">
            <input
              type="number"
              placeholder="Height"
              style={{
                height: "50px",
                fontSize: "30px",
                textColor: "white",
                padding: "20px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                width: "85%",
              }}
            />
            <div
              style={{
                backgroundColor: "#58595B",
                height: "50px",
                fontSize: "20px",
                fontWeight: "bold",
                textColor: "white",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                width: "15%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white" }}>MM</span>
            </div>
          </FormControl>
          <FormControl m="2" d="flex">
            <input
              type="number"
              placeholder="Width"
              value=""
              style={{
                height: "50px",
                fontSize: "30px",
                textColor: "white",
                padding: "20px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                width: "85%",
              }}
            />
            <div
              style={{
                backgroundColor: "#58595B",
                height: "50px",
                fontSize: "20px",
                fontWeight: "bold",
                textColor: "white",
                borderTopRightRadius: "5px",
                borderBottomRightRadius: "5px",
                width: "15%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ color: "white" }}>MM</span>
            </div>
          </FormControl>
        </div>
      ) : null}
      <FormControl m="2">
        <div style={{ display: "flex", alignItems: "center" }}>
          <Text fontSize="xl" mr="2">
            Do you need hinge drilling?
          </Text>
          <input
            type="checkbox"
            onChange={() => setNeedsHingeDrilling(!needsHingeDrilling)}
          />
        </div>
      </FormControl>
    </div>
  );
};

export default ChooseSize;
