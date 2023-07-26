import React, { useState } from 'react';
import Arrow from "../pictures/arrow_down.png";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    const [isRotated, setIsRotated] = useState(false);
    const handleClick = () => {
        setIsRotated(!isRotated);
        setIsActive(!isActive);
    };

    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={handleClick}>
                <div className="dropdownTitle">{title}</div>
                <div> <img 
                    src={Arrow}
                    alt="Fléche pour afficher le description"
                    className={isRotated ? "rotated" : "arrow"} />

                </div>

            </div>
            {isActive && <div className="accordion-content">{content}</div>}
        </div>
    );
};

export default Accordion;