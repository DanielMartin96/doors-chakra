import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import BaseCabinets from "./BaseCabinets/BaseCabinets";
import WallCabinets from "./WallCabinets/WallCabinets";
import TallCabinets from "./TallCabinets/TallCabinets";

const tabItems = [
  {
    title: "Base Cabinets",
    content: <BaseCabinets />,
  },
  {
    title: "Wall Cabinets",
    content: <WallCabinets />,
  },
  {
    title: "Tall Cabinets",
    content: <TallCabinets />,
  },
];

const Cabinets = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </div>
  );
};

export default Cabinets;
