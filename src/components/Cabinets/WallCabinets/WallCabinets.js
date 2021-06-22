import ClicBoxColourTab from "../ClicBoxColourTab";
import options from "./options";
import CabinetComponent from "../CabinetComponent";

const WallCabinets = () => {
  return (
    <div>
      <ClicBoxColourTab />
      <hr />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {options.map((cabinet, idx) => (
          <CabinetComponent cabinet={cabinet} />
        ))}
      </div>
    </div>
  );
};

export default WallCabinets;
