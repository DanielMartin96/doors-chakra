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
} from "@chakra-ui/react";

const KitchenComponent = ({ product, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
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

    addToCart({
      product: product.name,
      quantity,
      src: product.src,
      total: product.price * quantity,
    });

    setAddedToCart(true);

    setTimeout(() => {
      setAddedToCart(false);
    }, 3000);
  };

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
          padding: "5px",
        }}
      >
        {product.name}
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        <img src={product.src} alt={product.name} />
      </Box>
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
        {product.description}
      </Box>

      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
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
      <Box bg="white" style={{ padding: "0px 10px 10px 10px" }}>
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

export default KitchenComponent;
