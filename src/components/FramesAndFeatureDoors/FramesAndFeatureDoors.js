import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import FramePage from "./FramePage";

// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const frames = importAll(
  require.context(
    "../../assets/images/framesfeaturedoors",
    false,
    /.(png|jpe?g|svg)$/
  )
);

const icons = [
  {
    name: "Open Frame",
    slug: "open-frame",
    src: frames["open-frame.png"].default,
  },
  {
    name: "Georgian Frame",
    slug: "georgian-frame",
    src: frames["georgian-frame.png"].default,
  },
  {
    name: "Wave Frame",
    slug: "wave-frame",
    src: frames["wave-frame.png"].default,
  },
  {
    name: "Porthole Frame",
    slug: "porthole-frame",
    src: frames["porthole-frame.png"].default,
  },
  {
    name: "Square Hole Frame",
    slug: "square-hole-frame",
    src: frames["open-frame.png"].default,
  },
  {
    name: "Five Hole Frame",
    slug: "five-hole-frame",
    src: frames["five-hole-frame.png"].default,
  },
  {
    name: "Letter Box Frame",
    slug: "letter-box-frame",
    src: frames["letter-box-frame.png"].default,
  },
  {
    name: "Drawer Frame",
    slug: "drawer-frame",
    src: frames["drawer-frame.png"].default,
  },
];

const FramesAndFeatureDoors = ({ colour, style }) => {
  const [menuHidden, hideMenu] = useState(false);

  return (
    <>
      <div
        onClick={() => hideMenu(!menuHidden)}
        style={{
          display: menuHidden ? "none" : "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {icons.map((icon) => {
          return (
            <Link to={`/${icon.slug}`}>
              <Box
                w="200px"
                d="flex"
                flexWrap="wrap"
                flexDirection="column"
                textAlign="center"
                m="2"
                style={{ cursor: "pointer" }}
              >
                <Box
                  style={{
                    backgroundColor: "#808080",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                    color: "white",
                    fontSize: "16px",
                    fontWeight: "bold",
                    padding: "5px 0",
                  }}
                >
                  {icon.name}
                </Box>
                <Box bg="white" p="4">
                  <img src={icon.src} alt={icon.name} />
                </Box>
              </Box>
            </Link>
          );
        })}
      </div>
      <Switch>
        <Route path="/open-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["open-frame.png"].default}
            title="Open Frame"
          />
        </Route>
        <Route path="/georgian-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["georgian-frame.png"].default}
            title="Georgian Frame"
          />
        </Route>
        <Route path="/wave-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["wave-frame.png"].default}
            title="Wave Frame"
          />
        </Route>
        <Route path="/porthole-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["porthole-frame.png"].default}
            title="Porthole Frame"
          />
        </Route>
        <Route path="/square-hole-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["square-hole-frame.png"].default}
            title="Square Hole Frame"
          />
        </Route>
        <Route path="/five-hole-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["five-hole-frame.png"].default}
            title="Five Hole Frame"
          />
        </Route>
        <Route path="/letter-box-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["letter-box-frame.png"].default}
            title="Letter Box Frame"
          />
        </Route>
        <Route path="/drawer-frame">
          <FramePage
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
            src={frames["drawer-frame.png"].default}
            title="Drawer Frame"
          />
        </Route>
      </Switch>
    </>
  );
};

export default FramesAndFeatureDoors;
