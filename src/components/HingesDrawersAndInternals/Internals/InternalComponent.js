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
  Select,
} from "@chakra-ui/react";

const InternalComponent = ({ internal, addToCart }) => {
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

  const onSubmit = (e, internal) => {
    e.preventDefault();
    errors.length = 0;

    if (colour.length === 0) {
      return setErrors([...errors, "Please pick a colour"]);
    }

    if (!ValidateQuantity(quantity)) {
      return;
    }

    addToCart({
      product: internal.name,
      colour,
      quantity,
      src: internal.src,
      total: internal.price * quantity,
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
        }}
      >
        {internal.name}
      </Box>
      <Box bg="white" style={{ padding: "10px" }}>
        <img src={internal.src} alt={internal.name} />
      </Box>
      <Box bg="white" style={{ padding: "10px" }}>
        {internal.description}
      </Box>
      <Box
        bg="white"
        style={{ padding: "10px" }}
        d="flex"
        justifyContent="center"
      >
        {["Grey", "White"].map((colour) => {
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

      <Box bg="white" style={{ padding: "10px" }}>
        <Select placeholder="Swivel Direction">
          <option value="left">Left</option>
          <option value="right">Right</option>
        </Select>
      </Box>

      <Box bg="white" style={{ padding: "10px" }}>
        <Select placeholder="For Cabinet Width">
          <option value="800">800mm</option>
          <option value="900">900mm</option>
          <option value="1000">1000mm</option>
        </Select>
      </Box>

      <Box bg="white" style={{ padding: "10px" }}>
        <Select placeholder="For Door Width">
          <option value="380">380mm</option>
          <option value="430">430mm</option>
          <option value="480">480mm</option>
          <option value="580">580mm</option>
        </Select>
      </Box>

      <Box bg="white" style={{ padding: "10px" }}>
        <NumberInput onChange={(e) => setQuantity(e)} min={1}>
          <NumberInputField placeholder={quantity} />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Box>

      <Box bg="white" style={{ padding: "10px" }}>
        <p>
          <b>£{(internal.price * quantity).toFixed(2)}</b>
        </p>
      </Box>
      <Box bg="white" style={{ padding: "10px" }}>
        <Button
          style={{ backgroundColor: "#C2B59C", width: "100%", color: "white" }}
          onClick={(e) => onSubmit(e, internal)}
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

export default InternalComponent;
