import React from 'react';
import { useEffect } from 'react';
import logements from '../datas/logements.json'
import { useParams, useNavigate } from "react-router-dom";
import Dropdown from './Dropdown';


const HousingValidity = () => {
    const { id } = useParams()
    console.log("id:", id);
    const logement = logements.find((item) => item.id === id)
    console.log("logement", logement)
    const navigate = useNavigate();
    useEffect(() => {
        if (!logement) {
            console.log("Logement non trouvé.404");
            navigate("/Page404");
        }
    }, [logement, navigate]);
    if (!logement) {
        return null
    }

    return (
        <div>
            <section className="drop">
                    <Dropdown text="Description">
                        <p>{logement.description}</p>
                    </Dropdown>
                    <Dropdown text="Equipement">
                        {<ul>{logement.equipments.map((equipement) =>
                            <li key={equipement}>{equipement}</li>)}
                        </ul>}
                    </Dropdown>
                </section>
        </div>
    );
};

export default HousingValidity;