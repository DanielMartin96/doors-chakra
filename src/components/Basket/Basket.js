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

const Basket = ({ basketOpen, setBasketOpen, cart, removeFromCart, total }) => {
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
          <DrawerHeader>
            <b>Your Basket</b>
          </DrawerHeader>

          <DrawerBody
            style={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              overflowY: "scroll",
            }}
          >
            {cart.map((item, idx) => (
              <Item
                item={item}
                removeFromCart={removeFromCart}
                idx={idx}
                key={idx}
              />
            ))}
          </DrawerBody>

          <DrawerFooter style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: "24px" }}>
              Total: <b>£{total < 0 ? 0 : total.toFixed(2)}</b>
            </div>
            <br />
            <div>
              <Button mr={3} onClick={() => setBasketOpen(!basketOpen)}>
                Cancel
              </Button>
              <Button colorScheme="blackAlpha">Checkout</Button>
            </div>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Basket;
