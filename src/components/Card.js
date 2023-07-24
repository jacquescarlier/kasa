import logements from "../datas/logements.json";
import React from "react";
import { Link } from "react-router-dom";

function Card() {
  
  return (
    <div className="card-style">
      {logements.map((logement) => (
        <Link
          to={`/HousingFile/${logement.id}`}
          key={logement.id}
          className="card-div"
        >
          <img src={logement.cover} alt={logement.title}></img>
          <p className="card-title">{logement.title}</p>
        </Link>
      ))}
      ;
    </div>
  );
}
export default Card;
