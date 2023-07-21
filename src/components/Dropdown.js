import { useState } from "react";
import Arrow from "../pictures/arrow_down.png";

function Dropdown({ children, text }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRotated, setIsRotated] = useState(false);
  const handleClick = () => {
    setIsRotated(!isRotated);
    setIsOpen(!isOpen);
  };
  return (
    <div className="dropdown">
      <div className="dropdownInitial">
        <p className="dropdownText">{text}</p>
        <img
          onClick={handleClick}
          src={Arrow}
          alt="Fléche pour afficher la description"
          className={isRotated ? "rotated" : "arrow"}
        />
      </div>
      <div className={`dropdownContent ${isOpen ? "open" : "close"}`}>
        {children}
      </div>
    </div>
  );
}

export default Dropdown;
