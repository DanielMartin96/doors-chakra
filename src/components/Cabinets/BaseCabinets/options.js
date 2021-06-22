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
    "../../../assets/images/cabinets/base",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const options = [
  {
    name: "720 Base DD 150 Clicbox",
    price: 38.51,
    src: option["base dd 150.jpg"].default,
  },
  {
    name: "720 Base DD 300 Clicbox",
    price: 33.75,
    src: option["base dd 300.jpg"].default,
  },
  {
    name: "720 Base DD 400 Clicbox",
    price: 35.97,
    src: option["base dd 400.jpg"].default,
  },
  {
    name: "720 Base DD 450 Clicbox",
    price: 38.51,
    src: option["base dd 450.jpg"].default,
  },
  {
    name: "720 Base DD 500 Clicbox",
    price: 38.62,
    src: option["base dd 500.jpg"].default,
  },
  {
    name: "720 Base DD 600 Clicbox",
    price: 40.85,
    src: option["base dd 600.jpg"].default,
  },
  {
    name: "720 Base DD 700 Clicbox",
    price: 55.03,
    src: option["base dd 700.jpg"].default,
  },
  {
    name: "720 Base DD 800 Clicbox",
    price: 55.23,
    src: option["base dd 800.jpg"].default,
  },
  {
    name: "720 Base DD 900 Clicbox",
    price: 59.05,
    src: option["base dd 900.jpg"].default,
  },
  {
    name: "720 Base DD 1000 Clicbox",
    price: 59.05,
    src: option["base dd 1000.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 300 Clicbox",
    price: 32.05,
    src: option["base full drawer 300.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 400 Clicbox",
    price: 34.15,
    src: option["base full drawer 400.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 450 Clicbox",
    price: 36.58,
    src: option["base full drawer 450.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 500 Clicbox",
    price: 36.85,
    src: option["base full drawer 500.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 600 Clicbox",
    price: 38.51,
    src: option["base full drawer 600.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 800 Clicbox",
    price: 45.26,
    src: option["base full drawer 800.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 900 Clicbox",
    price: 47.07,
    src: option["base full drawer 900.jpg"].default,
  },
  {
    name: "720 Base Full Drawer 1000 Clicbox",
    price: 49.09,
    src: option["base full drawer 1000.jpg"].default,
  },
  {
    name: "720 Base Corner 928 ClicBox",
    price: 85.18,
    src: option["base corner 928.jpg"].default,
  },
  {
    name: "720 Base Under Oven 600 ClicBox",
    price: 44.57,
    src: option["base under oven 600.jpg"].default,
  },
  {
    name: "720 Curved Base 300 Clicbox",
    price: 71.7,
    src: option["720 curbed base 300.jpg"].default,
  },
];

module.exports = options;
