import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import Hinges from "./Hinges/Hinges";

const tabItems = [
  { title: "Hinges", content: <Hinges /> },
  { title: "Drawers", content: "Drawers" },
  { title: "Internals", content: "Internals" },
];

const HingesDrawersAndInternals = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </>
  );
};

export default HingesDrawersAndInternals;
