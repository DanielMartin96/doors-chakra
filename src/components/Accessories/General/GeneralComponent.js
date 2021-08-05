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

const GeneralComponent = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const [length, setLength] = useState(null);
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

  const onSubmit = (e, product) => {
    e.preventDefault();
    errors.length = 0;

    if (!ValidateQuantity(quantity)) {
      return;
    }

    if (product.customLength) {
      if (product.name.includes("Frieze Pelmet")) {
        // Work out price for Frieze Pelmet
        // 1000mm is 19.11
        // 1mm is 19.11/1000 = 0.01911
        // 0.01911 * mm
        let customTotal = length * 0.01911;
        let total = customTotal.toFixed(2) * quantity;
        addToCart({
          product: product.name,
          total: total.toFixed(2),
          quantity,
          length,
          src: product.src,
        });
        return;
      } else if (product.name.includes("PVC'd Plinth")) {
        // Work out price for PVC'd Plinth
        // Height doesn't effect
        console.log("PVC Plinth");
      }
    }
    let total = product.price * quantity;

    addToCart({
      product: product.name,
      total,
      quantity,
      src: product.src,
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
      mr="1"
      ml="1"
      mt="2"
      mb="2"
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
          height:"80px",
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {product.name}
      </Box>
      <Box bg="white" style={{ padding: "10px 10px 10px 10px" }}>
        <img src={product.src} alt={product.name} />
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
    <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        {product.description}
      </Box>
      {product.customLength ? (
        <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
          <label>Custom (mm) :</label>
          <NumberInput
            onChange={(e) => setLength(e)}
            min={product.min}
            max={product.max}
          >
            <NumberInputField placeholder={length} />
          </NumberInput>
        </Box>
      ) : null}

     
    </AccordionPanel>
  </AccordionItem>
</Accordion>
<Box bg="white" style={{ padding: "10px 10px 10px 10px" }}>
        <label>Quantity:</label>
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
          <b>£{(product.price * quantity).toFixed(2)}</b>
        </p>
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <Button
          style={{ backgroundColor: "#C2B59C", width: "100%", color: "white" }}
          onClick={(e) => onSubmit(e, product)}
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

export default GeneralComponent;
