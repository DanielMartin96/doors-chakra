import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import "./TabsComponent.css";

const TabsComponent = ({ tabItems, tabIndex }) => {
  return (
    <Tabs isFitted defaultIndex={tabIndex}>
      <TabList style={{ borderBottom: "10px solid #C2B59C" }}>
        {tabItems.map((item) => (
          <Tab
            key={item.title}
            className="tab"
            _selected={{
              backgroundColor: "#C2B59C",
            }}
            style={{
              padding: "5px 15px",
            }}
          >
            {item.title}
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabItems.map((item) => (
          <TabPanel
            style={{ padding: "10px", backgroundColor: "#E7E7E7" }}
            key={item.content}
          >
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
