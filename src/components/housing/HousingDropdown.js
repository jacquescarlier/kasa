import React from 'react';
import logements from '../../datas/logements.json'
import { useParams } from "react-router-dom";
import Accordion from '../accordions/Accordion';

const title = ["Description", "Équipements"]

const HousingDropdown = () => {
    const { id } = useParams()
    const logement = logements.find((housing) => housing.id === id)
   
    return (
        <section className="accordionSection ">
            <div className="accordionBody">
                <Accordion key={title} title={title[0]} content={<p>{logement.description}</p>} />
            </div>
            <div className="accordionBody">
                <Accordion key={title} title={title[1]} content={<ul>{logement.equipments.map((equipement) =>
                    <li key={equipement}>{equipement}</li>)}
                </ul>} />
            </div>
        </section>
    );
};

export default HousingDropdown;