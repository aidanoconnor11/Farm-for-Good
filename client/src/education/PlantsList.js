import React from "react";
import PlantBugSquare from "./components/PlantBugSquare";

function PlantsList(props) {
  return (
    <ul className="plants-list">
      {props.items.map((plants) => (
        <PlantBugSquare
          plant={plants.plant}
          image={plants.img}
          description={plants.description}
        />
      ))}
    </ul>
  );
}

export default PlantsList;
