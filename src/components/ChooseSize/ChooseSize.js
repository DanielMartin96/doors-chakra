import React, { useState } from "react";
import { Heading, Text, FormControl } from "@chakra-ui/react";

import "./ChooseSize.css";
import heights from "./heights";
import widths from "./widths";
import prices from "./prices";

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
          padding: "0 10px",
        }}
      >
        {/* Height Dropdown */}
        <FormControl mr="4">
          <select
            type="select"
            style={{
              backgroundColor: "#C2B59C",
              height: "50px",
              padding: "0 30px",
              fontSize: "30px",
              fontWeight: "semibold",
              color: "white",
              borderRadius: "5px",
              width: "100%",
            }}
          >
            <option value="" disabled selected>
              Height
            </option>
            {heights.map((height) => (
              <option key={height}>{height}</option>
            ))}
          </select>
        </FormControl>
        {/* Width Dropdown */}
        <FormControl>
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
              width: "100%",
            }}
          >
            <option value="" disabled selected>
              Width
            </option>
            {widths.map((width) => (
              <option key={width}>{width}</option>
            ))}
          </select>
        </FormControl>
      </div>
      {/* Custom Size Checkbox */}
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
          {/* Custom Size Height Input */}
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
          {/* Custom Size Width Input */}
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
      {/* Hinge Drilling Checkbox */}
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
      {needsHingeDrilling ? (
        <>
          {/* Door Orientation */}
          <FormControl m="2">
            <select
              type="select"
              style={{
                backgroundColor: "#C2B59C",
                height: "50px",
                padding: "0 30px",
                fontSize: "30px",
                fontWeight: "semibold",
                color: "white",
                borderRadius: "5px",
                width: "49%",
              }}
            >
              <option value="" disabled selected>
                Orientation
              </option>
              <option>Top Hanging Door</option>
              <option>Left Hanging Door</option>
              <option>Right Hanging Door</option>
            </select>
          </FormControl>
          <div style={{ display: "flex" }}>
            {/* Extra Hole From Measurement */}
            <FormControl m="2" d="flex" width="100%">
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
            {/* Measurement from Top or Bottom */}
            <div style={{ margin: "8px" }}>
              <select
                type="select"
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
                  From
                </option>
                <option>Top</option>
                <option>Bottom</option>
              </select>
            </div>
          </div>
        </>
      ) : null}
      {/* Quantity Input */}
      <FormControl m="2">
        <input
          type="number"
          placeholder="Quantity"
          value=""
          style={{
            height: "50px",
            fontSize: "30px",
            textColor: "white",
            padding: "20px",
            borderRadius: "5px",
            width: "98.5%",
          }}
        />
      </FormControl>
      <Text fontSize="3xl" m="2">
        Price: <b>£300.40</b>
      </Text>
      <button
        style={{
          height: "50px",
          backgroundColor: "#C2B59C",
          color: "white",
          fontSize: "30px",
          marginLeft: "10px",
          borderRadius: "5px",
          padding: "0px 40px",
        }}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ChooseSize;
