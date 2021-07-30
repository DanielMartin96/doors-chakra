import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { BiBasket } from "react-icons/bi";
import { BrowserRouter as Router } from "react-router-dom";

import TabsComponent from "./components/Tabs/TabsComponent";
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import ChooseSize from "./components/ChooseSize/ChooseSize";
import Accessories from "./components/Accessories/Accessories";
import HingesDrawersAndInternals from "./components/HingesDrawersAndInternals/HingesDrawersAndInternals";
import Cabinets from "./components/Cabinets/Cabinets";
import Checkout from "./components/Checkout/Checkout";
import Basket from "./components/Basket/Basket";
import Layout from "./components/Layout/Layout";

const App = () => {
  // The index of the active tabs. 0 is the first tab
  const [tabIndex, setTabIndex] = useState(0);
  // The colour of the door, gets picked in the ChooseColour section
  const [colour, setColour] = useState("");
  // The style of the door, gets picked in the ChooseStyle section
  const [style, setStyle] = useState("");
  // Whether the basket is open
  const [basketOpen, setBasketOpen] = useState(false);
  // Cart
  const [cart, setCart] = useState([]);
  // Total
  const [total, setTotal] = useState(0);

  // Runs these functions on page load
  useEffect(() => {
    getCart();
    getTotal();
  }, []);

  // Adds item to local storage and also adds it to the cart array
  const addToCart = (item) => {
    window.localStorage.setItem(item.product, JSON.stringify(item));
    setCart((currentCart) => [...currentCart, item]);
    setTotal(total + +item.total);
    setBasketOpen(!basketOpen);
  };

  // Removes item from local storage and also removes it from the cart array
  const removeFromCart = (id, item) => {
    window.localStorage.removeItem(item);
    setTotal(total - +cart[id].total);
    setCart((currentCart) => {
      return [...currentCart.slice(0, id), ...currentCart.slice(id + 1)];
    });
  };

  // Gets all the items out of local storage and sets it in the cart
  const getCart = () => {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }
    let array = [];

    for (let i = 0; i < values.length; i++) {
      array.push(JSON.parse(values[i]));
    }
    return setCart(array);
  };

  // Loops through all the cart and gets the total
  const getTotal = () => {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(localStorage.getItem(keys[i]));
    }

    let totals = [];
    for (let i = 0; i < values.length; i++) {
      totals.push(JSON.parse(values[i]).total);
    }

    if (values.length > 0) {
      let totalBasket = totals.reduce((acc, curr) => +acc + +curr);
      setTotal(+totalBasket);
    }

    return;
  };

  // The items in the tab at the top of the screem
  const tabItems = [
    {
      title: "Colour",
      content: <ChooseColour setTabIndex={setTabIndex} setColour={setColour} />,
    },
    {
      title: "Style",
      content: (
        <ChooseStyle
          setTabIndex={setTabIndex}
          colour={colour}
          setStyle={setStyle}
        />
      ),
    },
    {
      title: "Size",
      content: (
        <ChooseSize colour={colour} style={style} addToCart={addToCart} />
      ),
    },
    {
      title: "Accessories",
      content: (
        <Accessories colour={colour} style={style} addToCart={addToCart} />
      ),
    },
    {
      title: "Hinges, Drawers and Internals",
      content: <HingesDrawersAndInternals addToCart={addToCart} />,
    },
    {
      title: "Cabinets",
      content: <Cabinets addToCart={addToCart} />,
    },
    {
      title: "Checkout",
      content: <Checkout cart={cart} />,
    },
    {
      title: "",
      icon: <BiBasket />,
      content: "Basket content",
    },
  ];

  // What is shown on the screen
  return (
    <Layout>
      <Container maxWidth="100%" pt="8" pb="2">
        <TabsComponent
          tabItems={tabItems}
          tabIndex={tabIndex}
          setTabIndex={setTabIndex}
          basketOpen={basketOpen}
          setBasketOpen={setBasketOpen}
          colour={colour}
          style={style}
        />
        <Basket
          basketOpen={basketOpen}
          setBasketOpen={setBasketOpen}
          cart={cart}
          removeFromCart={removeFromCart}
          total={total}
        />
      </Container>
    </Layout>
  );
};

export default App;
