import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import OpenFrame from "./Frames/OpenFrame";
import GeorgianFrame from "./Frames/GeorgianFrame";
import WaveFrame from "./Frames/WaveFrame";
import PortholeFrame from "./Frames/PortfolioFrame";
import SquareHoleFrame from "./Frames/SquareHoleFrame";
import FiveHoleFrame from "./Frames/FiveHoleFrame";
import LetterBoxFrame from "./Frames/LetterBoxFrame";
import DrawerFrame from "./Frames/DrawerFrame";

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
    <Router>
      <div
        onClick={() => hideMenu(!menuHidden)}
        style={{ display: menuHidden ? "none" : "flex" }}
      >
        {icons.map((icon) => {
          return (
            <Link to={`/${icon.slug}`}>
              <Box
                maxW="sm"
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
          <OpenFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/georgian-frame">
          <GeorgianFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/wave-frame">
          <WaveFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/porthole-frame">
          <PortholeFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/square-hole-frame">
          <SquareHoleFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/five-hole-frame">
          <FiveHoleFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/letter-box-frame">
          <LetterBoxFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
        <Route path="/drawer-frame">
          <DrawerFrame
            colour={colour}
            style={style}
            menuHidden={menuHidden}
            hideMenu={hideMenu}
          />
        </Route>
      </Switch>
    </Router>
  );
};

export default FramesAndFeatureDoors;
