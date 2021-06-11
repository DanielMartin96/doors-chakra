import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import General from "./General/General";

const Accessories = ({ addToCart, colour, style }) => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabItems = [
    {
      title: "General",
      content: <General addToCart={addToCart} colour={colour} style={style} />,
    },
    { title: "Internals", content: "Internals" },
  ];

  return (
    <>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </>
  );
};

export default Accessories;
