import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import BaseCabinets from "./BaseCabinets/BaseCabinets";
import WallCabinets from "./WallCabinets/WallCabinets";
import TallCabinets from "./TallCabinets/TallCabinets";

const Cabinets = ({ addToCart }) => {
  const [tabIndex, setTabIndex] = useState(0);

  const tabItems = [
    {
      title: "Base Cabinets",
      content: <BaseCabinets addToCart={addToCart} />,
    },
    {
      title: "Wall Cabinets",
      content: <WallCabinets addToCart={addToCart} />,
    },
    {
      title: "Tall Cabinets",
      content: <TallCabinets addToCart={addToCart} />,
    },
  ];

  return (
    <div>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </div>
  );
};

export default Cabinets;
