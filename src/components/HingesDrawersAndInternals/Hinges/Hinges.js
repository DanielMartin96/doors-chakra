import React from "react";

import options from "./options";
import HingeComponent from "./HingeComponent";
import HingesDrawersAndInternals from "../HingesDrawersAndInternals";

const Hinges = () => {
  console.log(options);
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {options.map((hinge) => (
        <HingeComponent hinge={hinge} />
      ))}
    </div>
  );
};

export default Hinges;
