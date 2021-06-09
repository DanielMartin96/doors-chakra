import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import Hinges from "./Hinges/Hinges";

const HingesDrawersAndInternals = ({ addToCart }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    { title: "Hinges", content: <Hinges addToCart={addToCart} /> },
    { title: "Drawers", content: "Drawers" },
    { title: "Internals", content: "Internals" },
  ];

  return (
    <>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </>
  );
};

export default HingesDrawersAndInternals;
