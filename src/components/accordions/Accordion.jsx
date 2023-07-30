import React, { useState } from 'react';
import Arrow from "../../pictures/arrow_down.png";

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    setTimeout(()=> console.log("isactive",!isActive), 1000);
    const handleClick = () => {
        setTimeout(()=> setIsActive(!isActive),300)
    };
    

   // {isActive && <div className="accordion-content isActive">{content}</div>}
    return (
        <div className="accordion-item">
            <div className="accordion-title" onClick={handleClick}>
                <div className="dropdownTitle">{title}</div>
                <div> <img
                    src={Arrow}
                    alt="Fléche pour afficher le description"
                    className={isActive ? "rotated" : "arrow"} />
                </div>
            </div>
            <div className={isActive ? "accordion-content-active" : "accordion-content"}>{content}</div>
            
        </div>
    );
};

export default Accordion;