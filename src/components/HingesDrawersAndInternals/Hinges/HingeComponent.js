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
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

const HingeComponent = ({ hinge, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
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

  const onSubmit = (e, hinge) => {
    e.preventDefault();
    errors.length = 0;

    if (colour.length === 0) {
      return setErrors([...errors, "Please pick a colour"]);
    }

    if (!ValidateQuantity(quantity)) {
      return;
    }

    addToCart({
      product: hinge.name,
      colour,
      quantity,
      src: hinge.src,
      total: hinge.price * quantity,
    });

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

  return (
    <Box
      maxW="230px"
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
          padding: "5px",
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {hinge.name}
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <img src={hinge.src} alt={hinge.name} />
      </Box>


      <Accordion allowToggle bg="white">
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          Product Information
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pt="8">
  

    <Box bg="white" style={{ padding: "10px 10px 10px 10px" }}>
        {hinge.description}
      </Box>
      <Box
        bg="white"
        style={{ padding: "0px 10px 10px 10px" }}
        d="flex"
        justifyContent="center"
      >
        {["Silver", "Black"].map((colour) => {
          return (
            <div style={{ margin: " 0 5px" }} key={colour}>
              <input
                type="radio"
                name="colour"
                id={colour}
                onChange={() => setColour(colour)}
                style={{ marginRight: "5px" }}
              />
              <label htmlFor={colour}>{colour}</label>
            </div>
          );
        })}
      </Box>
    </AccordionPanel>
  </AccordionItem>
</Accordion>

      <Box bg="white" style={{ padding: "10px 10px 10px 10px" }}>
        <NumberInput onChange={(e) => setQuantity(e)} min={1}>
          <NumberInputField placeholder={quantity} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <p>
          <b>£{(hinge.price * quantity).toFixed(2)}</b>
        </p>
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <Button
          style={{ backgroundColor: "#C2B59C", width: "100%", color: "white" }}
          onClick={(e) => onSubmit(e, hinge)}
        >
          Add To Cart
        </Button>
      </Box>
      <Box
        bg="white"
        style={{
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
          padding: "10px",
        }}
      >
        {errors.length > 0
          ? errors.map((error) => {
              return (
                <Alert status="error">
                  <AlertIcon />
                  {error}
                </Alert>
              );
            })
          : null}

        {addedToCart ? (
          <Alert status="success">
            <AlertIcon />
            Added to Basket
          </Alert>
        ) : null}
      </Box>
    </Box>
  );
};

export default HingeComponent;
