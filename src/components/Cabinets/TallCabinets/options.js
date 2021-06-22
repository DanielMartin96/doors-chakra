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
    "../../../assets/images/cabinets/tall",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const options = [
  {
    name: "1970 Larder Tall 300 Clicbox",
    price: 83.42,
    src: option["1970 larder tall 300.jpg"].default,
  },
  {
    name: "1970 Larder Tall 400 Clicbox",
    price: 93.07,
    src: option["1970 larder tall 400.jpg"].default,
  },
  {
    name: "1970 Larder Tall 500 Clicbox",
    price: 95.38,
    src: option["1970 larder tall 500.jpg"].default,
  },
  {
    name: "1970 Larder Tall 600 Clicbox",
    price: 101.33,
    src: option["1970 larder tall 600.jpg"].default,
  },
  {
    name: "2150 Larder Tall 300 Clicbox",
    price: 86.16,
    src: option["2150 larder tall 300.jpg"].default,
  },
  {
    name: "2150 Larder Tall 400 Clicbox",
    price: 94.35,
    src: option["2150 larder tall 400.jpg"].default,
  },
  {
    name: "2150 Larder Tall 500 Clicbox",
    price: 98.39,
    src: option["2150 larder tall 500.jpg"].default,
  },
  {
    name: "2150 Larder Tall 600 Clicbox",
    price: 104.5,
    src: option["2150 larder tall 600.jpg"].default,
  },
];

module.exports = options;
