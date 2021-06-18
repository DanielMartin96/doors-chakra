import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import General from "./General/General";
import Kitchen from "./Kitchen/Kitchen";

const Accessories = ({ addToCart, colour, style }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    {
      title: "General",
      content: <General addToCart={addToCart} colour={colour} style={style} />,
    },
    {
      title: "Kitchen",
      content: <Kitchen addToCart={addToCart} colour={colour} style={style} />,
    },
  ];

  return (
    <>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </>
  );
};

export default Accessories;
