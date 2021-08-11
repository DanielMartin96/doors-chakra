// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const drawersPhotos = importAll(
  require.context(
    "../../../assets/images/hingedrawersinternals/drawers",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const options = [
  {
    name: "300W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 33.4,
  },
  {
    name: "400W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 34.16,
  },
  {
    name: "450W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 34.41,
  },
  {
    name: "500W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 34.63,
  },
  {
    name: "600W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 35.01,
  },
  {
    name: "800W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 36.06,
  },
  {
    name: "900W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 36.55,
  },
  {
    name: "1000W Atira Standard Drawer",
    description:
      "Drawer height: 70mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["drawer.jpg"].default,
    price: 37.04,
  },
  {
    name: "1200W Atira Standard Drawer",
    description: "",
    src: drawersPhotos["drawer.jpg"].default,
    price: 40.74,
  },
  {
    name: "300W Silver S/C Atira Assembled Pan Drawer",
    description: "",
    src: drawersPhotos["drawer.jpg"].default,
    price: 37.42,
  },
  {
    name: "400W Silver S/C Atira Assembled Pan Drawer",
    description: "",
    src: drawersPhotos["drawer.jpg"].default,
    price: 38.54,
  },
  {
    name: "450W Silver S/C Atira Assembled Pan Drawer",
    description: "",
    src: drawersPhotos["drawer.jpg"].default,
    price: 571.72,
  },
  {
    name: "500W Atira High Sided Drawers",
    description:
      "Drawer height: 144mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 39.67,
  },
  {
    name: "600W Atira High Sided Drawers",
    description:
      "Drawer height: 144mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 40.68,
  },
  {
    name: "800W Atira High Sided Drawers",
    description:
      "Drawer height: 144mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 44.39,
  },
  {
    name: "900W Atira High Sided Drawers",
    description:
      "Drawer height: 144mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 45.05,
  },
  {
    name: "1000W Atira High Sided Drawers",
    description:
      "Drawer height: 144mm. Load Capacity: 30kg. Soft close runners with full 470mm extension. Each drawer pack includes: 1x Drawer, 1x Pair of runners, 2x Drawer front connectors, 2x Hettich covers, 1x Screw Pack (4x euro screws & 4x wood screws for runners, 4x wood screws for drawer front connectors)",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 45.63,
  },
  {
    name: "1200W Atira High Sided Drawers",
    description: "",
    src: drawersPhotos["large-drawer.jpg"].default,
    price: 50.2,
  },
];

module.exports = options;
