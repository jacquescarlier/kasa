import { useState } from "react";
import Arrow from '../pictures/arrow_back.png'

function Dropdown({ children, text }) {
    const [isOpen, setIsOpen] = useState(false)
    const [isRotated, setIsRotated] = useState(false)
    const handleClick = () => {
        setIsRotated(!isRotated);
        setIsOpen(!isOpen);
    }
    return (
        <div className="dropdown">
            <div className="dropdown__config">
                <p className="dropdown__config--text">{text}</p>
                <img
                    onClick={handleClick}
                    src={Arrow}
                    alt="Fléche pour afficher la description"
                    className={isRotated ? "rotated" : "arrow"}
                />
            </div>
            <div className={`dropdown__config--content ${isOpen ? "open" : ""}`}>
                {children}
            </div>
        </div >
    );
}

export default Dropdown; 