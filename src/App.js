import React, { useState } from "react";
import { Container } from "@chakra-ui/react";
import { BiBasket } from "react-icons/bi";

import TabsComponent from "./components/Tabs/TabsComponent";
import ChooseColour from "./components/ChooseColour/ChooseColour";
import ChooseStyle from "./components/ChooseStyle/ChooseStyle";
import ChooseSize from "./components/ChooseSize/ChooseSize";
import Basket from "./components/Basket/Basket";

function App() {
  const [tabIndex, setTabIndex] = useState(0);
  const [colour, setColour] = useState("");
  const [style, setStyle] = useState("");
  const [basketOpen, setBasketOpen] = useState(false);

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
      content: <ChooseSize colour={colour} style={style} />,
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
      content: "Hinges, Drawers and Internals content",
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
      <Basket basketOpen={basketOpen} setBasketOpen={setBasketOpen} />
    </Container>
  );
}

export default App;
