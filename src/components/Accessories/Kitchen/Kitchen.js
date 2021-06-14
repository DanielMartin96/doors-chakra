import React from "react";

import KitchenComponent from "./KitchenComponent";

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
    "../../../assets/images/accessories/kitchen",
    false,
    /.(png|jpe?g|svg)$/
  )
);

const Kitchen = ({ colour, style, addToCart }) => {
  const products = [
    {
      name: `${colour} ${style} Corner Post (30mm)`,
      description: "720mm L x 30mm X 30mm",
      price: 13.87,
      src: accessories["corner-post.jpg"].default,
    },
    {
      name: `${colour} ${style} Corner Post (40mm)`,
      description: "720mm L x 40mm X 40mm",
      price: 13.87,
      src: accessories["corner-post.jpg"].default,
    },
    {
      name: `${colour} ${style} Corner Post (720mm)`,
      description: "720mm L x 80mm X 80mm",
      price: 27.74,
      src: accessories["corner-post-dark.jpg"].default,
    },
    {
      name: `${colour} ${style} Corner Post (900mm)`,
      description: "900mm L x 80mm X 80mm",
      price: 34.68,
      src: accessories["corner-post-dark.jpg"].default,
    },
    {
      name: "Hinged Corner Post (Chrome)",
      description:
        "715mm, chrome. Complete with all fixings. Fixing edge of door must be square edged.",
      price: 43.71,
      src: accessories["hinged-corner-post.jpg"].default,
    },
    {
      name: "Hinged Corner Post (Satin Chrome)",
      description:
        "715mm, satin chrome. Complete with all fixings. Fixing edge of door must be square edged.",
      price: 30.32,
      src: accessories["hinged-corner-post.jpg"].default,
    },
    {
      name: "Hinged Corner Post (Stainless Steel)",
      description:
        "715mm, stainless steel. Complete with all fixings. Fixing edge of door must be square edged.",
      price: 38.08,
      src: accessories["hinged-corner-post.jpg"].default,
    },
    {
      name: `${colour} ${style} Plain Wine Rack Front (4 bottle)`,
      description: "715mm x 150mm, 4 bottle",
      price: 23.44,
      src: accessories["plain-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Plain Wine Rack Front (8 bottle)`,
      description: "715mm x 296mm, 8 bottle",
      price: 30.68,
      src: accessories["plain-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Plain Wine Rack Front (16 bottle)`,
      description: "715mm x 496mm, 16 bottle",
      price: 38.73,
      src: accessories["plain-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Frieze Wine Rack Front (4 bottle)`,
      description: "715mm x 150mm, 4 bottle",
      price: 23.44,
      src: accessories["frieze-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Frieze Wine Rack Front (8 bottle)`,
      description: "715mm x 296mm, 8 bottle",
      price: 30.68,
      src: accessories["frieze-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Frieze Wine Rack Front (16 bottle)`,
      description: "715mm x 496mm, 16 bottle",
      price: 38.73,
      src: accessories["frieze-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Round Wine Rack Front (5 bottle)`,
      description: "715mm x 150mm, 5 bottle",
      price: 23.44,
      src: accessories["round-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Round Wine Rack Front (10 bottle)`,
      description: "715mm x 296mm, 8 bottle",
      price: 30.68,
      src: accessories["round-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Round Wine Rack Front (15 bottle)`,
      description: "715mm x 496mm, 15 bottle",
      price: 38.73,
      src: accessories["round-wine-rack.jpg"].default,
    },
    {
      name: `${colour} ${style} Wine Rack Rail`,
      description: "100mm H x 2540mm L. Bottle Centres 100mm",
      price: 24.13,
      src: accessories["rack-rail.jpg"].default,
    },
    {
      name: `${colour} ${style} Wall End Shelf Unit (720mm)`,
      description: "720mm H x 300mm L x 300mm D. Supplied unassembled",
      price: 37.99,
      src: accessories["wall-end-shelf.jpg"].default,
    },
    {
      name: `${colour} ${style} Wall End Shelf Unit (900mm)`,
      description: "900mm H x 300mm L x 300mm D. Supplied unassembled",
      price: 43.83,
      src: accessories["wall-end-shelf.jpg"].default,
    },
    {
      name: `${colour} ${style} Base End Shelf Unit (Left Hand)`,
      description: "720mm H x 300mm x 570mm D. Supplied unassembled",
      price: 65.76,
      src: accessories["base-end-shelf-unit.jpg"].default,
    },
    {
      name: `${colour} ${style} Base End Shelf Unit (Right Hand)`,
      description: "720mm H x 300mm x 570mm D. Supplied unassembled",
      price: 65.76,
      src: accessories["base-end-shelf-unit.jpg"].default,
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
        <KitchenComponent product={product} addToCart={addToCart} key={idx} />
      ))}
    </div>
  );
};

export default Kitchen;
