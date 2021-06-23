import React from "react";

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
    "../../assets/images/cabinets/choices",
    true,
    /.(png|jpe?g|svg)$/
  )
);

const ClicBoxColourTab = ({ setColour, colour }) => {
  return (
    <div>
      <p>
        <b>Choose your ClicBox colour:</b>
      </p>
      <div style={{ display: "flex" }}>
        <div
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={() => setColour("White")}
        >
          <img src={option["white.jpeg"].default} alt="White" />
          <p
            style={{
              textAlign: "center",
            }}
          >
            {colour === "White" ? <b>White</b> : "White"}
          </p>
        </div>
        <div
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={() => setColour("Urban Oak")}
        >
          <img src={option["urban_oak.jpeg"].default} alt="Urban Oak" />
          <p style={{ textAlign: "center" }}>
            {colour === "Urban Oak" ? <b>Urban Oak</b> : "Urban Oak"}
          </p>
        </div>
        <div
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={() => setColour("Grey")}
        >
          <img src={option["grey.png"].default} alt="Grey" />
          <p style={{ textAlign: "center" }}>
            {colour === "Grey" ? <b>Grey</b> : "Grey"}
          </p>
        </div>
        <div
          style={{ padding: "5px", cursor: "pointer" }}
          onClick={() => setColour("Anthracite")}
        >
          <img src={option["anthracite.png"].default} alt="Anthracite" />
          <p style={{ textAlign: "center" }}>
            {colour === "Anthracite" ? <b>Anthracite</b> : "Anthracite"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ClicBoxColourTab;
