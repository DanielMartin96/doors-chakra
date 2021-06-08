import React, { useState } from "react";
import {
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  Alert,
  AlertIcon,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";

const HingeComponent = ({ hinge }) => {
  const [quantity, setQuantity] = useState(0);
  const [colour, setColour] = useState("");
  const [errors, setErrors] = useState([]);
  const [addedToCart, setAddedToCart] = useState(false);

  const ValidateQuantity = (value) => {
    if (isNaN(value)) {
      setErrors([...errors, "Quantity is not a number"]);
      return false;
    }
    if (parseInt(value) < 1) {
      setErrors([...errors, "Quantity must be greater than 0"]);
      return false;
    }
    return true;
  };

  const onSubmit = (e, product, price, quantity) => {};

  return (
    <Box
      maxW="250px"
      d="flex"
      flexWrap="wrap"
      flexDirection="column"
      textAlign="center"
      m="2"
    >
      <Box
        style={{
          backgroundColor: "#808080",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          color: "white",
          fontSize: "16px",
          fontWeight: "bold",
          padding: "5px 0",
        }}
      >
        {hinge.name}
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <img src={hinge.src} alt={hinge.name} />
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        {hinge.description}
      </Box>

      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <NumberInput>
          <NumberInputField placeholder="Quantity" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <Button
          style={{ backgroundColor: "#C2B59C", width: "100%", color: "white" }}
        >
          Add To Cart
        </Button>
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <Alert status="error">
          <AlertIcon />
          Quantity has to be more than 0
        </Alert>
        <Alert status="success">
          <AlertIcon />
          Added to Basket
        </Alert>
      </Box>
    </Box>
  );
};

export default HingeComponent;
