import React from "react";

import GeneralComponent from "./GeneralComponent";

// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const accessories = importAll(
  require.context(
    "../../../assets/images/accessories",
    false,
    /.(png|jpe?g|svg)$/
  )
);

const General = ({ colour, style, addToCart, multiple }) => {
  const products = [
    {
      name: "Door Care Kit",
      description:
        "Kit includes a tin of 235ml VuPlex polish, micro anti-scratch polishing cloth and full instructions.",
      price: 12.34,
      customLength: false,
      src: accessories["door-care-kit.jpg"].default,
    },
    {
      name: `${colour} Tangent Cornice`,
      description: "45mm high when fixed. Length: 3050mm",
      price: 15.63,
      customLength: false,
      src: accessories["tangent-cornice.jpg"].default,
    },
    {
      name: `${colour} Bullnose Cornice/Pelmet`,
      description: "48mm high when fixed. Length: 3050mm",
      price: 18.46,
      customLength: false,
      src: accessories["bullnose-cornice-pelmet.jpg"].default,
    },
    {
      name: `${colour} Tangent Light Pelmet`,
      description: "57mm high when fixed. Length: 3050mm",
      price: 13.51,
      customLength: false,
      src: accessories["tangent-light-pelmet.jpg"].default,
    },
    {
      name: `${colour} ${style} Scalloped Pelmet`,
      description: "2540mm Length x 150mm Height",
      price: 32.14,
      customLength: false,
      src: accessories["scalloped-pelmet.jpg"].default,
    },
    {
      name: `${colour} ${style} Frieze Pelmet`,
      description: "Available in any length from 360mm to 2540mm. Height 120mm",
      price: 18.04,
      customLength: true,
      src: accessories["frieze-pelmet.jpg"].default,
      min: 360,
      max: 2540,
    },
    {
      name: `${colour} 36mm Multi-Purpose Rail`,
      description:
        "A55mm x 36mm x 3050mm Length. Can be used for various applications including cornice, pelmet, gable ends, pilasters and to box around a group of units.",
      price: 21.65,
      customLength: false,
      src: accessories["36mm-multi-purpose-rail.jpg"].default,
    },
    {
      name: `${colour} ${style} Curved Multi-purpose Rail`,
      description:
        "320mm x 320mm x 36mm. For use as cornice and pelment to match curved doors. Fits flush with door face.",
      price: 41.06,
      customLength: false,
      src: accessories["curved-multi-purpose-rail.jpg"].default,
    },
    {
      name: `${colour} ${style} Dental Rail`,
      description: "2550mm Length x 60mm Height. Excludes cornice & panel.",
      price: 22.24,
      customLength: false,
      src: accessories["dental-rail.jpg"].default,
    },
    {
      name: `${colour} ${style} PVC'd Plinth`,
      description:
        "Can be supplied any height between 100mm and 200mm. 2540mm Length.",
      price: 17.32,
      customLength: true,
      src: accessories["pvcd-plinth.jpg"].default,
      min: 100,
      max: 200,
    },
    {
      name: `${colour} ${style} PVC'd Profiled Plinth`,
      description:
        "Can be supplied any height between 100mm and 200mm. 2540mm Length.",
      price: 17.32,
      customLength: true,
      src: accessories["pvcd-profiled-plinth.jpg"].default,
      min: 100,
      max: 200,
    },
    {
      name: "Aluminium Plinth",
      description: "150mm x 3m Length. Pack of 10 clips included.",
      price: 36.29,
      customLength: false,
      src: accessories["aluminium-plinth.jpg"].default,
    },
    {
      name: `${colour} Preglued Edging Tape`,
      description: "Supplied as 22mm x 50m rolls.",
      price: 12.48,
      customLength: false,
      src: accessories["preglued-edging-tape.jpg"].default,
    },
    {
      name: `${colour} Preglued Edging Tape (100m)`,
      description: `Preglued Edging Tape for ${colour}. Supplied as 22mm x 100m rolls.`,
      price: 24.95,
      customLength: false,
      src: accessories["preglued-edging-tape-100m.jpg"].default,
    },
    {
      name: `${colour} Self Adhesive Vinyl`,
      description: "Peel and Stick Vinyl. 620mm Width. Price per linear metre.",
      price: 12.1,
      customLength: false,
      src: accessories["self-adhesive-vinyl.jpg"].default,
    },
    {
      name: `${colour} Self Adhesive Vinyl (25m)`,
      description: "Peel and Stick Vinyl. 620mm Width x 25m.",
      price: 272.43,
      customLength: false,
      src: accessories["self-adhesive-vinyl.jpg"].default,
    },
    {
      name: `${colour} Vinyl`,
      description: "Non Adhensive Vinyl. 1400mm Width. Price per linear metre",
      price: 13.92,
      customLength: false,
      src: accessories["vinyl.jpg"].default,
    },
    {
      name: "Shelf Brackets (2 pack)",
      description:
        "Brushed steel. Suitable for 5mm to 20mm shelves. Includes wall fixings.",
      price: 12.37,
      customLength: false,
      src: accessories["shelf-brackets-2.jpg"].default,
    },
    {
      name: "Flush Mount Brackets (pack of 8)",
      description: "35mm Height x 35mm Width (pack of 8)",
      price: 1.09,
      customLength: false,
      src: accessories["flush-mount-brackets-8.jpg"].default,
    },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
      }}
    >
      {products.map((product, idx) => (
        <GeneralComponent product={product} addToCart={addToCart} key={idx} />
      ))}
    </div>
  );
};

export default General;
