import React from 'react';
import { useEffect } from 'react';
import logements from '../datas/logements.json'
import { useParams, useNavigate, } from "react-router-dom";
import Accordion from './Accordion';

const title = ["Description", "Équipements"]

const HousingDropdown = () => {
    const { id } = useParams()
    const logement = logements.find((housing) => housing.id === id)
    const navigate = useNavigate();

    useEffect(() => {

        if (!logement.id) {
            console.log("Logement non trouvé.404");
            navigate("/Page404");
        }
    }, [logement.id, navigate]);

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