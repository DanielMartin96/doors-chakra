import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import { BiBasket } from "react-icons/bi";

import TabsComponent from "./components/Tabs/TabsComponent";
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import ChooseSize from "./components/ChooseSize/ChooseSize";
import HingesDrawersAndInternals from "./components/HingesDrawersAndInternals/HingesDrawersAndInternals";
import Basket from "./components/Basket/Basket";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [colour, setColour] = useState("");
  const [style, setStyle] = useState("");
  const [basketOpen, setBasketOpen] = useState(false);
  // Cart
  const [cart, setCart] = useState([]);
  // Total
  const [total, setTotal] = useState(0.0);

  useEffect(() => {
    getCart();
    getTotal();
  }, []);

  console.log(cart);

  const addToCart = (item) => {
    window.localStorage.setItem(item.product, JSON.stringify(item));
    setCart((currentCart) => [...currentCart, item]);
    setTotal(total + +item.total);
    setBasketOpen(!basketOpen);
  };

  const removeFromCart = (id, item) => {
    window.localStorage.removeItem(item);
    setTotal(total - +cart[id].total);
    setCart((currentCart) => {
      return [...currentCart.slice(0, id), ...currentCart.slice(id + 1)];
    });
  };

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
      title: "Frames and Features",
      content: "Frames and features content",
    },
    {
      title: "Accessories",
      content: "Accessories content",
    },
    {
      title: "Hinges, Drawers and Internals",
      content: <HingesDrawersAndInternals />,
    },
    {
      title: "Checkout",
      content: "Checkout content",
    },
    {
      title: "",
      icon: <BiBasket />,
      content: "Basket content",
    },
  ];

  return (
    <Container maxW="container.xl" pt="2">
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
      />
    </Container>
  );
}

export default App;
