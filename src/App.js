import React, { useState } from "react";
import { Container } from "@chakra-ui/react";

import TabsComponent from "./components/Tabs/TabsComponent";
import ChooseColour from "./components/ChooseColour/ChooseColour";

function App() {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    {
      title: "Colour",
      content: <ChooseColour setTabIndex={setTabIndex} />,
    },
    {
      title: "Style",
      content: "Style content",
    },
    {
      title: "Size",
      content: "Size content",
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
  ];

  return (
    <Container maxW="container.xl" pt="2">
      <TabsComponent tabItems={tabItems} tabIndex={tabIndex} />
    </Container>
  );
}

export default App;
