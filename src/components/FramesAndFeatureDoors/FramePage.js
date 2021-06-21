import React from "react";
import {
  Button,
  Heading,
  NumberInput,
  NumberInputField,
  Text,
  FormControl,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const FramePage = ({ colour, style, menuHidden, hideMenu, src, title }) => {
  return (
    <div>
      <div style={{ display: "flex" }}>
        <img src={src} alt="Open Frame" width="300px" />
        <div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <Heading m="2">
              {colour} {style} {title}
            </Heading>
            <Link to="/" onClick={() => hideMenu(!menuHidden)}>
              <Button
                bg="#c2b59c"
                _hover={{ bg: "#58595b", color: "white" }}
                p="10"
                m="2"
              >
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
                <NumberInputField placeholder="283mm - 2540mm" bg="white" />
              </NumberInput>
            </FormControl>
            <FormControl w="45%">
              <NumberInput>
                <Text mb="8px" fontWeight="bold">
                  Width:
                </Text>
                <NumberInputField placeholder="296mm - 650mm" bg="white" />
              </NumberInput>
            </FormControl>
          </div>
          <input type="checkbox" style={{ margin: "10px" }} />
          <label>
            <b>Rotate Grain G = Grain Direction</b>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FramePage;
