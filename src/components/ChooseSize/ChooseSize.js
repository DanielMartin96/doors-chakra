import React, { useState, useEffect } from "react";
import {
  Heading,
  Text,
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from "@chakra-ui/react";

import "./ChooseSize.css";
import heights from "./heights";
import widths from "./widths";
import prices from "./prices";

const ChooseSize = ({ colour, style, addToCart }) => {
  const [needsCustomSize, setNeedsCustomSize] = useState(false);
  const [needsHingeDrilling, setNeedsHingeDrilling] = useState(false);
  const [needsExtraHingeHoles, setNeedsExtraHingeHoles] = useState(false);
  // Holds all the info for the order
  const [order, setOrder] = useState({
    standardHeight: null,
    standardWidth: null,
    customHeight: null,
    customWidth: null,
    sideHingeHoles: null,
    topHingeHole: null,
    bottomHingeHole: null,
    extraHingeHoleSide: null,
    extraHingeHoleDistance: null,
    quantity: 1,
    total: 0,
  });

  // Takes a value and finds the next size up in the array. Will need this information to find the relevant price
  const findNextSizeUp = (value, array) => {
    for (let i = 0; i < array.length; i++) {
      if (value <= array[i]) {
        return array[i];
      }
    }

    return;
  };

  // Takes the height and width from the component state and finds the price from the prices array
  const findPrice = (height, width, array) => {
    for (let i = 0; i < array.length; i++) {
      if (height === array[i].height && width === array[i].width) {
        return array[i];
      }
    }

    return;
  };

  // sets height on the standard dropdowns
  const onHeightStandardChange = (height) => {
    // sets height,
    setOrder({ ...order, standardHeight: height });

    return;
  };

  // runs when order.height state updates
  // where the total updates. Takes the new order.height and the current order.width, finds the price and multiplies it by the current order.quantity
  useEffect(() => {
    if (order.standardWidth === null) return;

    const price = findPrice(
      +order.standardHeight,
      +order.standardWidth,
      prices
    ).price;
    setOrder({ ...order, price, total: price * order.quantity });

    return;
  }, [order.standardHeight]);

  // sets height on the standard dropdowns
  const onWidthStandardChange = (width) => {
    // sets height,
    setOrder({ ...order, standardWidth: width });

    return;
  };

  // runs when order.width state updates
  // where the total updates. Takes the new order.width and the current order.height, finds the price and multiplies it by the current order.quantity
  useEffect(() => {
    if (order.standardHeight === null) return;

    const price = findPrice(
      +order.standardHeight,
      +order.standardWidth,
      prices
    ).price;
    setOrder({ ...order, price, total: price * order.quantity });

    return;
  }, [order.standardWidth]);

  // when the quantity input changes, finds new price
  useEffect(() => {
    if (order.standardHeight === null || order.standardWidth === null) return;
    if (!needsCustomSize)
      setOrder({ ...order, customHeight: null, customWidth: null });

    setOrder({ ...order, total: order.price * order.quantity });

    return;
  }, [order.quantity]);

  return (
    <div>
      <Heading as="h1" fontSize="4xl" mb="3">
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
            onChange={(e) => {
              onHeightStandardChange(e.target.value);
            }}
            disabled={needsCustomSize}
            defaultValue="Height"
          >
            <option disabled>Height</option>
            {heights.map((height) => (
              <option value={height} key={height}>
                {height}
              </option>
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
            onChange={(e) => {
              onWidthStandardChange(e.target.value);
            }}
            disabled={needsCustomSize}
            defaultValue="Width"
          >
            <option disabled>Width</option>
            {widths.map((width) => (
              <option value={width} key={width}>
                {width}
              </option>
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
              onChange={(e) => {
                setOrder({
                  ...order,
                  customHeight: e.target.value,
                  standardHeight: findNextSizeUp(e.target.value, heights),
                });
              }}
              min="100"
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
              style={{
                height: "50px",
                fontSize: "30px",
                textColor: "white",
                padding: "20px",
                borderTopLeftRadius: "5px",
                borderBottomLeftRadius: "5px",
                width: "85%",
              }}
              onChange={(e) => {
                setOrder({
                  ...order,
                  customWidth: e.target.value,
                  standardWidth: findNextSizeUp(e.target.value, widths),
                });
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
              onChange={(e) =>
                setOrder({ ...order, sideHingeHoles: e.target.value })
              }
              defaultValue="Orientation"
            >
              <option disabled>Orientation</option>
              <option>Top Hanging Door</option>
              <option>Left Hanging Door</option>
              <option>Right Hanging Door</option>
            </select>
          </FormControl>
          <div style={{ display: "flex" }}>
            <FormControl m="2" d="flex">
              <input
                type="number"
                placeholder="Top Hole"
                style={{
                  height: "50px",
                  fontSize: "30px",
                  textColor: "white",
                  padding: "20px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  width: "85%",
                }}
                onChange={(e) =>
                  setOrder({ ...order, topHingeHole: e.target.value })
                }
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
                placeholder="Bottom Hole"
                style={{
                  height: "50px",
                  fontSize: "30px",
                  textColor: "white",
                  padding: "20px",
                  borderTopLeftRadius: "5px",
                  borderBottomLeftRadius: "5px",
                  width: "85%",
                }}
                onChange={(e) =>
                  setOrder({ ...order, bottomHingeHole: e.target.value })
                }
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
          {/* Extra Hinge Hole Checkbox */}
          <FormControl m="2">
            <div style={{ display: "flex", alignItems: "center" }}>
              <Text fontSize="xl" mr="2">
                Do you need an extra hinge hole?
              </Text>
              <input
                type="checkbox"
                onChange={() => setNeedsExtraHingeHoles(!needsExtraHingeHoles)}
              />
            </div>
          </FormControl>
          {needsExtraHingeHoles ? (
            <div style={{ display: "flex" }}>
              {/* Extra Hole From Measurement */}
              <FormControl m="2" d="flex" width="100%">
                <input
                  type="number"
                  placeholder="Extra Hole"
                  style={{
                    height: "50px",
                    fontSize: "30px",
                    textColor: "white",
                    padding: "20px",
                    borderTopLeftRadius: "5px",
                    borderBottomLeftRadius: "5px",
                    width: "85%",
                  }}
                  onChange={(e) =>
                    setOrder({
                      ...order,
                      extraHingeHoleDistance: e.target.value,
                    })
                  }
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
                  onChange={(e) =>
                    setOrder({ ...order, extraHingeHoleSide: e.target.value })
                  }
                >
                  <option disabled>From</option>
                  <option>Top</option>
                  <option>Bottom</option>
                </select>
              </div>
            </div>
          ) : null}
        </>
      ) : null}
      {/* Quantity Input */}
      <FormControl m="2">
        <NumberInput
          style={{ width: "98.5%" }}
          min={1}
          onChange={(e) => {
            if (e < 0) {
              return;
            }
            setOrder({ ...order, quantity: e });
          }}
        >
          <NumberInputField
            style={{
              height: "50px",
              fontSize: "30px",
              textColor: "white",
              padding: "20px",
              borderRadius: "5px",
              backgroundColor: "white",
            }}
            value={order.quantity}
            placeholder="1"
          />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </FormControl>
      <Text fontSize="3xl" m="2">
        Price: <b>£{order.total.toFixed(2)}</b>
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
        onClick={() => addToCart({ ...order, colour, style })}
      >
        Add to Basket
      </button>
    </div>
  );
};

export default ChooseSize;
