// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const colours = importAll(
  require.context("../../assets/images/colours", false, /.(png|jpe?g|svg)$/)
);

// These arrays are where you would add new colours
const options = [
  {
    name: "High Gloss White",
    src: colours["High Gloss White.jpg"].default,
  },
  {
    name: "High Gloss Cream",
    src: colours["High Gloss Cream.jpg"].default,
  },
  {
    name: "High Gloss Light Grey",
    src: colours["High Gloss Light Grey.jpg"].default,
  },
  {
    name: "High Gloss Dust Grey",
    src: colours["High Gloss Dust Grey.jpg"].default,
  },
  {
    name: "High Gloss Cashmere",
    src: colours["High Gloss Cashmere.jpg"].default,
  },
  {
    name: "Porcelain White",
    src: colours["Porcelaine white.jpg"].default,
  },
  {
    name: "Satin White",
    src: colours["Satin White.jpg"].default,
  },
  {
    name: "Super White Ash",
    src: colours["Super White Ash.jpg"].default,
  },
  {
    name: "Alabaster",
    src: colours["Alabaster.jpg"].default,
  },
  {
    name: "Ivory",
    src: colours["Ivory.jpg"].default,
  },
  {
    name: "Vanilla",
    src: colours["Vanilla.jpg"].default,
  },
  {
    name: "Opengrain White",
    src: colours["Opengrain White.jpg"].default,
  },
  {
    name: "Oakgrain Cream",
    src: colours["Opengrain White.jpg"].default,
  },
  {
    name: "Oakgrain Mussel",
    src: colours["Oakgrain Mussel.jpg"].default,
  },
  {
    name: "Oakgrain Cashmere",
    src: colours["Oakgrain Cashmere.jpg"].default,
  },
  {
    name: "Oakgrain Grey",
    src: colours["Oakgrain Grey.jpg"].default,
  },
  {
    name: "Matt Mussel",
    src: colours["Matt Mussel.jpg"].default,
  },
  {
    name: "Matt Pebble",
    src: colours["Matt Pebble.jpg"].default,
  },
  {
    name: "Matt Cashmere",
    src: colours["Matt Cashmere.jpg"].default,
  },
  {
    name: "Matt Dove Grey",
    src: colours["Matt Dove Grey.jpg"].default,
  },
  {
    name: "Matt Dust Grey",
    src: colours["Matt Dust Grey.jpg"].default,
  },
  {
    name: "Matt Dakkar",
    src: colours["Matt Dakkar.jpg"].default,
  },
  {
    name: "Matt Taupe",
    src: colours["Matt Taupe.jpg"].default,
  },
  {
    name: "Matt Stone Grey",
    src: colours["Matt Stone Grey.jpg"].default,
  },
  {
    name: "Matt Denim",
    src: colours["Matt Denim.jpg"].default,
  },
  {
    name: "Matt Indigo Blue",
    src: colours["Matt Indigo Blue.jpg"].default,
  },
  {
    name: "Matt Kombu Green",
    src: colours["Matt Kombu Green.jpg"].default,
  },
  {
    name: "Matt Graphite",
    src: colours["Matt Graphite.jpg"].default,
  },
  {
    name: "Matt Black",
    src: "",
  },
  {
    name: "London Concrete",
    src: colours["London Concrete.jpg"].default,
  },
  {
    name: "Moldau Acacia",
    src: "",
  },
  {
    name: "Canadian Maple",
    src: colours["Canadian Maple.jpg"].default,
  },
  {
    name: "Halifax White Oak",
    src: colours["Halifax White Oak.jpg"].default,
  },
  {
    name: "Halifax Natural Oak",
    src: colours["Halifax Natural Oak.jpg"].default,
  },
  {
    name: "Lissa Oak",
    src: colours["Lissa Oak.jpg"].default,
  },
  {
    name: "Paintable",
    src: colours["Paintable Vinyl.jpg"].default,
  },
];

module.exports = options;
