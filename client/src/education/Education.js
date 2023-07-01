import React from "react";
import PlantBugSquare from "./components/PlantBugSquare";
import PlantsList from "./PlantsList";

const loadedPlants = [
  {
    plant: "corn",
    img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
    description: "This is the best fruit",
  },
  {
    plant: "corn",
    img: "https://cdn.britannica.com/36/167236-050-BF90337E/Ears-corn.jpg",
    description: "This is the best fruit",
  },
];

function Education() {
  return <PlantsList items={loadedPlants} />;
}

export default Education;
