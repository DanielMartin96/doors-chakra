import React, { useState } from "react";

import TabsComponent from "../Tabs/TabsComponent";
import ShippingDetails from "./ShippingDetails";
import BillingDetails from "./BillingDetails";

const tabItems = [
  { title: "Shipping Details", content: <ShippingDetails /> },
  { title: "Billing Details", content: <BillingDetails /> },
];

const Checkout = ({ cart }) => {
  const [tabIndex, setTabIndex] = useState(0);

  console.log(cart);
  return (
    <>
      <TabsComponent tabItems={tabItems} setTabIndex={setTabIndex} />
    </>
  );
};

export default Checkout;
