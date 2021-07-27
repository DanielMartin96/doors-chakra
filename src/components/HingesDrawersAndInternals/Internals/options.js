// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const internals = importAll(
  require.context(
    "../../../assets/images/hingedrawersinternals/internals",
    true,
    /.(png|jpe?g|svg)$/
  )
);

console.log(internals);

const options = [
  {
    name: "Corner Unit - Nuvola",
    description:
      "Ideal for retrofitting. Shelves operate independently of each other. Available with white or grey shelves. Installed height per shelf: 150mm. Built in depth: 470, 480 or 490mm. For minimum cabinet widths 800 or 1000mm. 1 guide fixes to carcases helf, 1 guide to base of cabinet, pivoting mechaninisms fix to carcase sides. Please note: carcase shelf must be installed in cabinet (not included). Trays operate independently. Ideal for retro fitting. Every set comes complete with fixing materials and fitting instructions.",
    src: internals["corner unit - nuvola.jpg"].default,
    price: "",
  },
  {
    name: "Swing Out Larder Units - Vauth-Sagel Tal Gate",
    description:
      "1200-1450mm, 1450-1700mm: 4 baskets included. 1700-1950, 1900-2140mm: 5 baskets included. Built-in depth min: 480mm. For cabinet widths 500 or 600mm. Total weight capacity max: 75kg. Weight capacity per basket max: 15kg. Recommended hinges (not inc): 110/120° for 500 and 600mm larder units. If soft closing required, hinges with damper must be used ",
    src: internals["corner unit - nuvola.jpg"].default,
    price: "",
  },
  {
    name: "Chrome Wire Three Quarter Carousel Sets",
    description:
      "Three quarter carousel sets with chrome wire trays to suit 800 or 900mm corner cabinets. Spindle fitted to the cabinet at the top and base, vertically adjustable from 634-715mm. Shelves swivel independetly.",
    src: internals["chrome wire carousel.jpg"].default,
    price: "",
  },
];

module.exports = options;
