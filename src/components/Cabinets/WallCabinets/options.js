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
    "../../../assets/images/cabinets/wall",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const options = [
  {
    name: "720 Wall 300 Clicbox",
    price: 26.82,
    src: option["720 wall 300.jpg"].default,
  },
  {
    name: "720 Wall 400 Clicbox",
    price: 29.2,
    src: option["720 wall 400.jpg"].default,
  },
  {
    name: "720 Wall 450 Clicbox",
    price: 31.64,
    src: option["720 wall 450.jpg"].default,
  },
  {
    name: "720 Wall 500 Clicbox",
    price: 31.91,
    src: option["720 wall 500.jpg"].default,
  },
  {
    name: "720 Wall 600 Clicbox",
    price: 34.75,
    src: option["720 wall 600.jpg"].default,
  },
  {
    name: "720 Wall 700 Clicbox",
    price: 43.21,
    src: option["720 wall 700.jpg"].default,
  },
  {
    name: "720 Wall 800 Clicbox",
    price: 43.3,
    src: option["720 wall 800.jpg"].default,
  },
  {
    name: "720 Wall 900 Clicbox",
    price: 47.12,
    src: option["720 wall 900.jpg"].default,
  },
  {
    name: "720 Wall 1000 Clicbox",
    price: 49.17,
    src: option["720 wall 1000.jpg"].default,
  },
  {
    name: "900 Wall Unit 300 Clicbox",
    price: 29.03,
    src: option["900 wall unit 300.jpg"].default,
  },
  {
    name: "900 Wall Unit 400 Clicbox",
    price: 32.1,
    src: option["900 wall unit 400.jpg"].default,
  },
  {
    name: "900 Wall Unit 500 Clicbox",
    price: 35.53,
    src: option["900 wall unit 500.jpg"].default,
  },
  {
    name: "900 Wall Unit 600 Clicbox",
    price: 38.02,
    src: option["900 wall unit 600.jpg"].default,
  },
  {
    name: "900 Wall Unit 800 Clicbox",
    price: 48.98,
    src: option["900 wall unit 800.jpg"].default,
  },
  {
    name: "900 Wall Unit 1000 Clicbox",
    price: 54.1,
    src: option["900 wall unit 1000.jpg"].default,
  },
  {
    name: "900 Corner Wall Unit 628 Clicbox",
    price: 68.69,
    src: option["900 corner unit 628.jpg"].default,
  },
  {
    name: "720 Wall Corner 628 Clicbox",
    price: 65.18,
    src: option["720 wall corner 628.jpg"].default,
  },
  {
    name: "900 Corner Wall Unit 628 Clicbox",
    price: 68.69,
    src: option["900 corner unit 628.jpg"].default,
  },
  {
    name: "720 Wall Corner 628 ClicBox",
    price: 85.18,
    src: option["720 wall corner 628.jpg"].default,
  },
  {
    name: "360 Bridge 500 ClicBox",
    price: 22.24,
    src: option["360 bridge 500.jpg"].default,
  },
  {
    name: "360 Bridge 600 Clicbox",
    price: 24.31,
    src: option["360 bridge 600.jpg"].default,
  },
  {
    name: "360 Bridge 900 Clicbox",
    price: 30.04,
    src: option["360 bridge 900.jpg"].default,
  },
  {
    name: "720 Curved Wall 300 Clicbox",
    price: 31.01,
    src: option["720 curved wall 300.jpg"].default,
  },
];

module.exports = options;
