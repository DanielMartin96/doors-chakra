import React, { useState } from "react";
import {
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  Text,
  FormControl,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const option = importAll(
  require.context(
    "../../assets/images/framesfeaturedoors/types",
    false,
    /.(png|jpe?g|svg)$/
  )
);

const frameTypes = [
  {
    name: "Open Frame",
    height: "H <= 1699mm",
    src: option["open-frame.jpg"].default,
  },
  {
    name: "Full Open Frame",
    height: "H >= 1700mm",
    src: option["full-open-frame.jpg"].default,
  },
  {
    name: "Top Open Frame",
    height: "H >= 1700mm",
    src: option["top-open-frame.jpg"].default,
  },
  {
    name: "T&B Open Frame",
    height: "H >= 1700mm",
    src: option["t&b-open-frame.jpg"].default,
  },
];

const glassFixingOptions = [
  {
    name: "Clips",
    src: option["clips.jpg"].default,
  },
  {
    name: "Rubber Seal",
    src: option["rubber-seal.jpg"].default,
  },
  {
    name: "Clear",
    src: option["clear.jpg"].default,
  },
];

const FramePage = ({ colour, style, src, title, addToCart }) => {
  const [height, setHeight] = useState(null);
  const [width, setWidth] = useState(null);
  // true = the grain going right to left, false = bottom to top
  const [grainDirection, setGrainDirection] = useState(false);
  const [frameType, setFrameType] = useState(null);
  const [glassFixingOption, setGlassFixingOption] = useState(null);

  console.log(height, width, grainDirection, frameType, glassFixingOption);

  const renderFrameTypes = () => {
    return frameTypes.map((type, idx) => {
      return (
        <div
          style={{
            textAlign: "center",
            cursor: "pointer",
            fontWeight: frameType === type.name ? "bold" : "normal",
          }}
          key={idx}
          onClick={() => setFrameType(type.name)}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={type.src} alt={type.name} />
          </div>
          <p>{type.name}</p>
          <p>{type.height}</p>
        </div>
      );
    });
  };

  const renderGlassFixingOptions = () => {
    return glassFixingOptions.map((type, idx) => {
      return (
        <div
          style={{
            textAlign: "center",
            cursor: "pointer",
            fontWeight: glassFixingOption === type.name ? "bold" : "normal",
          }}
          key={idx}
          onClick={() => setGlassFixingOption(type.name)}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <img src={type.src} alt={type.name} />
          </div>
          <p>{type.name}</p>
        </div>
      );
    });
  };

  return (
    <div>
      <div style={{ display: "flex" }}>
        <img
          src={src}
          alt={style}
          width="300px"
          style={{
            backgroundColor: "white",
            borderRadius: "10px",
            margin: "10px",
          }}
        />
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Heading m="2" as="h1" size="lg">
              {colour} {style} {title}
            </Heading>
            <Link to="/">
              <Button bg="#c2b59c" _hover={{ bg: "#58595b", color: "white" }}>
                Back
              </Button>
            </Link>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <FormControl w="45%">
              <NumberInput>
                <Text mb="8px" fontWeight="bold">
                  Height:
                </Text>
                <NumberInputField
                  placeholder="283mm - 2540mm"
                  bg="white"
                  onChange={(e) => setHeight(e.target.value)}
                />
              </NumberInput>
            </FormControl>
            <FormControl w="45%">
              <NumberInput>
                <Text mb="8px" fontWeight="bold">
                  Width:
                </Text>
                <NumberInputField
                  placeholder="296mm - 650mm"
                  bg="white"
                  onChange={(e) => setWidth(e.target.value)}
                />
              </NumberInput>
            </FormControl>
          </div>
          <input
            type="checkbox"
            style={{ margin: "10px" }}
            onChange={() => setGrainDirection(!grainDirection)}
          />
          <label>
            <b>Rotate Grain G = Grain Direction</b>
          </label>
          <Tabs variant="enclosed">
            <TabList>
              {title === "Open Frame" ? (
                <Tab bg="white" textColor="black">
                  <span style={{ color: "black", fontWeight: "bold" }}>
                    Frame Type
                  </span>
                </Tab>
              ) : null}

              <Tab bg="white" textColor="black">
                <span style={{ color: "black", fontWeight: "bold" }}>
                  Glass Fixing Options & Glazing
                </span>
              </Tab>
            </TabList>
            <TabPanels>
              {title === "Open Frame" ? (
                <TabPanel bg="white">
                  <div
                    style={{ display: "flex", justifyContent: "space-evenly" }}
                  >
                    {renderFrameTypes()}
                  </div>
                </TabPanel>
              ) : null}
              <TabPanel bg="white">
                <div
                  style={{ display: "flex", justifyContent: "space-evenly" }}
                >
                  {renderGlassFixingOptions()}
                </div>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <input type="checkbox" style={{ margin: "10px" }} />
          <label>
            <b>Add Hinge Holes</b>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FramePage;
