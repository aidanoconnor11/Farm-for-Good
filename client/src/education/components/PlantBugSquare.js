import React from "react";
import "./PlantBugSquare.css";
import { Link } from "react-router-dom";

function PlantBugSquare(props) {
  return (
    <div className="container">
      <Link to={`/learn/${props.plant}`}>
        <div className="plantbug-square">
          <div className="plant-item-image">
            <img src={props.image} alt="C" />
          </div>
          <div className="plant-item__info">
            <h2>{props.plant}</h2>
            <p>{props.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default PlantBugSquare;
