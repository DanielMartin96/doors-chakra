// function that imports all necessary images
function importAll(r) {
  let images = {};
  r.keys().map((item) => {
    return (images[item.replace("./", "")] = r(item));
  });
  return images;
}

// imports all the images from the aldridge folder in assets/images
const hingesPhotos = importAll(
  require.context(
    "../../../assets/images/hingedrawersinternals/hinges",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const options = [
  {
    name: "110° soft close Hinge (Sensys 8645i)",
    description:
      "110° opening angle, soft close, 3 way adjustment, screw fix cup. For use on standard cabinets. Note: Image shows hinge with covers that are not supplied.",
    src: hingesPhotos["110-soft-close.jpg"].default,
    colourChoice: true,
    price: 1.54,
  },
  {
    name: "165° Soft Close Hinge (Sensys 86571 B12)",
    description:
      "165° opening angle, soft close, 3 way adjustment, screw fix cup. For use on corner cabinets.",
    src: hingesPhotos["165-soft-close.jpg"].default,
    colourChoice: true,
    price: 4.26,
  },
  {
    name: "45° Angled Unit Hinge (Sensys 8639i W45)",
    description:
      "95° opening angle, soft close, 3 way adjustment, screw fix cup. For use on 45° angled cabinets. Note: Image shows hinge with covers that are not supplied.",
    src: hingesPhotos["45-angled-unit.jpg"].default,
    colourChoice: true,
    price: 4.0,
  },
  {
    name: "Hettich Bi-fold Hinge 50/65° (Intermat 9930)",
    description:
      "50°-65° opening angle, 3 way adjustment, screw fix cup. For use on corner cabinets.",
    src: hingesPhotos["hettich-bifold-50-65.jpg"].default,
    colourChoice: true,
    price: 2.01,
  },
  {
    name: "Intermat 110° Hinge for Integrated Fridge Freezer",
    description:
      "For use with cross mounting plate for integrated fridge freezer (HCMPIFF)",
    src: hingesPhotos["intermat-110.jpg"].default,
    colourChoice: false,
    price: 0.71,
  },
  {
    name: "Cross Mounting Plate for Integrated Fridge Freezer",
    description: "To be used with Intermat 110° hinge for Fridge Freezer",
    src: hingesPhotos["cross-mounting-plate.jpg"].default,
    colourChoice: false,
    price: 0.24,
  },
  {
    name: "Standard Hinge Mounting Plate",
    description:
      "Manual height adjustment +/- 3mm. 0mm rise. Euro screws. Suitable for Sensys & Internal Hinges.",
    src: hingesPhotos["standard-hinge-mounting.jpg"].default,
    colourChoice: true,
    price: 0.19,
  },
  {
    name: "Cam Adjustable Hinge Mounting Plate",
    description:
      "Cam height adjustment +/- 2mm. 0mm rise. Euro screws. Suitable for Sensys & Internal hinges.",
    src: hingesPhotos["cam-adjustable.jpg"].default,
    colourChoice: true,
    price: 0.45,
  },
  {
    name: "Blum Aventos HK-S Flap Door Hinging System",
    description:
      "With clip-on, fully adjustable door assembly, and adjustable soft-closing mechanism that can be tailored to suit individual door weights. To suit doors up to 355mm high, and up to 900mm wide. Supplied in pairs with door fixing brackets, and light grey cover clips.",
    src: hingesPhotos["blum-aventos.jpg"].default,
    colourChoice: false,
    price: 32.36,
  },
  {
    name: "Hettich 110° Non Soft Close Hinge",
    description: "110° opening angle",
    src: hingesPhotos["hettich-110.jpg"].default,
    colourChoice: true,
    price: 1.58,
  },
  {
    name: "165° Non Soft Close Hinge (Sensys 8657)",
    description:
      "165° opening angle, 3 way adjustment, screw fix cup. For use with push to open pin.",
    src: hingesPhotos["165-non-soft.jpg"].default,
    colourChoice: true,
    price: 3.21,
  },
  {
    name: "Hettich Push To Open Pin",
    description:
      "A gentle press on the door is all it takes for the Push to open piston to move the door into a position that easily lets you get your fingers behind to open it.",
    src: hingesPhotos["hettich-push.jpg"].default,
    colourChoice: true,
    price: 5.02,
  },
  {
    name: "Bag of 25 Black Hinge Cover Caps",
    description: "Supplied in packs of 25",
    src: hingesPhotos["bag-of-25.jpg"].default,
    colourChoice: false,
    price: 7.1,
  },
];

module.exports = options;
