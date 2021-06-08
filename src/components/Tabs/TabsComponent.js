import React, { useEffect } from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";

import "./TabsComponent.css";

const TabsComponent = ({
  tabItems,
  tabIndex,
  setTabIndex,
  basketOpen,
  setBasketOpen,
  colour,
  style,
}) => {
  const tabValidation = (item) => {
    if (item.title === "Style" && colour.length === 0) {
      return true;
    }

    if (item.title === "Size" && style.length === 0) {
      return true;
    }

    return false;
  };

  return (
    <Tabs index={tabIndex}>
      <TabList
        style={{
          borderBottom: "10px solid #C2B59C",
        }}
      >
        {tabItems.map((item, idx) => (
          <Tab
            key={idx}
            className="tab"
            _selected={{
              backgroundColor: "#C2B59C",
            }}
            style={{
              padding: "2px 35.56px",
            }}
            onClick={() => {
              if (item.title.length === 0) {
                setBasketOpen(!basketOpen);
                return;
              }
              setTabIndex(idx);
            }}
            isDisabled={tabValidation(item)}
          >
            {item.title}
            <i style={{ fontSize: "30px" }}>{item.icon}</i>
          </Tab>
        ))}
      </TabList>
      <TabPanels>
        {tabItems.map((item, idx) => (
          <TabPanel
            style={{
              padding: "10px",
              backgroundColor: "#E7E7E7",
              minWidth: "100%",
            }}
            key={idx}
          >
            {item.content}
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default TabsComponent;
