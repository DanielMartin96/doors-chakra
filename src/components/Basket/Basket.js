import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
} from "@chakra-ui/react";

import Item from "./Item";

const Basket = ({ basketOpen, setBasketOpen, cart, removeFromCart }) => {
  console.log(cart);

  return (
    <>
      <Drawer
        isOpen={basketOpen}
        placement="right"
        onClose={() => setBasketOpen(!basketOpen)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Basket</DrawerHeader>

          <DrawerBody>
            {cart.map((item, idx) => (
              <Item item={item} removeFromCart={removeFromCart} idx={idx} />
            ))}
          </DrawerBody>

          <DrawerFooter>
            <Button
              variant="outline"
              mr={3}
              onClick={() => setBasketOpen(!basketOpen)}
            >
              Cancel
            </Button>
            <Button colorScheme="dark" variant="outline">
              Checkout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Basket;
